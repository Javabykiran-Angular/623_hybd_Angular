import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomPipeComponent } from './custom-pipe.component';

describe('CustomPipeComponent', () => {
  let component: CustomPipeComponent;
  let fixture: ComponentFixture<CustomPipeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomPipeComponent]
    });
    fixture = TestBed.createComponent(CustomPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
