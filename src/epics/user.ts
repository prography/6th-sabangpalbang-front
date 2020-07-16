import { ActionsObservable, combineEpics, ofType } from 'redux-observable';
import { from, of, race } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';

import * as dummy from '../../config/dummy';
import { IAction, LOGIN_FAILURE, LOGIN_REQUEST, loginSuccess, CHECK_SESSION_REQUEST, checkSessionSuccess, checkSessionFailure } from '../reducers/user';
import { ajax } from 'rxjs/ajax';

const checkSessionEpic = (action$: ActionsObservable<IAction>) => 
  action$.pipe(
    ofType(CHECK_SESSION_REQUEST)
  )

// const checkSessionEpic = (action$: ActionsObservable<IAction>) => 
//   action$.pipe(
//     ofType(CHECK_SESSION_REQUEST),
//     mergeMap((action$: any) =>
//       race(ajax.getJSON('/cocktails')
//         .pipe(
//           map((data: any) => checkSessionSuccess(data)),
//           catchError(error => of(checkSessionFailure(error)))
//         )
//       )
//     )
//   );

const loginEpic = (action$: ActionsObservable<IAction>) => action$.pipe(
    ofType(LOGIN_REQUEST),
    map(action$ => loginSuccess(dummy.user))
);

// const loginEpic = (action$: ActionsObservable<IAction>) =>
//   action$.pipe(
//     ofType(LOGIN_REQUEST),
//     mergeMap((action$: any) =>
//       race(ajax.getJSON('/cocktails')
//         .pipe(
//           map((data: any) => loginSuccess(data)),
//           catchError(error => of({ type: LOGIN_FAILURE, error }))
//         )
//       )
//     )
//   );
  
  export default combineEpics(loginEpic, checkSessionEpic);