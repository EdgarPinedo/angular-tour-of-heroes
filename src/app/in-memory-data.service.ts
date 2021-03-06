import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let heroes = [
      { id: 11, name: 'Dr Nice', puntos: 20 },
      { id: 12, name: 'Narco', puntos: 19 },
      { id: 13, name: 'Bombasto', puntos: 17 },
      { id: 14, name: 'Celeritas', puntos: 15 },
      { id: 15, name: 'Magneta', puntos: 14 },
      { id: 16, name: 'RubberMan', puntos: 13 },
      { id: 17, name: 'Dynama', puntos: 11 },
      { id: 18, name: 'Dr IQ', puntos: 8 },
      { id: 19, name: 'Magma', puntos: 5 },
      { id: 20, name: 'Tornado', puntos: 2 }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
