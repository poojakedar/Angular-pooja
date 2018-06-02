import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Pizza } from './pizza';


@Injectable({
  providedIn: 'root'
})
export class PizzaService {
  private pizzaURL = 'api/pizzas'; // URL to web api

  constructor(private http: HttpClient) { }

  /* GET pizzas based on search term */
  searchPizza(term): Observable<Pizza[]> {
    console.log("GET", term);

    let url = `assets/pizza.json`;
    // Add safe, URL encoded search parameter if there is a search term
    const options = term ?
      { params: new HttpParams().set('init', term[0]).set('base', term[1]).set('type', term[2]) } : {};
    console.log(options);
    return this.http.get<Pizza[]>(this.pizzaURL, options)
      .pipe(
      tap(_ => this.log(`fetched pizza based oon search term ${term}`)),
      catchError(this.handleError<Pizza[]>('searchPizzas', []))
      );
  }

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
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
       console.error(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.error('PizzaService: ' + message);
  }
}