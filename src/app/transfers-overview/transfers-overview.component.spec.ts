import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransfersOverviewComponent } from './transfers-overview.component';

describe('TransfersOverviewComponent', () => {
  let component: TransfersOverviewComponent;
  let fixture: ComponentFixture<TransfersOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransfersOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransfersOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
