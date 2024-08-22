import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// LOCAL COMPONENTS
import { LoaderDotsComponent } from './dots/dots.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LoaderDotsComponent
  ],
  exports: [
    LoaderDotsComponent
  ]
})

export class LoadersComponentsModule { }
