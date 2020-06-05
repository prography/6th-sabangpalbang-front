import { ActionsObservable, combineEpics, ofType } from 'redux-observable';
import { of } from 'rxjs';
import { delay, map, mergeMap } from 'rxjs/operators';

import * as dummy from '../../config/dummy';
import { TAG_LIST_REQUEST, tagListSuccess, IAction } from '../reducers/tag';

const cocktailListEpic = (action$: ActionsObservable<IAction>) =>
  action$.pipe(
    ofType(TAG_LIST_REQUEST),
    mergeMap((action$) =>
      of(action$).pipe(
        delay(1000),
        map((action$: any) =>
          tagListSuccess({
            tagList: dummy.tagList,
          })
        )
      )
    )
  );

export default combineEpics(cocktailListEpic);
