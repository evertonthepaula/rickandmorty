import { Injectable } from '@angular/core';
import { CharacterResponseInterface } from '../../../interfaces/response/character-response.iterface';
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
  basics(response: CharacterResponseInterface): CharacterBasics[] {
    return response.results.map(({ id, name, species, type, image }) => ({ id, name, species, type, image }))
  }

}
