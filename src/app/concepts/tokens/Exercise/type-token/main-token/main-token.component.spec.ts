import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTokenComponent } from './main-token.component';

describe('MainTokenComponent', () => {
  let component: MainTokenComponent;
  let fixture: ComponentFixture<MainTokenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainTokenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
