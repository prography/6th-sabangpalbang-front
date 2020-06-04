export const COCKTAIL_DETAIL_REQUEST = 'cocktail/COCKTAIL_DETAIL_REQUEST' as const;
export const COCKTAIL_DETAIL_SUCCESS = 'cocktial/COCKTAIL_DETAIL_SUCCESS' as const;
export const COCKTAIL_DETAIL_FAILURE = 'cocktail/COCKTAIL_DETAIL_FAILURE' as const;

export const cocktailDetailRequest = (cocktailIdx: number | string) => ({
  type: COCKTAIL_DETAIL_REQUEST,
  cocktailIdx,
});
export const cocktailDetailSuccess = (payload: { cocktailDetail: any }) => ({
  type: COCKTAIL_DETAIL_SUCCESS,
  payload,
});
export const cocktailDetailFailure = (error: Error) => ({
  type: COCKTAIL_DETAIL_FAILURE,
  error,
});

export interface IImgInfo {
  src: string;
  alt: string;
}
export interface ITagInfo {
  text: string;
  idx: number;
}
export interface IReviewInfo {
  profile: IImgInfo;
  name: string;
  isFavorite: boolean;
  text: string;
  day: string;
}

export interface IState {
  cocktailName: null | string;
  cocktailIdx: null | number;
  backgroundImg: null | IImgInfo;
  cocktailImg: null | IImgInfo;
  favoriteCount: null | number;
  description: null | string;
  tags: null | ITagInfo[];
  abv: null | number;
  abvMin: null | number;
  abvMax: null | number;
  base: null | number;
  ingredients: null | string[];
  flavor: null | string;
  reviews: null | IReviewInfo[];
  loading: boolean;
  error: null | Error;
}

export type IAction =
  | ReturnType<typeof cocktailDetailRequest>
  | ReturnType<typeof cocktailDetailSuccess>
  | ReturnType<typeof cocktailDetailFailure>;

const initialState = {
  cocktailName: null,
  cocktailIdx: null,
  backgroundImg: null,
  cocktailImg: null,
  favoriteCount: null,
  description: null,
  tags: null,
  abv: null,
  abvMin: null,
  abvMax: null,
  base: null,
  ingredients: null,
  flavor: null,
  reviews: null,
  loading: false,
  error: null,
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
