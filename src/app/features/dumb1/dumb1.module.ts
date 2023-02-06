import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Dumb1sRoutingModule } from './dumb1-routing.module';
import { Dumb1Component } from './pages/dumb1/dumb1.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [Dumb1Component],
  imports: [
    CommonModule,
    Dumb1sRoutingModule,
    SharedModule
  ],
  exports: [
  ]
})
export class Dumb1sModule { }
