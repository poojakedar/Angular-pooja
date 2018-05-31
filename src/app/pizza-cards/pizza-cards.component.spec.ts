import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaCardsComponent } from './pizza-cards.component';

describe('PizzaCardsComponent', () => {
  let component: PizzaCardsComponent;
  let fixture: ComponentFixture<PizzaCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzaCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
