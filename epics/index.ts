import {
  ActionsObservable,
  combineEpics,
  Epic,
  StateObservable,
} from 'redux-observable';
import { catchError } from 'rxjs/operators';

import cocktail from './cocktail';
import tag from './tag';
import cocktailDetail from './cocktailDetail';

const epics: Epic[] = [cocktail, tag, cocktailDetail];

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
