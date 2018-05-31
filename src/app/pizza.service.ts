import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


import { Pizza } from './pizza';
import { PIZZAS } from './pizza-data';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

class SearchItem {
  constructor(public id: number,
              public name: string,
              public pizza: string,
              public price: string,
              public base: string,
              public type: string) {
  }
}

@Injectable({
  providedIn: 'root'
})
export class PizzaService {
  private pizzaURL = 'api/pizzas'; // URL to web api
    //private SearchItem = new Subject<string>();
    //  courses$: Observable<Pizza[]>;
  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }
 
 /** GET pizzas from the server */
   getPizzas (): Observable<Pizza[]>{
    return this.http.get<Pizza[]>(this.pizzaURL)
    .pipe(
      tap(pizzas => this.log('fetched pizza')),
      catchError(this.handleError('getPizzas',[])));
  }

    /* GET pizzas based on veg/non-veg search term */
  searchPizza(term: string ): Observable<Pizza[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Pizza[]>(`${this.pizzaURL}/?pizza=${term}`).pipe(
      tap(_ => this.log(`found heroes matching "${term}"`)),
      catchError(this.handleError<Pizza[]>('searchPizzas', []))
    );
  }
 
doGET(term) {
  console.log("GET",term);
  let url = `assets/pizza.json`;
      // Add safe, URL encoded search parameter if there is a search term
    const options = term ?
     { params: new HttpParams().set('pizza', term[0]).set('base',term[1]).set('type',term[2]) } : {};
 // search.set('base', 'thin crust');
  return this.http.get<Pizza[]>(this.pizzaURL, options)
      .pipe(
        catchError(this.handleError<Pizza[]>('searchPizzas', []))
      );
}
/* search(term: string): Observable<SearchItem[]> {
  	//https://codecraft.tv/courses/angular/http/http-with-observables/
    let apiURL = `${this.pizzaURL}?term=${term}`;
    return this.http.get(apiURL)
        .map(res => {
          return res.json().results.map(item => {
            return new SearchItem(
                item.id,
                item.name,
                item.pizza,
                item.price,
                item.base,
                item.type
            );
          });
        });
}*/
    /** GET pizza by id. Will 404 if id not found */
  getPizza(id: number): Observable<Pizza> {
    const url = `${this.pizzaURL}/${id}`;
    return this.http.get<Pizza>(url).pipe(
      tap(_ => this.log(`fetched pizza id=${id}`)),
      catchError(this.handleError<Pizza>(`getPizza id=${id}`))
    );
  }

    /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add('PizzaService: ' + message);
  }
  }



