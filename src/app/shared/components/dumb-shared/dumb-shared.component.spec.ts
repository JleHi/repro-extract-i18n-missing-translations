import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Dumb2Component } from './dumb-shared.component';

describe('Dumb2Component', () => {
  let component: Dumb2Component;
  let fixture: ComponentFixture<Dumb2Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Dumb2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dumb2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
