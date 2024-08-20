import { Action, Selector, State, StateContext, Store } from '@ngxs/store';

// ACTIONS
import { AddCharactersList, ClearCharactersList } from './characters.actions';

// SERVICES

// MODELS
import { CharacterStateModel } from './characters.state.model';
import { CharacterBasics } from '../../interfaces/character.interface';
import { Injectable } from '@angular/core';

// STATE
import { FavoritesState } from '../favorites/favorites.state';

@State({
  name: 'characters',
  defaults: {
    characters: [],
  }
})
@Injectable()
export class CharactersState {
  constructor(private store: Store) { }

  @Selector()
  static characters(state: CharacterStateModel): CharacterBasics[] {
    return state.characters;
  }

  @Action(AddCharactersList)
  addCharactersList({ getState, setState }: StateContext<CharacterStateModel>, { payload }: AddCharactersList) {
    const favoritesIds = this.store.selectSnapshot(FavoritesState.favoritesIds);
    const oldSate = getState().characters;

    if (!favoritesIds.length) {
      setState({ characters: [...payload, ...oldSate] });
    }

    const newCharacters: CharacterBasics[] = payload.map((character) => ({ ...character, favorite: favoritesIds.includes(character.id) }));
    setState({ characters: [...newCharacters, ...oldSate] });
  }


  @Action(ClearCharactersList)
  clearCharactersList({ setState }: StateContext<CharacterStateModel>) {
    setState({ characters: [] });
  }
}
