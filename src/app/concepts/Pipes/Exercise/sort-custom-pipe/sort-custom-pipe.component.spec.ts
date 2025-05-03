import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortCustomPipeComponent } from './sort-custom-pipe.component';

describe('SortCustomPipeComponent', () => {
  let component: SortCustomPipeComponent;
  let fixture: ComponentFixture<SortCustomPipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SortCustomPipeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SortCustomPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
