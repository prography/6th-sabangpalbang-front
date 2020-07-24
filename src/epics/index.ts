import { ActionsObservable, combineEpics, Epic, StateObservable } from 'redux-observable';
import { catchError } from 'rxjs/operators';

import cocktail from './cocktail';
import cocktailDetail from './cocktailDetail';
import tag from './tag';
import user from './user';
import list from './list';

const epics: Epic[] = [cocktail, tag, cocktailDetail, user, list];

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
