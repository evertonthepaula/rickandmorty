import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateModule } from '@ngx-translate/core';
import { CardCharacterComponent } from './card-character/card-character.component';
import { EmptyContentComponent } from './empty-content/empty-content.component';
import { LoadersComponentsModule } from './loaders/loaders.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    CardCharacterComponent,
    NavBarComponent,
    EmptyContentComponent
  ],
  imports: [
    TranslateModule,
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    LoadersComponentsModule
  ],
  exports: [
    CardCharacterComponent,
    NavBarComponent,
    EmptyContentComponent,
    LoadersComponentsModule
  ]
})
export class ComponentsModule { }
