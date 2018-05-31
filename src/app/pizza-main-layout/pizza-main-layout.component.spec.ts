import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaMainLayoutComponent } from './pizza-main-layout.component';

describe('PizzaMainLayoutComponent', () => {
  let component: PizzaMainLayoutComponent;
  let fixture: ComponentFixture<PizzaMainLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzaMainLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaMainLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
