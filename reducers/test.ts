export const REQUEST = "test/REQUEST" as const;
export const SUCCESS = "test/SUCCESS" as const;
export const FAILURE = "test/FAILURE" as const;

export const request = () => ({ type: REQUEST });
export const success = () => ({ type: SUCCESS });
export const failure = (error: Error) => ({ type: FAILURE, error });

export interface IState {
  value: number;
  loading: boolean;
  error: null | Error;
}

export type IAction =
  | ReturnType<typeof request>
  | ReturnType<typeof success>
  | ReturnType<typeof failure>;

const initialState: IState = {
  value: 0,
  loading: false,
  error: null
};

export default (state: IState = initialState, action: IAction): IState => {
  switch (action.type) {
    case REQUEST: {
      return {
        ...state,
        loading: true,
        error: null
      }
    }
    case SUCCESS: {
      return {
        ...state,
        loading: false,
        value: state.value + 1
      }
    }
    case FAILURE: {
      return {
        ...state,
        error: action.error
      }
    }
    default:
      return { ...state }
  }
}