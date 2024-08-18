import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalComponent } from './pages/principal/principal.component';
import { MainRoutingModule } from './main-routing.module';
import { ComponentsModule } from '../../shared/components/components.module';

@NgModule({
  declarations: [
    PrincipalComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    MainRoutingModule,
  ]
})
export class MainModule { }
