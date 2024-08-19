import { CharacterBasics } from '../../interfaces/character.interface';

export class ToogleFavorite {
  static readonly type = '[Favorites] Toogle';
  constructor(public payload: CharacterBasics) { }
}

