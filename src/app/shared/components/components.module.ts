import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptyContentComponent } from './empty-content/empty-content.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CardCharacterComponent } from './card-character/card-character.component';


@NgModule({
  declarations: [
    CardCharacterComponent,
    NavBarComponent,
    EmptyContentComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule
  ],
  exports: [
    CardCharacterComponent,
    NavBarComponent,
    EmptyContentComponent
  ]
})
export class ComponentsModule { }
