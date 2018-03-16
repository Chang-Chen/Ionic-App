import {Actions, LIST_FAILURE, LIST_START, LIST_SUCCESS} from "../actions/home.action";

export class State {
  data: any[];
  errMsg: string;
}

export const initialState: State = {
  data: null,
  errMsg: null
};

export const reducer = (state = initialState, action: Actions):State =>{
  switch (action.type){
    case LIST_START :
      return {...initialState};
    case LIST_SUCCESS:
      return {...state,data:action.data};
    case LIST_FAILURE:
      return {...state,errMsg:action.errMsg};
    default:
      return state;
  }
};

export const getSelectorData = (state:State) => state.data;
export const getSelectorErrMsg = (state:State) => state.errMsg;
