import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const pizzas = [
      { id: 11, name: 'Mr. Nice',init:'v', pizza: 'Veg', image: 'assets/1.png',price: 200, base: 'Thin crust', type: 'Cheese burst'},
      { id: 12, name: 'Narco',init:'v', pizza: 'Veg', image: './assets/2.png',price: 300, base: 'Multigrain', type: 'Cheese burst' },
      { id: 13, name: 'Bombasto',init:'n', pizza: 'Non Veg', image: 'assets/3.png',price: 200, base: 'Regular base', type: 'Cheese burst' },
      { id: 14, name: 'Celeritas',init:'v', pizza: 'Veg', image: 'assets/4.png',price: 300, base: 'Flat bread', type: 'Cheese burst' },
      { id: 15, name: 'Magneta',init: 'v', pizza: 'Veg', image: 'assets/5.png',price: 200, base: 'Thin crust', type: 'Cheese burst' },
      { id: 16, name: 'RubberMan',init:'n', pizza: 'Non Veg', image: 'assets/6.png',price: 350, base: 'Flat bread', type: 'Cheese burst'},
      { id: 17, name: 'Dynama',init:'v', pizza: 'Veg', image: 'assets/7.png',price: 150, base: 'Thin crust', type: 'No Cheese' },
      { id: 18, name: 'Dr IQ',init:'n', pizza: 'Non Veg', image: 'assets/8.png',price: 400, base: 'Multigrain', type: 'Cheese burst' },
      { id: 19, name: 'Magma',init:'v', pizza: 'Veg', image: 'assets/1.png',price: 250, base: 'Thin crust', type: 'Cheese burst' },
      { id: 20, name: 'Tornado',init:'v', pizza: 'Veg', image: 'assets/2.png',price: 200, base: 'Flat bread', type: 'Cheese Topping' },
      { id: 21, name: 'Mr. Nice',init:'v', pizza: 'Veg', image: 'assets/1.png',price: 200, base: 'Thin crust', type: 'Cheese burst'},
      { id: 22, name: 'Narco',init:'v', pizza: 'Veg', image: './assets/2.png',price: 300, base: 'Multigrain', type: 'Cheese burst' },
      { id: 23, name: 'Bombasto',init:'n', pizza: 'Non Veg', image: 'assets/3.png',price: 400, base: 'Regular base', type: 'Cheese burst' },
      { id: 24, name: 'Celeritas',init:'v', pizza: 'Veg', image: 'assets/4.png',price: 300, base: 'Flat bread', type: 'Cheese burst' },
      { id: 25, name: 'Magneta',init: 'n', pizza: 'Non Veg', image: 'assets/5.png',price: 500, base: 'Thin crust', type: 'Cheese burst' },
      { id: 26, name: 'RubberMan',init:'v', pizza: 'Veg', image: 'assets/6.png',price: 350, base: 'Flat bread', type: 'Cheese burst'},
      { id: 27, name: 'Dynama',init:'v', pizza: 'Veg', image: 'assets/7.png',price: 250, base: 'Regular base', type: 'Cheese burst' },
      { id: 28, name: 'Dr IQ',init:'n', pizza: 'Veg', image: 'assets/8.png',price: 400, base: 'Multigrain', type: 'Cheese burst' },
      { id: 29, name: 'Magma',init:'v', pizza: 'Veg', image: 'assets/1.png',price: 250, base: 'Thin crust', type: 'Cheese burst' },
      { id: 30, name: 'Tornado',init:'v', pizza: 'Veg', image: 'assets/2.png',price: 600, base: 'Multigrain', type: 'Cheese Topping' }

    ];
    return {pizzas};
  }
}