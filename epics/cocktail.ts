import { ActionsObservable, combineEpics, ofType } from 'redux-observable';
import { of } from 'rxjs';
import { delay, map, mergeMap } from 'rxjs/operators';

import * as dummy from '../config/dummy';
import { COCKTAIL_LIST_REQUEST, cocktailListSuccess, IAction } from '../reducers/cocktail';

const cocktailListEpic = (action$: ActionsObservable<IAction>) => action$.pipe(
  ofType(COCKTAIL_LIST_REQUEST),
  mergeMap(action$ => of(action$).pipe(delay(1000), map((action$: any) => cocktailListSuccess({
    listName: action$.orderOption,
    listData: dummy.mainCocktailListInfo
  })))
  ));

export default combineEpics(cocktailListEpic);