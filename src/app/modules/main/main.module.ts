import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalComponent } from './pages/principal/principal.component';
import { MainRoutingModule } from './main-routing.module';
import { ComponentsModule } from '../../shared/components/components.module';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    PrincipalComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    ComponentsModule,
    MainRoutingModule,
  ]
})
export class MainModule { }
