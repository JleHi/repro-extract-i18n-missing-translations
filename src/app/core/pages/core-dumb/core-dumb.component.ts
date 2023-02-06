import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-core-dumb',
  templateUrl: './core-dumb.component.html',
  styleUrls: ['./core-dumb.component.scss']
})
export class CoreDumbComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $localize`:@@core.dumb.test:Test in core dumb component`
  }

}
