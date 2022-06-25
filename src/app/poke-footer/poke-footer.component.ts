import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonDataService } from './../services/pokemon-data.service';
import { PokeApiService } from '../services/poke-api.service';

@Component({
  selector: 'app-poke-footer',
  templateUrl: './poke-footer.component.html',
  styleUrls: ['./poke-footer.component.scss'],
})
export class PokeFooterComponent {
  data: any = { myToggle: true };

  constructor(
    private route: Router,
    private pokemonDataService: PokemonDataService,
    private pokeApiService: PokeApiService
  ) {}

  async getRandomPokemon() {
    const data = await this.pokeApiService.getRandomPokemon();
    this.pokemonDataService.setData(data);
    this.route.navigateByUrl('pokemon');
  }
}
