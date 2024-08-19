import { Action, Selector, State, StateContext } from '@ngxs/store';

// ACTIONS
import { AddCharactersList } from './characters.actions';

// SERVICES

// MODELS
import { CharacterStateModel } from './characters.state.model';
import { CharacterBasics } from '../../interfaces/character.interface';


@State({
  name: 'characters',
  defaults: {
    characters: [],
  }
})
export class CharactersState {
  constructor() { }

  @Selector()
  static characters(state: CharacterStateModel): CharacterBasics[] {
    return state.characters;
  }

  @Action(AddCharactersList)
  AddCharactersList({ getState, setState }: StateContext<CharacterStateModel>, { payload }: AddCharactersList) {
    const oldSate = getState().characters;
    setState({ characters: [...payload, ...oldSate] });
  }
}
