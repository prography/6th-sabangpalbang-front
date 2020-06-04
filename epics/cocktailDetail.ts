import { ActionsObservable, combineEpics, ofType } from 'redux-observable';
import { of } from 'rxjs';
import { delay, map, mergeMap } from 'rxjs/operators';

import * as dummy from '../config/dummy';
import {
  COCKTAIL_DETAIL_REQUEST,
  cocktailDetailSuccess,
  IAction,
} from '../reducers/cocktailDetail';

const cocktailListEpic = (action$: ActionsObservable<IAction>) =>
  action$.pipe(
    ofType(COCKTAIL_DETAIL_REQUEST),
    mergeMap((action$) =>
      of(action$).pipe(
        delay(1000),
        map((action$: any) =>
          cocktailDetailSuccess({
            cocktailDetail: dummy.cocktailDetailData,
          })
        )
      )
    )
  );

export default combineEpics(cocktailListEpic);
