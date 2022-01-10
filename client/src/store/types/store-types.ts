import {user, settings} from '../initialStore'

export interface IUserInfo {
  userName: string,
  userPassword: string,
}

export interface IGameInfo{
  id: number,
  name: string,
  screenshots?: Array<Object> 
}

export interface ISetting{
  gamesProfile: any[],
  showModal: boolean,
  searchGames: any[],
  searchAllGames: any[]
  gameID: null | number | string,
  aboutGame: Object,
  genresGame: any[],
  genresAllGames: any[]
}

export interface IStore{
  user: IUserInfo,
  settings: ISetting
}

