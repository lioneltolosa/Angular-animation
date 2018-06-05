import { Injectable } from '@angular/core';

@Injectable()
export class HeroService {

  heroes: HeroService[] = [];

  constructor(public name: string) { }
  

}

const ALL_HEROES = [
  'Windstorm',
  'RubberMan',
  'Bombasto',
  'Magneta',
  'Dynama',
  'Narco',
  'Celeritas',
  'Dr IQ',
  'Magma',
  'Tornado',
  'Mr. Nice'
].map(name => new HeroService(name));
