import { ICocktail } from './cocktail';

export interface ICocktailList {
  randomList?: null | ICocktail[];
  nameList: null | ICocktail[];
  popularList: null | ICocktail[];
}