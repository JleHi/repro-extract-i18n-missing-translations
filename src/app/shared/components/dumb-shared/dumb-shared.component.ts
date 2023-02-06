import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'homepage-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class Dumb2Component implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    $localize`:@@shared.dumb.test:Test in shared dumb component`
  }


}
