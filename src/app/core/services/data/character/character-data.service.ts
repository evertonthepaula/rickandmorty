import { Injectable } from '@angular/core';
import { CharacterResponse } from '../../../interfaces/response/character-response.iterface';
import { CharacterBasics } from '../../../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class CharacterDataService {
  /**
   * Gets basic Character info
   *
   * @param data - The Character Response Interface
   *
   */
  basics(response: CharacterResponse): CharacterBasics[] {
    return response.results.map(({ id, name, species, type, image }) => ({ id, name, species, type, image }))
  }

}
