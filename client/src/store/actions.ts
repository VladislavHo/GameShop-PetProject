import { AllActions } from "./reducers";
import { Action } from "./types/actions-type";
import { ISetting, IStore, IUserInfo } from "./types/store-types";

export function UpdateUser(payload: IUserInfo):AllActions {
  return {
    type: Action.UPDATE_USERINFO,
    payload
  }
}

export function ShowModal(payload: any):AllActions {
  return{
    type: Action.SHOW_MODAL,
    payload
  }
}

export function SearchGames(payload: ISetting):AllActions {
  return {
    type: Action.SEARCH_GAMES,
    payload
  }
}
export function SearchAllGames(payload: ISetting):AllActions {
  return {
    type: Action.SEARCH_ALL_GAMES,
    payload
  }
}

export function getGameID(payload: ISetting):AllActions {
  return {
    type: Action.GAME_ID,
    payload
  }
}

export function AboutGame(payload: ISetting): AllActions {
  return {
    type: Action.ABOUT_GAME,
    payload
  }
}
export function GenresGameActions(payload: ISetting): AllActions {
  return {
    type: Action.ADDED_GENRES_GAME,
    payload
  }
}
export function GenresAllGamesActions(payload: ISetting): AllActions {
  return {
    type: Action.ADD_ALL_GENRES_GAMES,
    payload
  }
}