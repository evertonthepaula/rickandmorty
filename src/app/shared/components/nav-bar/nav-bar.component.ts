import { Component, OnInit } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faHouse, faHeart } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngxs/store';
import { FavoritesState } from '../../../core/store/favorites/favorites.state';
import { TranslateService } from '@ngx-translate/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

type langTpes = 'pt' | 'en';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  faHouse: IconProp = faHouse
  faHeart: IconProp = faHeart;
  total: number = 0;
  currentLanguage: langTpes = 'pt'
  currentPage!: string;

  constructor(
    private readonly translate: TranslateService,
    private readonly router: Router,
    private readonly store: Store,
  ) { }

  ngOnInit(): void {
    this.currentRouter();
    this.qtdFavorites();
  }

  private currentRouter(): void {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd)
      )
      .subscribe(() => this.currentPage = this.router.url);
  }

  private qtdFavorites(): void {
    this.store
      .select(FavoritesState.totalFavorites)
      .subscribe(length => this.total = length);
  }

  changeLanguage(type: langTpes): void {
    if (this.currentLanguage !== type) {
      this.translate.use(type);
      this.currentLanguage = type;
    }
  }

}
