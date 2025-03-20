import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PokemonResultModel} from '../models/pokemon-result.model';
import {PokemonDetailsModel} from '../models/pokemon-details.model';
import {forkJoin, map, Observable, switchMap} from 'rxjs';
import {PokemonSimpleModel} from '../models/pokemon-simple.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private readonly _http: HttpClient = inject(HttpClient);

  findMany(url: string) {
    return this._http.get<PokemonResultModel>(url)
      .pipe(
        switchMap( (pokemonResult: PokemonResultModel) => {
          const pokeRequests: Observable<any>[] = pokemonResult.results.map(
            (pokemonSimple : PokemonSimpleModel) => {
              return this._http.get<any>(pokemonSimple.url);
            }
          );
          return forkJoin(pokeRequests).pipe(
            map(
              (pokemonDetailsList: any[]) => {
                pokemonResult.results.forEach(
                  (p: PokemonSimpleModel, index: number) => {
                    p.sprite = pokemonDetailsList[index].sprites.front_default
                  }
                );
                return pokemonResult;
              }
            )
          );
        } )
      );
  }

  findOne(url: string) {
    return this._http.get<PokemonDetailsModel>(url);
  }
}
