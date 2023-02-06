import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dumb1',
  templateUrl: './dumb1.component.html',
  styleUrls: ['./dumb1.component.scss']
})
export class Dumb1Component implements OnInit {
  
  
  constructor() {
   }

  ngOnInit(): void {
    $localize`:@@feature.dumb1.test:Test in dumb1 component`
  }
}
