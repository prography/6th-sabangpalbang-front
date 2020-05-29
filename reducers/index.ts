import { combineReducers } from 'redux';

import carousel from './carousel';
import cocktail from './cocktail';

const rootReducer = combineReducers({
  carousel, cocktail
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;