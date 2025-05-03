import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutinglinkNavigationComponent } from './routinglink-navigation.component';

describe('RoutinglinkNavigationComponent', () => {
  let component: RoutinglinkNavigationComponent;
  let fixture: ComponentFixture<RoutinglinkNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoutinglinkNavigationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutinglinkNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
