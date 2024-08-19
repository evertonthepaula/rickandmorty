import { Component, OnInit } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faHouse, faHeart } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngxs/store';
import { FavoritesState } from '../../../core/store/favorites/favorites.state';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  faHouse: IconProp = faHouse
  faHeart: IconProp = faHeart;
  total: number = 0;

  constructor(
    private readonly store: Store,
  ) { }

  ngOnInit(): void {
    this.store
      .select(FavoritesState.totalFavorites)
      .subscribe(length => this.total = length);
  }

}
