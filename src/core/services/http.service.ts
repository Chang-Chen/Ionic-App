import {Injectable} from '@angular/core';
import {Jsonp} from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {utility} from '../common/utility';

@Injectable()
export class HttpService {

  constructor(private jsonp: Jsonp) {
  }

  private static fullUrl(url: string, param: object): string {
    return url + '?callback=JSONP_CALLBACK' + utility.setQueryParamByObj(param,true);
  }

  getByJsonp(url: string, param: any): Observable<any> {
    return this.jsonp.get(HttpService.fullUrl(url, param)).map((response) => {
      const res = response.json();
      if (res.status === '0') {
        console.log('错误');
      } else if (res.status === '-98') {
        alert('接口无权限');
      } else if (res.status === '-99') {
        console.log('未登录');
      }
      return res;
    });
  }
}
