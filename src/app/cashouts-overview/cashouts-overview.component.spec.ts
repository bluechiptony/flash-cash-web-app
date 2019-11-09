import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashoutsOverviewComponent } from './cashouts-overview.component';

describe('CashoutsOverviewComponent', () => {
  let component: CashoutsOverviewComponent;
  let fixture: ComponentFixture<CashoutsOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashoutsOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashoutsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
