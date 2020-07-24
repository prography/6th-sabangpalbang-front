import { combineReducers } from 'redux';

import cocktail from './cocktail';
import tag from './tag';
import cocktailDetail from './cocktailDetail';
import user from './user';
import list from './list';

const rootReducer = combineReducers({
  cocktail,
  tag,
  cocktailDetail,
  user,
  list
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
