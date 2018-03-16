import {Inject, Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import * as url from '../../../core/constant/url'

@Injectable()
export class HomeService {
  constructor(@Inject('httpService') private httpService) {
  }

  getHomeList(param):Observable<any> {
    return this.httpService.getByJsonp(url.HOUSE_LIST,param)
  }

}
