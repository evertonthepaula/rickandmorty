import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritosComponent } from './pages/favoritos/favoritos.component';
import { FavoriteRoutingModule } from './favorite-routing.module';
import { ComponentsModule } from '../../shared/components/components.module';

@NgModule({
  declarations: [
    FavoritosComponent
  ],
  imports: [
    CommonModule,
    FavoriteRoutingModule,
    ComponentsModule
  ]
})
export class FavoriteModule { }
