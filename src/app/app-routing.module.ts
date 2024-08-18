import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './shared/pages/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'principal', pathMatch: 'full' },
  {
    path: 'principal',
    loadChildren: () => import('src/app/modules/main/main.module').then(m => m.MainModule)
  },
  {
    path: 'favoritos',
    loadChildren: () => import('src/app/modules/favorite/favorite.module').then(m => m.FavoriteModule)
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
