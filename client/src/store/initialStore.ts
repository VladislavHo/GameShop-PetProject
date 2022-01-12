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
export const NUMBER_SEARCH_GAMES = 3
export const SHOW_GAMES_PAGE = 10
export const MAX_LIMIT_SEARCH_GAMES = 500

