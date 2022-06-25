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

  apiGet(quantity: number) {
    for (let i = this.index; i < quantity; i++) {
      this.http.get(`https://pokeapi.co/api/v2/pokemon/${i}`).subscribe((data: any) => this.pokemons[i-1] = data);
      this.index++;
    }
  }
}
