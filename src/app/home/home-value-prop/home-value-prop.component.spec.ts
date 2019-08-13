import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeValuePropComponent } from './home-value-prop.component';

describe('HomeValuePropComponent', () => {
  let component: HomeValuePropComponent;
  let fixture: ComponentFixture<HomeValuePropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeValuePropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeValuePropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
