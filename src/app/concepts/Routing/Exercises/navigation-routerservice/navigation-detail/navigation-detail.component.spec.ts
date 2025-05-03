import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationDetailComponent } from './navigation-detail.component';

describe('NavigationDetailComponent', () => {
  let component: NavigationDetailComponent;
  let fixture: ComponentFixture<NavigationDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavigationDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
