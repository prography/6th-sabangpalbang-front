import { ActionsObservable, combineEpics, ofType } from 'redux-observable';
import { from, of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';

import * as dummy from '../../config/dummy';
import { IAction, LOGIN_FAILURE, LOGIN_REQUEST, loginSuccess } from '../reducers/user';

const loginEpic = (action$: ActionsObservable<IAction>) => action$.pipe(
    ofType(LOGIN_REQUEST),
    mergeMap((action$: any) => from([1]).pipe( /*race(ajax.getJSON('/cocktails').pipe(*/
        tap(()=>console.log(action$)),
        map((data: any) => loginSuccess(dummy.user)),
      catchError(error => of({ type: LOGIN_FAILURE, error }))
    ))
/*)*/
);
  
  export default combineEpics(loginEpic);