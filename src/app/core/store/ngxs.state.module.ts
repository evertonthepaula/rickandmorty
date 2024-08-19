import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';

// ENVIRONMENT
import { environment } from 'src/environments/environment';

// STATE MODULES STATEMENTS
import { FavoritesState } from './favorites/favorites.state';
import { CharactersState } from './characters/characters.state';

@NgModule({
  imports: [
    NgxsModule.forRoot([
      FavoritesState,
      CharactersState
    ], { developmentMode: !environment.production }),
    NgxsStoragePluginModule.forRoot({
      key: []
    }),
  ],
  exports: [NgxsModule, NgxsStoragePluginModule]
})
export class NgxsStateModule { }
