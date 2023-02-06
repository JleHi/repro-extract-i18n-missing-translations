import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Dumb1Component } from './pages/dumb1/dumb1.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: Dumb1Component, 
    data : { shouldReuse: true }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Dumb1sRoutingModule { 
  
}
