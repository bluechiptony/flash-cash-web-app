import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcquisitionsOverviewComponent } from './acquisitions-overview.component';

describe('AcquisitionsOverviewComponent', () => {
  let component: AcquisitionsOverviewComponent;
  let fixture: ComponentFixture<AcquisitionsOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcquisitionsOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcquisitionsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
