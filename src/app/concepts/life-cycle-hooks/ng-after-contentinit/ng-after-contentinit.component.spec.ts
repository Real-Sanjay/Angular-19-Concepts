import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgAfterContentinitComponent } from './ng-after-contentinit.component';

describe('NgAfterContentinitComponent', () => {
  let component: NgAfterContentinitComponent;
  let fixture: ComponentFixture<NgAfterContentinitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgAfterContentinitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgAfterContentinitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
