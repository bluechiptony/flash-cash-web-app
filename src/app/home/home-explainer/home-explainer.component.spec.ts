import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeExplainerComponent } from './home-explainer.component';

describe('HomeExplainerComponent', () => {
  let component: HomeExplainerComponent;
  let fixture: ComponentFixture<HomeExplainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeExplainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeExplainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
