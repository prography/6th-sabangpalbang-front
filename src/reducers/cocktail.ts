import { ICocktail } from '../interfaces/cocktail';

export const COCKTAIL_LIST_REQUEST = 'cocktail/COCKTAIL_LIST_REQUEST' as const;
export const COCKTAIL_LIST_SUCCESS = 'cocktail/COCKTAIL_LIST_SUCCESS' as const;
export const COCKTAIL_LIST_FAILURE = 'cocktail/COCKTAIL_LIST_FAILURE' as const;

export const cocktailListRequest = (orderOption: 'alcoholList' | 'nameList' | 'popularList') => ({ type: COCKTAIL_LIST_REQUEST, orderOption });
export const cocktailListSuccess = (payload: { listName: 'alcoholList' | 'nameList' | 'popularList', listData: any }) => ({ type: COCKTAIL_LIST_SUCCESS, payload });
export const cocktailListFailure = (error: Error) => ({ type: COCKTAIL_LIST_FAILURE, error });

export type IAction =
  | ReturnType<typeof cocktailListRequest>
  | ReturnType<typeof cocktailListSuccess>
  | ReturnType<typeof cocktailListFailure>;

const initialState = {
  alcoholList: null,
  nameList: null,
  popularList: null,
  loading: false,
  offset: {
    alcoholList: 0,
    nameList: 0,
    popularList: 0
  },
  error: null
};

export interface IState {
  alcoholList: null | ICocktail[];
  nameList: null | ICocktail[];
  popularList: null | ICocktail[];
  loading: boolean;
  offset: {
    alcoholList: number;
    nameList: number;
    popularList: number;
  }
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
        [action.payload.listName]: state[action.payload.listName] === null ? action.payload.listData : state[action.payload.listName]?.concat(action.payload.listData),
        offset: {
          ...state.offset,
          [action.payload.listName]: state.offset[action.payload.listName] + action.payload.listData.length
        },
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

