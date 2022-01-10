import { ISetting, IStore, IUserInfo } from "./types/store-types"

export const user:IUserInfo = {
  userName: '',
  userPassword: ''
}

export const settings:ISetting = {
  gamesProfile: [],
  showModal: false,
  searchGames: [],
  gameID: null,
  aboutGame: {},
  searchAllGames: [],
  genresGame: [],
  genresAllGames: []
}

export const initStore:IStore = {
  user,
  settings
}

export const genresID = ['id = (5, 33, 10, 12, 13, 15)']

