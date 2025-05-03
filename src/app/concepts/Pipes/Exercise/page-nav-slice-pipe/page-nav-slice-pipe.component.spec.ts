import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNavSlicePipeComponent } from './page-nav-slice-pipe.component';

describe('PageNavSlicePipeComponent', () => {
  let component: PageNavSlicePipeComponent;
  let fixture: ComponentFixture<PageNavSlicePipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageNavSlicePipeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageNavSlicePipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
