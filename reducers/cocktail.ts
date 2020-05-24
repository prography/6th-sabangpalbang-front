export const COCKTAIL_LIST_REQUEST = 'cocktail/COCKTAIL_LIST_REQUEST' as const;
export const COCKTAIL_LIST_SUCCESS = 'cocktail/COCKTAIL_LIST_SUCCESS' as const;
export const COCKTAIL_LIST_FAILURE = 'cocktail/COCKTAIL_LIST_FAILURE' as const;

export const cocktailListRequest = (orderOption: 'randomList' | 'nameList' | 'popularList') => ({ type: COCKTAIL_LIST_REQUEST, orderOption });
export const cocktailListSuccess = (payload: { listName: string, listData: any }) => ({ type: COCKTAIL_LIST_SUCCESS, payload });
export const cocktailListFailure = (error: Error) => ({ type: COCKTAIL_LIST_FAILURE, error });

export interface ICocktailInfo {
  src: string;
  alt: string;
  href: string;
  name: string;
  tags?: {
    text: string;
    href: string;
    textColor?: string;
    backgroundColor?: string;
  };
  favorite?: string;
}

export type IAction =
  | ReturnType<typeof cocktailListRequest>
  | ReturnType<typeof cocktailListSuccess>
  | ReturnType<typeof cocktailListFailure>;

const initialState = {
  randomList: null,
  nameList: null,
  popularList: null,
  error: null
};

export interface IState {
  randomList: null | ICocktailInfo[];
  nameList: null | ICocktailInfo[];
  popularList: null | ICocktailInfo[];
  error: null | Error;
};

export default function reducer(state: IState = initialState, action: IAction): IState {
  switch (action.type) {
    case COCKTAIL_LIST_REQUEST: {
      return {
        ...state,
        error: null
      }
    }
    case COCKTAIL_LIST_SUCCESS: {
      return {
        ...state,
        [action.payload.listName]: action.payload.listData
      }
    }
    case COCKTAIL_LIST_FAILURE: {
      return {
        ...state,
        error: action.error
      }
    }
    default: return { ...state };
  }
}

