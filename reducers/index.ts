import { combineReducers } from 'redux';

import cocktail from './cocktail';
import tag from './tag';

const rootReducer = combineReducers({
  cocktail,
  tag,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
