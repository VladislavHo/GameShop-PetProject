import { ISetting, IStore, IUserInfo } from "./types/store-types"

export const user:IUserInfo = {
  userName: '',
  userPassword: ''
}

export const settings:ISetting = {
  basket: []
}

export const initStore:IStore = {
  user,
  settings
}