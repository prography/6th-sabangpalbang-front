import { combineReducers } from 'redux';

import cocktail from './cocktail';

const rootReducer = combineReducers({
  cocktail
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;