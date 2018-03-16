import {Actions, Effect} from "@ngrx/effects";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

import * as homeAction from '../actions/home.action';
import {HomeService} from "../services/home.service";

@Injectable()
export class HomeEffect {
  @Effect()
  listStart$: Observable<homeAction.Actions> = this.actions$
    .ofType<homeAction.ListStart>(homeAction.LIST_START)
    .map(action => action.param)
    .switchMap(param =>
      this.homeService.getHomeList(param).map(data => {
        if (data.status === "1") {
          return new homeAction.ListSuccess(data.data.data)
        } else {
          return new homeAction.ListFailure(data.detail);
        }
      })
    );


  constructor(private actions$: Actions, private homeService: HomeService) {

  }
}
