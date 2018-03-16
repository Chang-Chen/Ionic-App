import * as homeReducer from './home.reducer';
import {createFeatureSelector, createSelector} from "@ngrx/store";

export interface State {
  home: homeReducer.State
}

export const reducers = {
  home: homeReducer.reducer

};


export const getState = createFeatureSelector<State>('home');
export const getHomeState = createSelector(getState,(state:State) => state.home);
export const getHomeData = createSelector(getHomeState,homeReducer.getSelectorData);
export const getHomeErrMsg = createSelector(getHomeState,homeReducer.getSelectorErrMsg);
