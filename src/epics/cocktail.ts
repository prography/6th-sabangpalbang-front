import { ActionsObservable, combineEpics, ofType } from 'redux-observable';
import { of, race } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import * as ajax from '../lib/ajax';
import { COCKTAIL_LIST_FAILURE, COCKTAIL_LIST_REQUEST, cocktailListSuccess, IAction, IOrderOption } from '../reducers/cocktail';
import { LIST_LIMIT, ALCOHOL_LIST, POPULAR_LIST } from '../../config/constants';

const orderQuery = (orderOption: IOrderOption) => {
  if (orderOption === ALCOHOL_LIST) return "&abvSort=ASC";
  if (orderOption === POPULAR_LIST) return "";
  return "";
}

const cocktailListEpic = (action$: ActionsObservable<IAction>) => action$.pipe(
  ofType(COCKTAIL_LIST_REQUEST),
  mergeMap((action$: any) =>
    race(ajax.getJSON(`/cocktails?offset=${action$.payload.offset}&limit=${LIST_LIMIT}${orderQuery(action$.payload.orderOption)}`)
      .pipe(
        map((data: any) => cocktailListSuccess({
          listName: action$.payload.orderOption,
          listData: data.cocktails
        })),
        catchError(error => of({ type: COCKTAIL_LIST_FAILURE, error }))
      )
    )
  )
);

export default combineEpics(cocktailListEpic);