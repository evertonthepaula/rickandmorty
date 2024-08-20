import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable, catchError, debounceTime, distinctUntilChanged, filter, map, of, pipe, switchMap } from 'rxjs';

import { CharacterBasics } from '../../../../core/interfaces/character.interface';
import { CharacterDataService } from '../../../../core/services/data/character/character-data.service';
import { CharacterHttpService } from '../../../../core/services/http/character/character-http.service';
import { AddCharactersList, ClearCharactersList } from '../../../../core/store/characters/characters.actions';
import { CharactersState } from '../../../../core/store/characters/characters.state';
import { ToogleFavorite } from '../../../../core/store/favorites/favorites.actions';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {
  characters$: Observable<CharacterBasics[]> = this.store.select(CharactersState.characters);
  formControlSearch = new FormControl();
  page: number = 1;

  constructor(
    private readonly store: Store,
    private readonly characterHttpService: CharacterHttpService,
    private readonly characterDataService: CharacterDataService
  ) { }

  ngOnInit(): void {
    this.loadInitialValues();
    this.defineSearchBehavior();
  }

  private loadInitialValues() {
    this.loadCharacters()
      .subscribe((result: CharacterBasics[]) => this.store.dispatch(new AddCharactersList(result)));
  }

  private defineSearchBehavior() {
    this.formControlSearch.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        filter((name: string) => name.length > 2 || name.length === 0),
        switchMap((name: string) => {
          this.clearPagination();
          return this.loadCharacters(name)
        })
      )
      .subscribe((result: CharacterBasics[]) => this.store.dispatch(new AddCharactersList(result)));
  }

  private loadCharacters(name?: string): Observable<CharacterBasics[]> {
    return this.characterHttpService
      .get(this.page, name)
      .pipe(
        map((result) => this.characterDataService.basics(result)),
        catchError(error => of([]))
      )
  }

  private clearPagination() {
    this.page = 1;
    this.store.dispatch(new ClearCharactersList());
  }

  changeFav(character: CharacterBasics) {
    this.store.dispatch(new ToogleFavorite(character))
  }
}
