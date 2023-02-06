import {
  NgModule,
  Optional,
  SkipSelf
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { CoreDumbComponent } from './pages/core-dumb/core-dumb.component';

@NgModule({
  declarations: [
    CoreDumbComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forRoot({}, {})
  ],
  providers: [
  ]
})
export class CoreModule {
  constructor(
    @Optional() @SkipSelf() parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import in AppModule only.');
    }

    let enhancers = [];
  }
}
