import { ActionsObservable, combineEpics, Epic, StateObservable } from 'redux-observable';
import { catchError } from 'rxjs/operators';

import carousel from './carousel';

const epics: Epic[] = [carousel];

const rootEpic = (action$: ActionsObservable<any>, store$: StateObservable<any>, dependencies: any) =>
  combineEpics(...epics)(action$, store$, dependencies).pipe(
    catchError((error, source) => {
      console.error(error);
      return source;
    })
  );

export default rootEpic;