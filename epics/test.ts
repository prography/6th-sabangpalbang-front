import { ActionsObservable, combineEpics, ofType } from 'redux-observable';
import { of } from 'rxjs';
import { delay, map, mergeMap } from 'rxjs/operators';

import { IAction, REQUEST, success } from '../reducers/test';

/*
request action 후에 1초 뒤에 success action을 취하는 epic
*/
const epic = (action$: ActionsObservable<IAction>) => action$.pipe(
  ofType(REQUEST),
  mergeMap(action$ => of(action$).pipe(delay(1000), map(action$ => success())),
  )
);

/**
 * epic 여러개를 정의하고 combineEpics에 인자로 추가하면 됨
 */
export default combineEpics(epic);