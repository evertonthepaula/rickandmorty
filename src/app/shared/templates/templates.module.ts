import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainContentComponent } from './main-content/main-content.component';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [
    MainContentComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [
    MainContentComponent
  ]
})
export class TemplatesModule { }
