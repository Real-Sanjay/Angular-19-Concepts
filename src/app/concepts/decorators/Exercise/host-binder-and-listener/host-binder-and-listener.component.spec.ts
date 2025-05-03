import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostBinderAndListenerComponent } from './host-binder-and-listener.component';

describe('HostBinderAndListenerComponent', () => {
  let component: HostBinderAndListenerComponent;
  let fixture: ComponentFixture<HostBinderAndListenerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HostBinderAndListenerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HostBinderAndListenerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
