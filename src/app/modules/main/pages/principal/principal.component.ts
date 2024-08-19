import { Component, OnInit } from '@angular/core';
import { CharacterHttpService } from '../../../../core/services/http/character/character-http.service';
import { CharacterDataService } from '../../../../core/services/data/character/character-data.service';
import { map } from 'rxjs';
import { CharacterBasics } from '../../../../core/interfaces/character.interface';
import { Store } from '@ngxs/store';
import { ToogleFavorite } from '../../../../core/store/favorites/favorites.actions';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  characters!: Array<CharacterBasics>;
  page: number = 1;

  constructor(
    private readonly store: Store,
    private readonly characterHttpService: CharacterHttpService,
    private readonly characterDataService: CharacterDataService
  ) { }

  ngOnInit(): void {
    this.characterHttpService
      .get(this.page)
      .pipe(map((result) => this.characterDataService.basics(result)))
      .subscribe((result) => this.characters = result);
  }

  changeFav(character: CharacterBasics) {
    console.log('changeFav ::: ', character);

    this.store.dispatch(new ToogleFavorite(character))
  }
}
