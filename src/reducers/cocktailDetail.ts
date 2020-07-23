import { IAbvClassification } from "../interfaces/abvClassification";

export const COCKTAIL_DETAIL_REQUEST = 'cocktail/COCKTAIL_DETAIL_REQUEST' as const;
export const COCKTAIL_DETAIL_SUCCESS = 'cocktial/COCKTAIL_DETAIL_SUCCESS' as const;
export const COCKTAIL_DETAIL_FAILURE = 'cocktail/COCKTAIL_DETAIL_FAILURE' as const;

export const cocktailDetailRequest = (idx: number | string) => ({
  type: COCKTAIL_DETAIL_REQUEST,
  idx,
});
export const cocktailDetailSuccess = (payload: { cocktailDetail: any }) => ({
  type: COCKTAIL_DETAIL_SUCCESS,
  payload,
});
export const cocktailDetailFailure = (error: Error) => ({
  type: COCKTAIL_DETAIL_FAILURE,
  error,
});

export interface ITagInfo {
  name: string;
  idx: number;
  textColor: string;
}
export interface IReviewInfo {
  idx:number;
  comment:string;
  createdAt:string;
  updatedAt:string;
  user:any;
}

export interface IFlavorInfo {
  idx:number;
  name:string;
  description:string;
}

export interface IBaseInfo {
  idx:number;
  imgUrl:string;
  name:string;
  abv:number;
  description:string;
  textColor:string;
  backgroundColor:string;
}

export interface IState {  
  idx: null | number;
  name: null | string;
  imgUrl: null | string;
  backgroundImgUrl: null | string;
  abv: null | number;
  nonAbv: null | boolean;
  ingredients: null | string;
  description: null | string;
  tags: null | ITagInfo[];
  flavors: null | IFlavorInfo[];
  base: null | IBaseInfo;
  abvClassification:null| IAbvClassification;
  likes: null | any[];
  reviews: null | IReviewInfo[];
  loading: boolean;
  error: null | Error;
}

export type IAction =
  | ReturnType<typeof cocktailDetailRequest>
  | ReturnType<typeof cocktailDetailSuccess>
  | ReturnType<typeof cocktailDetailFailure>;

const initialState = {
  idx: null,
  name: null,
  imgUrl: null,
  backgroundImgUrl: null,
  abv: null,
  nonAbv: null ,
  ingredients: null ,
  description: null,
  tags: null,
  flavors: null ,
  base: null,
  abvClassification:null,
  likes: null ,
  reviews: null ,
  loading: false,
  error: null
};

export default function reducer(
  state: IState = initialState,
  action: IAction
): IState {
  switch (action.type) {
    case COCKTAIL_DETAIL_REQUEST: {
      return {
        ...state,
        loading: true,
        error: null,
      };
    }
    case COCKTAIL_DETAIL_SUCCESS: {
      return {
        ...state,
        ...action.payload.cocktailDetail,
        loading: false,
      };
    }
    case COCKTAIL_DETAIL_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    }
    default:
      return { ...state };
  }
}
