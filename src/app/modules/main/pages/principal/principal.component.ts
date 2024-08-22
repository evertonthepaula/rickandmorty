import { AfterViewInit, Component, ElementRef, HostListener, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable, catchError, debounceTime, distinctUntilChanged, filter, map, of, switchMap, finalize } from 'rxjs';

import { CharacterBasics } from '../../../../core/interfaces/character.interface';
import { CharacterDataService } from '../../../../core/services/data/character/character-data.service';
import { CharacterHttpService } from '../../../../core/services/http/character/character-http.service';
import { AddCharactersList, ClearCharactersList } from '../../../../core/store/characters/characters.actions';
import { CharactersState } from '../../../../core/store/characters/characters.state';
import { ToogleFavorite } from '../../../../core/store/favorites/favorites.actions';
import { FormControl } from '@angular/forms';
import { CharacterResponseInterface } from '../../../../core/interfaces/response/character-response.iterface';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit, AfterViewInit {
  @ViewChildren('characterList', { read: ElementRef }) characterList!: QueryList<ElementRef>

  characters$: Observable<CharacterBasics[]> = this.store.select(CharactersState.characters);
  intersectionObserveScrollList$: IntersectionObserver = this.defineNativeObserve();
  formControlSearch = new FormControl();
  page: number = 1;
  isLoading: boolean = true;

  constructor(
    private readonly store: Store,
    private readonly characterHttpService: CharacterHttpService,
    private readonly characterDataService: CharacterDataService
  ) { }

  ngOnInit(): void {
    this.loadCharacters();
    this.defineSearchBehavior();
  }

  ngAfterViewInit(): void {
    this.characterList.changes.subscribe(() => this.onScroolCharacterListObserve());
  }

  private onScroolCharacterListObserve(): void {
    if (this.characterList?.last?.nativeElement) {
      this.intersectionObserveScrollList$.observe(this.characterList?.last?.nativeElement);
    }
  }

  private defineNativeObserve(): IntersectionObserver {
    return new IntersectionObserver(([lastElement], observer) => {
      if (!lastElement?.isIntersecting) {
        return;
      }

      this.loadCharacters();
      observer.unobserve(lastElement.target);
    }, { rootMargin: '500px' })
  }


  private loadCharacters(): void {
    this.fetchCharacters(this.formControlSearch.value || '')
      .subscribe((result: CharacterBasics[]) => {
        this.store.dispatch(new AddCharactersList(result));
      });
  }

  private defineSearchBehavior() {
    this.formControlSearch.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        filter((name: string) => name.length > 2 || name.length === 0),
        switchMap((name: string) => {
          this.clearPagination();
          return this.fetchCharacters(name);
        })
      )
      .subscribe((result: CharacterBasics[]) => this.store.dispatch(new AddCharactersList(result)));
  }

  private fetchCharacters(name?: string): Observable<CharacterBasics[]> {
    this.isLoading = true;

    return this.characterHttpService
      .get(this.page, name)
      .pipe(
        map((result: CharacterResponseInterface) => {
          result.info.next && this.page++;
          return this.characterDataService.basics(result)
        }),
        catchError(error => of([])),
        finalize(() => this.isLoading = false)
      )
  }

  private clearPagination(): void {
    this.page = 1;
    this.store.dispatch(new ClearCharactersList());
  }

  changeFav(character: CharacterBasics): void {
    this.store.dispatch(new ToogleFavorite(character))
  }
}
