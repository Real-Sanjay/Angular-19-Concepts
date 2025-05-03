import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeMainComponent } from './change-main.component';

describe('ChangeMainComponent', () => {
  let component: ChangeMainComponent;
  let fixture: ComponentFixture<ChangeMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangeMainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
