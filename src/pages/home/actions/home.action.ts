import {Action} from "@ngrx/store";


export const LIST_START = '[HOME] LIST_START';
export const LIST_SUCCESS = '[HOME] LIST_SUCCESS';
export const LIST_FAILURE = '[HOME] LIST_FAILURE';


export class ListStart implements Action {
  readonly type = LIST_START;
  constructor(public param: Object | null) {

  }
}

export class ListSuccess implements Action {
  readonly type = LIST_SUCCESS;
  constructor(public data:any[] | null) {

  }
}

export class ListFailure implements Action {
  readonly type = LIST_FAILURE;
  constructor(public errMsg: string | null) {

  }
}

export type Actions =  ListStart|ListSuccess|ListFailure;

