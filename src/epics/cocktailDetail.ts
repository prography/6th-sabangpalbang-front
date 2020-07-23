import { ActionsObservable, combineEpics, ofType } from 'redux-observable';
import { of, race } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import * as ajax from '../lib/ajax';

import {
  COCKTAIL_DETAIL_REQUEST,
  COCKTAIL_DETAIL_FAILURE,
  cocktailDetailSuccess,
  IAction,
} from '../reducers/cocktailDetail';

const cocktailListEpic = (action$: ActionsObservable<IAction>) =>
  action$.pipe(
    ofType(COCKTAIL_DETAIL_REQUEST),
    mergeMap((action$: any) =>
      race(ajax.getJSON(`/cocktails/${action$.idx}`)
        .pipe(
          map((data: any) => cocktailDetailSuccess({
            cocktailDetail: data
          })),
          catchError(error => of({ type: COCKTAIL_DETAIL_FAILURE, error }))
        )
      )
    )
  );

export default combineEpics(cocktailListEpic);
