import { AllActions } from "./reducers";
import { Action } from "./types/actions-type";
import { IUserInfo } from "./types/store-types";

export function UpdateUser(payload: IUserInfo):AllActions {
  return {
    type: Action.UPDATE_USERINFO,
    payload
  }
}