import { Component, OnInit, Input } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { Pizza }         from '../pizza';
import { PizzaService }  from '../pizza.service';

@Component({
  selector: 'app-pizza-main-layout',
  templateUrl: './pizza-main-layout.component.html',
  styleUrls: ['./pizza-main-layout.component.css']
})
export class PizzaMainLayoutComponent implements OnInit {
  pizzas: Pizza[];
  pizzas$: Observable<Pizza[]>;
  private searchTerms = new Subject<string>();
  
  selectedBase: string;
  selectedType: string;
  price: number;
  pizzaToggle : string;

  bases = [
    {value: 'Thin Crust', viewValue: 'Thin Crust'},
    {value: 'Regular base', viewValue: 'Regular base'},
    {value: 'Flat bread', viewValue: 'Flat bread'},
    {value: 'Multigrain ', viewValue: 'Multigrain'},
    {value: 'All', viewValue: 'All'}
  ];

  types = [
    {value: 'Cheese burst', viewValue: 'Cheese burst'},
    {value: 'Cheese topping', viewValue: 'Cheese topping'},
    {value: 'No cheese ', viewValue: 'No cheese'},
    {value: 'All', viewValue: 'All'}
  ];


  constructor(private pizzaService: PizzaService) { }

  ngOnInit() {
  this.getPizzas();
    
  }
   
  // Push a search term into the observable stream.
  search(term: any): void {
    console.log(term);

    term = event.srcElement.innerHTML;
     this.pizzaToggle = term
   //this.searchTerms.next(term);
   this.searchT();
  }
   
  
   searchT() {
    //this.editHero = undefined;
    event.stopImmediatePropagation();
    if(this.selectedBase === undefined || this.selectedBase === 'All' )
      this.selectedBase = '';
    if(this.selectedType === undefined || this.selectedType === 'All')
      this.selectedType = '';
    if(this.pizzaToggle === undefined)
      this.pizzaToggle = '';
  
    let term= [this.pizzaToggle,this.selectedBase,this.selectedType]
    if (term) {
      this.pizzaService.doGET(term)
        .subscribe(pizzas => 
          this.pizzas = pizzas
          );
      
    }
  }
  
  getPizzas(): void {
    console.log('here');
    this.pizzaService.getPizzas()
      .subscribe(pizzas => this.pizzas = pizzas);
  }

}
