import {PokemonSimpleModel} from './pokemon-simple.model';

export interface PokemonResultModel {
  count: number;
  previous?: string;
  next?: string;
  results: PokemonSimpleModel[];
}
