import { Component } from '@angular/core';
import { FavoritesState } from '../../../../core/store/favorites/favorites.state';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { CharacterBasics } from '../../../../core/interfaces/character.interface';
import { ToogleFavorite } from '../../../../core/store/favorites/favorites.actions';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.scss']
})
export class FavoritosComponent {

  characters$: Observable<CharacterBasics[]> = this.store.select(FavoritesState.characters);

  constructor(private readonly store: Store) { }

  changeFav(character: CharacterBasics): void {
    this.store.dispatch(new ToogleFavorite(character))
  }

}
