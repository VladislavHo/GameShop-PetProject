import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { IStore, IUserInfo } from '../store/types/store-types'
import axios from 'axios';
import { AboutGame, GenresAllGamesActions, GenresGameActions, SearchAllGames, SearchGames, UpdateUser } from './actions';
import { AllActions } from './reducers';
import { settings } from './initialStore';

const URL = 'http://localhost:5000/api'

export function addUser(userInfo: IUserInfo) {
  return async (
    dispatch: ThunkDispatch<void, IStore, AnyAction>,
    getState: () => IStore
  ): Promise<void> => {
    try {
      await axios.post(`${URL}/added-user`, {
        user: userInfo
      }).then(user => dispatch(UpdateUser(user.data)))
    } catch (e) {
      console.log(e.message)
    }
  }
}

export function getGames(games: string) {
  return async (
    dispatch: ThunkDispatch<void, IStore, AnyAction>,
    getState: () => IStore
  ): Promise<void> => {
    try {
      await axios.post(`${URL}/games`, {
        games : {games, limit: null}
      })
        .then(games => dispatch(SearchGames(games.data)))
    } catch (e) {
      console.log(e.message)
    }
  }
}

export function aboutGame(id: number) {
  return async(
    dispatch: ThunkDispatch<void, IStore, AnyAction>,
  ) => {
    try {
      await axios.post(`${URL}/about-data-game`,{
        id
      })
        .then(games => dispatch(AboutGame(games.data)))
    } catch (e) {
      console.log(e.message)
    }
  }

}

export function getAllGamesReq(games:string) {
  return async(
    dispatch: ThunkDispatch<void, IStore, AnyAction>,
  ) =>{
    try {
      await axios.post(`${URL}/games`,{
        games: {games, limit: 100}
      })
        .then(games => dispatch(SearchAllGames(games.data)))
    } catch (e) {
      console.log(e.message)
    }
  }
}

export function gamesOnGenres(id) {
  return async(
    dispatch: ThunkDispatch<void, IStore, AnyAction>,
  ) =>{
    try {
      await axios.post(`${URL}/genres-game`, {
        idList: id
      })
        .then(games => dispatch(GenresGameActions(games.data)))
    } catch (e) {
      console.log(e.message)
    }
  }
}

// genres-all-game
export function genresOfGames(id) {
  return async(
    dispatch: ThunkDispatch<void, IStore, AnyAction>,
  ) =>{
    try {
      await axios.post(`${URL}/genres-all-game`, {
        id
      })
        .then(games => dispatch(GenresAllGamesActions(games.data)))
    } catch (e) {
      console.log(e.message)
    }
  }
}
