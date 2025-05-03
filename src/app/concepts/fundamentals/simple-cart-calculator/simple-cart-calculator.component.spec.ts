import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleCartCalculatorComponent } from './simple-cart-calculator.component';

describe('SimpleCartCalculatorComponent', () => {
  let component: SimpleCartCalculatorComponent;
  let fixture: ComponentFixture<SimpleCartCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleCartCalculatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleCartCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
