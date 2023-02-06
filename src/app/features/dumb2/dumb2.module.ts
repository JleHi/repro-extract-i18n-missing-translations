import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Dumb2Component } from './dumb2/dumb2.component';
import { Dumb2RoutingModule } from './dumb2-routing.module';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [Dumb2Component],
  imports: [
    CommonModule,
    Dumb2RoutingModule,
    SharedModule
  ]
})
export class Dumb2Module { }
