import { PokemonDataService } from './../services/pokemon-data.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  pokemons = [
    {
      name: 'Bulbassaur',
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
      id: 1,
      types: ['grass', 'poison'],
    },
    {
      name: 'Ivyssaur',
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
      id: 2,
      types: ['grass', 'poison'],
    },
    {
      name: 'Venussaur',
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png',
      id: 3,
      types: ['grass', 'poison'],
    },
    {
      name: 'Charmander',
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
      id: 4,
      types: ['fire'],
    },
    {
      name: 'Charmeleon',
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png',
      id: 5,
      types: ['fire'],
    },
    {
      name: 'Charizard',
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',
      id: 6,
      types: ['fire', 'flying'],
    },
  ];

  constructor(public route: Router, public pokemonDataService: PokemonDataService) {}

  getColor(type: string): string {
    return `type-${type}`;
  }

  formatId(id): string {
    if (id >= 100) {
      return `#${id}`;
    } else if (id >= 10) {
      return `#0${id}`;
    } else {
      return `#00${id}`;
    }
  }

  pokeNavigate(data: any) {
    this.pokemonDataService.setData(data);
    this.route.navigateByUrl('pokemon');
  }

}
