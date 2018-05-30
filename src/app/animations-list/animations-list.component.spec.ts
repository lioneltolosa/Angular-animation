import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationsListComponent } from './animations-list.component';

describe('AnimationsListComponent', () => {
  let component: AnimationsListComponent;
  let fixture: ComponentFixture<AnimationsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimationsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimationsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
