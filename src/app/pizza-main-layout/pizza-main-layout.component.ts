import { Component, OnInit, Input } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { MatSelectModule } from '@angular/material/select';
import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';
 
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
  private searchTerms = new Subject<any>();
  
  selectedBase: string;
  selectedType: string;
  price: number;
  pizzaToggle : string;

  bases = [
    {value: 'Thin Crust', viewValue: 'Thin Crust'},
    {value: 'Regular base', viewValue: 'Regular base'},
    {value: 'Flat bread', viewValue: 'Flat bread'},
    {value: 'Multigrain ', viewValue: 'Multigrain'}
  ];

  types = [
    {value: 'Cheese burst', viewValue: 'Cheese burst'},
    {value: 'Cheese topping', viewValue: 'Cheese topping'},
    {value: 'No cheese ', viewValue: 'No cheese'}
  ];


  constructor(private pizzaService: PizzaService) { }

  ngOnInit() : void {

    this.pizzas$ = this.searchTerms.pipe(

      // wait 300ms after each keystroke before considering the term
      debounceTime(300),
 
      // ignore new term if same as previous term
      distinctUntilChanged(),
 
      // switch to new search observable each time the term changes
      switchMap((term: string) => this.pizzaService.searchPizza(term)),
    );
   
  }
   
 
 /*Set value for toggle and call search function*/
  setToggleValue(term: any): void {

   this.pizzaToggle = term
   this.search();

  }
   
/*Search pizza based on filters*/
   search() : void{

    if(this.selectedBase === undefined )
      this.selectedBase = '';
    if(this.selectedType === undefined )
      this.selectedType = '';
    if(this.pizzaToggle === undefined)
      this.pizzaToggle = '';
    
   let term= [this.pizzaToggle,this.selectedBase,this.selectedType];
   
   // Push a search term into the observable stream.
   this.searchTerms.next(term);
  }
  

}
