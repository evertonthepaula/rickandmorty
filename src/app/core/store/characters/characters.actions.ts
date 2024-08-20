import { CharacterBasics } from '../../interfaces/character.interface';

export class AddCharactersList {
  static readonly type = '[Characters] List Characters';
  constructor(public payload: CharacterBasics[]) { }
}

export class ClearCharactersList {
  static readonly type = '[Characters] Clear Characters List';
}

