import { combineReducers } from 'redux';

import test from './test';

const rootReducer = combineReducers({ test });

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;