import { Action, Selector, State, StateContext } from '@ngxs/store';

// ACTIONS
import { ToogleFavorite } from './favorites.actions';

// SERVICES

// MODELS
import { FavoritesStateModel } from './favorites.state.model';
import { CharacterBasics } from '../../interfaces/character.interface';
import { Injectable } from '@angular/core';

@State({
  name: 'favorites',
  defaults: {
    characters: [],
  }
})
@Injectable()
export class FavoritesState {
  constructor() { }

  @Selector()
  static characters(state: FavoritesStateModel): CharacterBasics[] {
    return state.characters;
  }

  @Selector()
  static totalFavorites(state: FavoritesStateModel): number {
    return state.characters.length;
  }

  @Selector()
  static favoritesIds(state: FavoritesStateModel): number[] {
    return state.characters.map(fav => fav.id);
  }

  @Action(ToogleFavorite)
  toogleFavorite({ getState, setState }: StateContext<FavoritesStateModel>, { payload }: ToogleFavorite) {
    const oldSate = getState().characters;
    setState({ characters: [{ ...payload, favorite: true }, ...oldSate] });
  }
}
