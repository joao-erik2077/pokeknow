import { PokemonDataService } from './../services/pokemon-data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokeApiService } from '../services/poke-api.service';

import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  loading = false;
  public pokemons: any[] = [];
  private totalPokemons = 905;

  constructor(
    private route: Router,
    private pokemonDataService: PokemonDataService,
    private pokeApiService: PokeApiService
  ) {}

  ngOnInit() {
    this.getPokemons();
  }

  getPokemons() {
    this.pokemons = this.pokeApiService.getPokemons();
  }

  loadData(event) {
    // eslint-disable-next-line curly
    if (this.loading) return;
    if (!this.loading) {
      this.loading = true;
      this.getPokemons();
      this.loading = false;
    }
    event.target.complete();

    if (this.pokemons.length >= this.totalPokemons) {
      event.target.disabled = true;
    }
  }

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

  capitalize(x: string): string {
    return x[0].toUpperCase() + x.substring(1);
  }
}
