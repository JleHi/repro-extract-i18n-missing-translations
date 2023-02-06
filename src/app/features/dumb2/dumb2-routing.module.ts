import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { Dumb2Component } from './dumb2/dumb2.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: Dumb2Component,
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class Dumb2RoutingModule { }
