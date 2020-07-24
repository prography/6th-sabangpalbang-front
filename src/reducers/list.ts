import { ICocktail } from '../interfaces/cocktail';
import { LIST_LIMIT } from '../../config/constants';

export const COCKTAIL_LIST_REQUEST = 'cocktail/COCKTAIL_SEARCH_LIST_REQUEST' as const;
export const COCKTAIL_LIST_SUCCESS = 'cocktail/COCKTAIL_SEARCH_LIST_SUCCESS' as const;
export const COCKTAIL_LIST_FAILURE = 'cocktail/COCKTAIL_SEARCH_LIST_FAILURE' as const;

export const cocktailListRequest = (name?:string, abvMin?:number, abvMax?:number) => ({ type: COCKTAIL_LIST_REQUEST, payload: {  name, abvMin, abvMax } });
export const cocktailListSuccess = (payload: { listData: any }) => ({ type: COCKTAIL_LIST_SUCCESS, payload });
export const cocktailListFailure = (error: Error) => ({ type: COCKTAIL_LIST_FAILURE, error });

export type IAction =
  | ReturnType<typeof cocktailListRequest>
  | ReturnType<typeof cocktailListSuccess>
  | ReturnType<typeof cocktailListFailure>;

const initialState = {
  nameList: null,
  loading: false,
  error: null
};

export interface IState {
  nameList: null | ICocktail[];
  loading: boolean;
  error: null | Error;
};

export default function reducer(state: IState = initialState, action: IAction): IState {
  switch (action.type) {
    case COCKTAIL_LIST_REQUEST: {
      return {
        ...state,
        loading: true,
        error: null
      }
    }
    case COCKTAIL_LIST_SUCCESS: {
      return {
        ...state,
        nameList: action.payload.listData,
        loading: false
      }
    }
    case COCKTAIL_LIST_FAILURE: {
      return {
        ...state,
        error: action.error,
        loading: false
      }
    }
    default: return { ...state };
  }
}

