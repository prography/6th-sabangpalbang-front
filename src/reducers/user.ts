import { ILikeCard } from '../interfaces/likeCard';
import { IUser } from "../interfaces/user";

export const CHECK_SESSION_REQUEST = 'user/CHECK_SESSION_REQUEST' as const;
export const CHECK_SESSION_SUCCESS = 'user/CHECK_SESSION_SUCCESS' as const;
export const CHECK_SESSION_FAILURE = 'user/CHECK_SESSION_FAILURE' as const;

export const LOGIN_REQUEST = 'user/LOGIN_REQUEST' as const;
export const LOGIN_SUCCESS = 'user/LOGIN_SUCCESS' as const;
export const LOGIN_FAILURE = 'user/LOGIN_FAILURE' as const;

export const GET_LIKES_REQUEST = 'user/GET_LIKES_REQUEST' as const;
export const GET_LIKES_SUCCESS = 'user/GET_LIKES_SUCCESS' as const;
export const GET_LIKES_FAILURE = 'user/GET_LIKES_FAILURE' as const;

export const DELETE_LIKE_REQUEST = 'user/DELETE_LIKE_REQUEST' as const;
export const DELETE_LIKE_SUCCESS = 'user/DELETE_LIKE_SUCCESS' as const;
export const DELETE_LIKE_FAILURE = 'user/DELETE_LIKE_FAILURE' as const;

export const UPDATE_LIKE_ORDER_REQUEST = 'user/DELETE_LIKE_ORDER_REQUEST' as const;
export const UPDATE_LIKE_ORDER_SUCCESS = 'user/DELETE_LIKE_ORDER_SUCCESS' as const;
export const UPDATE_LIKE_ORDER_FAILURE = 'user/DELETE_LIKE_ORDER_FAILURE' as const;

export const checkSessionRequest = () => ({type: CHECK_SESSION_REQUEST});
export const checkSessionSuccess = (payload: IUser) => ({type: CHECK_SESSION_SUCCESS, payload});
export const checkSessionFailure = (error: Error) => ({type: CHECK_SESSION_FAILURE, error});

export const loginRequest = () => ({type: LOGIN_REQUEST});
export const loginSuccess = (payload: IState['userInfo']) => ({type: LOGIN_SUCCESS, payload});
export const loginFailure = (error: Error) => ({type: LOGIN_FAILURE, error});

export const getLikesRequest = (userId) => ({type: GET_LIKES_REQUEST, payload: { userId }});
export const getLikesSuccess = (payload: ILikeCard[]) => ({type: GET_LIKES_SUCCESS, payload});
export const getLikesFailure = (error: Error) => ({type: GET_LIKES_FAILURE, error});

export const deleteLikeRequest = (payload: { userId: string, cocktailId: number}) => ({type: DELETE_LIKE_REQUEST, payload});
export const deleteLikeSuccess = () => ({type: DELETE_LIKE_SUCCESS});
export const deleteLikeFailure = (error: Error) => ({type: DELETE_LIKE_FAILURE, error});

export const updateLikeOrderRequest = () => ({type: UPDATE_LIKE_ORDER_REQUEST});
export const updateLikeOrderSuccess = () => ({type: UPDATE_LIKE_ORDER_SUCCESS});
export const updateLikeOrderFailure = (error: Error) => ({type: UPDATE_LIKE_ORDER_FAILURE, error});

export type IAction =
  | ReturnType<typeof checkSessionRequest>
  | ReturnType<typeof checkSessionSuccess>
  | ReturnType<typeof checkSessionFailure>
  | ReturnType<typeof loginRequest>
  | ReturnType<typeof loginSuccess>
  | ReturnType<typeof loginFailure>
  | ReturnType<typeof getLikesRequest>
  | ReturnType<typeof getLikesSuccess>
  | ReturnType<typeof getLikesFailure>
  | ReturnType<typeof deleteLikeRequest>
  | ReturnType<typeof deleteLikeSuccess>
  | ReturnType<typeof deleteLikeFailure>
  | ReturnType<typeof updateLikeOrderRequest>
  | ReturnType<typeof updateLikeOrderSuccess>
  | ReturnType<typeof updateLikeOrderFailure>;

const initialState: IState = {
    userInfo: {
        email: null,
        username: null,
        profileImage: null
    },
    reviewCnt: null,
    likeList: null,
    error: null
};

export interface IState {
    userInfo: {
        email: string | null;
        username: string | null;
        profileImage: string | null;
    };
    reviewCnt: number | null,
    likeList: ILikeCard[] | null;
    error: null | Error;
};

export default function reducer(state: IState = initialState, action: IAction): IState {
    switch (action.type) {
        case CHECK_SESSION_SUCCESS: {
          return {
            ...state,
            userInfo: action.payload
          }
        }
        case CHECK_SESSION_FAILURE: {
          return {
            ...state,
            error: action.error
          }
        }
        case LOGIN_SUCCESS: {
            return {
                ...state,
                userInfo: action.payload
            }
        };
        case LOGIN_FAILURE: {
            return {
                ...state,
                error: action.error
            }
        }
        default: return { ...state };
    }
}

