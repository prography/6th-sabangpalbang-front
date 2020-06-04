export const TAG_LIST_REQUEST = 'tag/TAG_LIST_REQUEST' as const;
export const TAG_LIST_SUCCESS = 'tag/TAG_LIST_SUCCESS' as const;
export const TAG_LIST_FAILURE = 'tag/TAG_LIST_FAILURE' as const;

export const tagListRequest = () => ({
  type: TAG_LIST_REQUEST,
});
export const tagListSuccess = (payload: { tagList: any }) => ({
  type: TAG_LIST_SUCCESS,
  payload,
});
export const tagListFailure = (error: Error) => ({
  type: TAG_LIST_FAILURE,
  error,
});

export interface ITagInfo {
  text: string;
  idx: number;
}

export type IAction =
  | ReturnType<typeof tagListRequest>
  | ReturnType<typeof tagListSuccess>
  | ReturnType<typeof tagListFailure>;

const initialState = {
  tagList: null,
  error: null,
};

export interface IState {
  tagList: null | ITagInfo[];
  error: null | Error;
}

export default function reducer(
  state: IState = initialState,
  action: IAction
): IState {
  switch (action.type) {
    case TAG_LIST_REQUEST: {
      return {
        ...state,
        error: null,
      };
    }
    case TAG_LIST_SUCCESS: {
      return {
        ...state,
        tagList: action.payload.tagList,
      };
    }
    case TAG_LIST_FAILURE: {
      return {
        ...state,
        error: action.error,
      };
    }
    default:
      return { ...state };
  }
}
