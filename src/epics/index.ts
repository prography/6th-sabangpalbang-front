import { ActionsObservable, combineEpics, Epic, StateObservable } from 'redux-observable';
import { catchError } from 'rxjs/operators';

import cocktail from './cocktail';
import cocktailDetail from './cocktailDetail';
import tag from './tag';
import user from './user';

const epics: Epic[] = [cocktail, tag, cocktailDetail, user];

const rootEpic = (
  action$: ActionsObservable<any>,
  store$: StateObservable<any>,
  dependencies: any
) =>
  combineEpics(...epics)(action$, store$, dependencies).pipe(
    catchError((error, source) => {
      console.error(error);
      return source;
    })
  );

export default rootEpic;
