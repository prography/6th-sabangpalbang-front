import { ActionsObservable, combineEpics, ofType } from 'redux-observable';
import { of } from 'rxjs';
import { delay, map, mergeMap } from 'rxjs/operators';

import * as dummy from '../config/dummy';
import { BANNER_REQUEST, bannerSuccess, IAction } from '../reducers/carousel';


const bannerEpic = (action$: ActionsObservable<IAction>) => action$.pipe(
  ofType(BANNER_REQUEST),
  mergeMap(action$ => of(action$).pipe(delay(1000), map(action$ => bannerSuccess(dummy.banner)))
  ));

export default combineEpics(bannerEpic);