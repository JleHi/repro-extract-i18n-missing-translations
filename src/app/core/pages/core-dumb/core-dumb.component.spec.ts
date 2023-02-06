import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreDumbComponent } from './core-dumb.component';

describe('CoreDumbComponent', () => {
  let component: CoreDumbComponent;
  let fixture: ComponentFixture<CoreDumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoreDumbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoreDumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
