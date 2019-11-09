import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiftPayComponent } from './swift-pay.component';

describe('SwiftPayComponent', () => {
  let component: SwiftPayComponent;
  let fixture: ComponentFixture<SwiftPayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwiftPayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwiftPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
