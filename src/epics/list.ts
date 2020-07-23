import { ActionsObservable, combineEpics, ofType } from 'redux-observable';
import { of, race } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import * as ajax from '../lib/ajax';
import { COCKTAIL_LIST_FAILURE, COCKTAIL_LIST_REQUEST, cocktailListSuccess, IAction } from '../reducers/list';
import { LIST_LIMIT, ALCOHOL_LIST, POPULAR_LIST } from '../../config/constants';

const nameQuery=(name?:string)=>name?`&name=${name}`:"";
const abvMinQuery=(abvMin?:string)=>abvMin?`&abvMin=${abvMin}`:"";
const abvMaxQuery=(abvMax?:string)=>abvMax?`&abvMax=${abvMax}`:"";

const cocktailListEpic = (action$: ActionsObservable<IAction>) => action$.pipe(
  ofType(COCKTAIL_LIST_REQUEST),
  mergeMap((action$: any) =>
    race(ajax.getJSON(`/cocktails?${nameQuery(action$.payload.name)}${abvMinQuery(action$.payload.abvMin)}${abvMaxQuery(action$.payload.abvMax)}`)
      .pipe(
        map((data: any) => cocktailListSuccess({
          listData: data.cocktails
        })),
        catchError(error => of({ type: COCKTAIL_LIST_FAILURE, error }))
      )
    )
  )
);

export default combineEpics(cocktailListEpic);