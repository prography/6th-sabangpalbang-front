export const BANNER_REQUEST = 'carousel/BANNER_REQUEST' as const;
export const BANNER_SUCCESS = 'carousel/BANNER_SUCCESS' as const;
export const BANNER_FAILURE = 'carousel/BANNER_FAILURE' as const;

export const bannerRequest = () => ({ type: BANNER_REQUEST });
export const bannerSuccess = (payload: any) => ({ type: BANNER_SUCCESS, payload });
export const bannerFailure = (error: Error) => ({ type: BANNER_FAILURE, error });

export type IAction =
  | ReturnType<typeof bannerRequest>
  | ReturnType<typeof bannerSuccess>
  | ReturnType<typeof bannerFailure>;

const initialState = {
  banner: null,
  error: null
};
export interface IState {
  banner: null | any;
  error: null | Error;
};

export default function reducer(state: IState = initialState, action: IAction): IState {
  switch (action.type) {
    case BANNER_REQUEST: {
      return {
        ...state,
        banner: null
      };
    }
    case BANNER_SUCCESS: {
      return {
        ...state,
        banner: action.payload
      }
    }
    case BANNER_FAILURE: {
      return {
        ...state,
        error: action.error
      }
    }
    default:
      return { ...state };
  }
}