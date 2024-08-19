import { Action, Selector, State, StateContext } from '@ngxs/store';

// ACTIONS
import { ToogleFavorite } from './favorites.actions';

// SERVICES

// MODELS
import { FavoritesStateModel } from './favorites.state.model';
import { CharacterBasics } from '../../interfaces/character.interface';

@State({
  name: 'favorites',
  defaults: {
    characters: [],
  }
})
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

  @Action(ToogleFavorite)
  toogleFavorite({ getState, setState }: StateContext<FavoritesStateModel>, { payload }: ToogleFavorite) {
    const oldSate = getState().characters;
    setState({ characters: [{ ...payload, favorite: true }, ...oldSate] });
  }
}
