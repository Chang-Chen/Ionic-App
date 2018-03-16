import {Action} from "@ngrx/store";

export interface BaseAction extends Action {
  type: string;
  payload?: object | string;
}

export interface BaseState {
  payload?: object | string;
  showLoading: boolean;
  showToast: boolean;
  errorMsg: string | null;
}
