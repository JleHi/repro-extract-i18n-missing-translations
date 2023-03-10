import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Dumb1Component } from './dumb1.component';

describe('Dumb1Component', () => {
  let component: Dumb1Component;
  let fixture: ComponentFixture<Dumb1Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Dumb1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dumb1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
