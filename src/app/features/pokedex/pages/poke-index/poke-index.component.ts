import {Component, inject} from '@angular/core';
import {PokemonService} from '../../services/pokemon.service';
import {PokemonResultModel} from '../../models/pokemon-result.model';
import {PokemonDetailsModel} from '../../models/pokemon-details.model';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-poke-index',
  imports: [
  ],
  templateUrl: './poke-index.component.html',
  styleUrl: './poke-index.component.scss'
})
export class PokeIndexComponent {

  private readonly _pokemonService: PokemonService = inject(PokemonService);
  private readonly _http: HttpClient = inject(HttpClient);

  pokemonResult!: PokemonResultModel;
  pokemonDetails?: PokemonDetailsModel;

  constructor() {
    this.findMany('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0');
  }

  findMany(url: string) {
    this._pokemonService.findMany(url).subscribe({
      next: (result: PokemonResultModel) => {
        this.pokemonResult = result;
      }
    });
  }

  findOne(url: string) {
    this._pokemonService.findOne(url).subscribe({
      next: (result: PokemonDetailsModel) => {
        this.pokemonDetails = result;
      }
    })
  }
}
