import { ICocktail } from '../interfaces/cocktail';

export type IOrderOption = 'alcoholList' | 'nameList' | 'popularList';

export const COCKTAIL_LIST_REQUEST = 'cocktail/COCKTAIL_LIST_REQUEST' as const;
export const COCKTAIL_LIST_SUCCESS = 'cocktail/COCKTAIL_LIST_SUCCESS' as const;
export const COCKTAIL_LIST_FAILURE = 'cocktail/COCKTAIL_LIST_FAILURE' as const;

export const REMOVE_OFFSET = 'cocktail/REMOVE_OFFSET' as const;

export const cocktailListRequest = (orderOption: IOrderOption, offset: number) => ({ type: COCKTAIL_LIST_REQUEST, payload: { orderOption, offset } });
export const cocktailListSuccess = (payload: { listName: IOrderOption, listData: any }) => ({ type: COCKTAIL_LIST_SUCCESS, payload });
export const cocktailListFailure = (error: Error) => ({ type: COCKTAIL_LIST_FAILURE, error });

export const removeOffset = (orderOption: IOrderOption) => ({type: REMOVE_OFFSET, payload: { orderOption }}); 

export const LIMIT = 6;

export type IAction =
  | ReturnType<typeof cocktailListRequest>
  | ReturnType<typeof cocktailListSuccess>
  | ReturnType<typeof cocktailListFailure>
  | ReturnType<typeof removeOffset>;

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
  isOffsetEnd: false,
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
  isOffsetEnd: boolean;
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
      let isOffsetEnd = false;
      if(action.payload.listData.length < LIMIT || action.payload.listData.length === 0) {
        isOffsetEnd = true;
      }
      return {
        ...state,
        [action.payload.listName]: state[action.payload.listName] === null ? action.payload.listData : state[action.payload.listName]?.concat(action.payload.listData),
        offset: {
          ...state.offset,
          [action.payload.listName]: state.offset[action.payload.listName] + action.payload.listData.length
        },
        isOffsetEnd,
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
    case REMOVE_OFFSET: {
      return {
        ...state,
        offset: {
          ...state.offset,
          [action.payload.orderOption]: 0
        }
      }
    }
    default: return { ...state };
  }
}

