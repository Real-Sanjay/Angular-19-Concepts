import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationRouterserviceComponent } from './navigation-routerservice.component';

describe('NavigationRouterserviceComponent', () => {
  let component: NavigationRouterserviceComponent;
  let fixture: ComponentFixture<NavigationRouterserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavigationRouterserviceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigationRouterserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
