import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {
  private index = 1;
  private totalPokemons = 905;
  private pokemons: any[] = [];
  private readonly offset: number = 20;

  constructor(private http: HttpClient) { }

  getPokemons() {
    // eslint-disable-next-line curly
    if (this.index >= this.totalPokemons) return this.pokemons;
    this.apiGet(this.index + this.offset);
    return this.pokemons;
  }

  async apiGet(quantity: number) {
    for (let i = this.index; i < quantity; i++) {
      await this.http.get(`https://pokeapi.co/api/v2/pokemon/${i}`).toPromise().then((data: any) => this.pokemons[i-1] = data);
      this.index++;
    }
  }

  getPokemon(id: number) {
    let pokemon;
    this.http.get(`https://pokeapi.co/api/v2/pokemon/${id}`).toPromise().then((data: any) => pokemon = data);
    return pokemon;
  }

  async getRandomPokemon() {
    const random = Math.round(Math.random() * this.totalPokemons);
    let pokemon;
    await this.http.get(`https://pokeapi.co/api/v2/pokemon/${random}`).toPromise().then((data: any) => pokemon = data);
    return pokemon;
  }
}
