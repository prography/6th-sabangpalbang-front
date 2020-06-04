import { combineReducers } from 'redux';

import cocktail from './cocktail';
import tag from './tag';
import cocktailDetail from './cocktailDetail';

const rootReducer = combineReducers({
  cocktail,
  tag,
  cocktailDetail,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
