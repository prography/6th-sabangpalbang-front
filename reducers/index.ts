import { combineReducers } from 'redux';

import carousel from './carousel';

const rootReducer = combineReducers({
  carousel
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;