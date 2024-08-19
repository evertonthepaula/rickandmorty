import { CharacterBasics } from '../../interfaces/character.interface';

export class AddCharactersList {
  static readonly type = '[Characters] ListCharacters';
  constructor(public payload: CharacterBasics[]) { }
}


