import { initStore } from "./initialStore";
import { Action } from "./types/actions-type";
import { ISetting, IStore, IUserInfo } from "./types/store-types";


export type AllActions =
  {
    type: typeof Action.UPDATE_USERINFO; payload: IUserInfo;
  } |
  {
    type: typeof Action.UPDATE_SETTINGS; payload: ISetting;
  }


export default function reducer(state: IStore = initStore, action: AllActions) {
  switch (action.type) {
    case Action.UPDATE_USERINFO:
      
      return {...state, user: { ...action.payload}}
  
    default:
      return state
  }
}