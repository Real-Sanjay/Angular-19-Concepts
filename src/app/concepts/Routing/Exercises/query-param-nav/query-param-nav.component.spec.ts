import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryParamNavComponent } from './query-param-nav.component';

describe('QueryParamNavComponent', () => {
  let component: QueryParamNavComponent;
  let fixture: ComponentFixture<QueryParamNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QueryParamNavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QueryParamNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
