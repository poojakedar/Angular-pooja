import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaHeaderComponent } from './pizza-header.component';

describe('PizzaHeaderComponent', () => {
  let component: PizzaHeaderComponent;
  let fixture: ComponentFixture<PizzaHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzaHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
