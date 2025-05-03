import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormStepperComponent } from './reactive-form-stepper.component';

describe('ReactiveFormStepperComponent', () => {
  let component: ReactiveFormStepperComponent;
  let fixture: ComponentFixture<ReactiveFormStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormStepperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveFormStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
