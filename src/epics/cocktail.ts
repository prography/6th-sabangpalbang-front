import { ActionsObservable, combineEpics, ofType } from 'redux-observable';
import { of, race } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import * as ajax from '../lib/ajax';
import { COCKTAIL_LIST_FAILURE, COCKTAIL_LIST_REQUEST, cocktailListSuccess, IAction } from '../reducers/cocktail';

const cocktailListEpic = (action$: ActionsObservable<IAction>) => action$.pipe(
  ofType(COCKTAIL_LIST_REQUEST),
  mergeMap((action$: any) => race(ajax.getJSON('/cocktails').pipe(
    map((data: any) => cocktailListSuccess({
      listName: action$.orderOption,
      listData: data.cocktails
    })),
    catchError(error => of({ type: COCKTAIL_LIST_FAILURE, error }))
  )
  )
  ));

export default combineEpics(cocktailListEpic);