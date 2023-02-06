import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'dumb-shared',
  templateUrl: './dumb-shared.component.html',
  styleUrls: ['./dumb-shared.component.scss']
})
export class Dumb2SharedComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    $localize`:@@shared.dumb.test:Test in shared dumb component`
  }


}
