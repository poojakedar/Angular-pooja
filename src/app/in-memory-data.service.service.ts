import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const pizzas = [
      { id: 11, name: 'Mr. Nice', pizza: 'Veg', image: 'assets/1.png',price: 200, base: 'thin crust', type: 'Cheese burst'},
      { id: 12, name: 'Narco', pizza: 'Veg', image: './assets/2.png',price: 300, base: 'Multigrain', type: 'Cheese burst' },
      { id: 13, name: 'Bombasto', pizza: 'Non Veg', image: 'assets/3.png',price: 200, base: 'Regular base', type: 'Cheese burst' },
      { id: 14, name: 'Celeritas', pizza: 'Veg', image: 'assets/4.png',price: 300, base: 'Flat bread', type: 'Cheese burst' },
      { id: 15, name: 'Magneta', pizza: 'Veg', image: 'assets/5.png',price: 200, base: 'thin crust', type: 'Cheese burst' },
      { id: 16, name: 'RubberMan', pizza: 'Non Veg', image: 'assets/6.png',price: 350, base: 'Flat bread', type: 'Cheese burst'},
      { id: 17, name: 'Dynama', pizza: 'Veg', image: 'assets/7.png',price: 250, base: 'Regular base', type: 'Cheese burst' },
      { id: 18, name: 'Dr IQ', pizza: 'Non Veg', image: 'assets/8.png',price: 400, base: 'Multigrain', type: 'Cheese burst' },
      { id: 19, name: 'Magma', pizza: 'Veg', image: 'assets/1.png',price: 250, base: 'thin crust', type: 'Cheese burst' },
      { id: 20, name: 'Tornado', pizza: 'Veg', image: 'assets/2.png',price: 200, base: 'Flat bread', type: 'Cheese burst' }
    ];
    return {pizzas};
  }
}