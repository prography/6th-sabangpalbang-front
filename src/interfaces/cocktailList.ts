import { ICocktail } from './cocktail';

export interface ICocktailList {
  alcoholList?: null | ICocktail[];
  nameList: null | ICocktail[];
  popularList: null | ICocktail[];
}