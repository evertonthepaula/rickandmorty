import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritosComponent } from './pages/favoritos/favoritos.component';
import { FavoriteRoutingModule } from './favorite-routing.module';
import { ComponentsModule } from '../../shared/components/components.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    FavoritosComponent
  ],
  imports: [
    TranslateModule,
    CommonModule,
    FavoriteRoutingModule,
    ComponentsModule
  ]
})
export class FavoriteModule { }
