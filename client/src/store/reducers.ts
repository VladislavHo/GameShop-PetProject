import { SearchGames } from "./actions";
import { initStore, settings } from "./initialStore";
import { Action } from "./types/actions-type";
import { IGameInfo, ISetting, IStore, IUserInfo } from "./types/store-types";


export type AllActions =
  {
    type: typeof Action.UPDATE_USERINFO; payload: IUserInfo;
  } |
  {
    type: typeof Action.UPDATE_SETTINGS; payload: ISetting;
  } |
  {
    type: typeof Action.SHOW_MODAL; payload: ISetting
  } |
  {
    type: typeof Action.SEARCH_GAMES; payload: any
  } |
  {
    type: typeof Action.GAME_ID; payload: any
  } |
  {
    type: typeof Action.ABOUT_GAME; payload: any
  } |
  {
    type: typeof Action.SEARCH_ALL_GAMES; payload: any
  } |
  {
    type: typeof Action.ADDED_GENRES_GAME; payload: any
  } |
  {
    type: typeof Action.ADD_ALL_GENRES_GAMES; payload: any
  }

export default function reducer(state: IStore = initStore, action: AllActions) {
  switch (action.type) {
    case Action.UPDATE_USERINFO:
      return { ...state, user: { ...action.payload } };
    case Action.SHOW_MODAL:
      return { ...state, settings: { ...settings, showModal: action.payload } }
    case Action.SEARCH_GAMES:
      return { ...state, settings: { ...settings, searchGames: action.payload } };
    case Action.SEARCH_ALL_GAMES:
      return { ...state, settings: { ...settings, searchGames: action.payload } };
    case Action.ABOUT_GAME:
      return { ...state, settings: { ...settings, aboutGame: { ...action.payload } } }
    case Action.ADDED_GENRES_GAME:
      return { ...state, settings: { ...settings, genresGame: action.payload  } }
      case Action.ADD_ALL_GENRES_GAMES:
        return { ...state, settings: { ...settings, genresGame: action.payload  } }
    default:
      return state
  }
}