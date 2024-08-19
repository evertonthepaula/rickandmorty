import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable, map } from 'rxjs';
import { CharacterBasics } from '../../../../core/interfaces/character.interface';
import { CharacterDataService } from '../../../../core/services/data/character/character-data.service';
import { CharacterHttpService } from '../../../../core/services/http/character/character-http.service';
import { AddCharactersList } from '../../../../core/store/characters/characters.actions';
import { CharactersState } from '../../../../core/store/characters/characters.state';
import { ToogleFavorite } from '../../../../core/store/favorites/favorites.actions';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {
  characters$: Observable<CharacterBasics[]> = this.store.select(CharactersState.characters);
  page: number = 1;

  constructor(
    private readonly store: Store,
    private readonly characterHttpService: CharacterHttpService,
    private readonly characterDataService: CharacterDataService
  ) { }

  ngOnInit(): void {
    this.loadCharacters();
  }

  loadCharacters(): void {
    this.characterHttpService
      .get(this.page)
      .pipe(map((result) => this.characterDataService.basics(result)))
      .subscribe((result) => this.store.dispatch(new AddCharactersList(result)));
  }

  changeFav(character: CharacterBasics) {
    this.store.dispatch(new ToogleFavorite(character))
  }
}
