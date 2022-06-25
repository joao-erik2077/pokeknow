import { PokemonDataService } from './../services/pokemon-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.page.html',
  styleUrls: ['./pokemon.page.scss'],
})
export class PokemonPage implements OnInit {

  pokemon: any = [];

  constructor(public pokemonDataService: PokemonDataService) { }

  ngOnInit() {
    this.pokemon = this.pokemonDataService.getData();
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

  capitalize(x: string): string {
    return x[0].toUpperCase() + x.substring(1);
  }

  getColor(type: string): string {
    return `type-${type}`;
  }

}
