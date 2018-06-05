import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleAnimation01Component } from './example-animation-01.component';

describe('ExampleAnimation01Component', () => {
  let component: ExampleAnimation01Component;
  let fixture: ComponentFixture<ExampleAnimation01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleAnimation01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleAnimation01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
