import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Eventbinding3Component } from './eventbinding3.component';

describe('Eventbinding3Component', () => {
  let component: Eventbinding3Component;
  let fixture: ComponentFixture<Eventbinding3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Eventbinding3Component]
    });
    fixture = TestBed.createComponent(Eventbinding3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
