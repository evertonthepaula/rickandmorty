import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { CharacterResponseInterface } from '../../../interfaces/response/character-response.iterface';

@Injectable({
  providedIn: 'root'
})
export class CharacterHttpService {

  constructor(
    private readonly http: HttpClient
  ) { }

  /**
   * Gets a list of Characters
   *
   * @param page - The current page to show
   * @param name - The characters name - optional
   */
  get(page: number, name: string = ''): Observable<CharacterResponseInterface> {
    return this.http.get<CharacterResponseInterface>(`${environment.rickandmortyapi}/character/?page=${page}&name=${name}`);
  }
}
