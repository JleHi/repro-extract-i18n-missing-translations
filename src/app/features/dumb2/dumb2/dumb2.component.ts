import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'dumb2',
  templateUrl: './dumb2.component.html',
  styleUrls: ['./dumb2.component.scss']
})
export class Dumb2Component implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    $localize`:@@feature.dumb2.test:Test in dumb2 component`
  }


}
