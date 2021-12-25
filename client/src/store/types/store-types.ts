import {user, settings} from '../initialStore'

export interface IUserInfo {
  userName: string,
  userPassword: string,
}

export interface ISetting{
  basket: []
}

export interface IStore{
  user: IUserInfo,
  settings: ISetting
}