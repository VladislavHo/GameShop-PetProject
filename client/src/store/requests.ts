import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import {IStore} from '../store/types/store-types'
import axios from 'axios';
import { UpdateUser } from './actions';
import { AllActions } from './reducers';

const URL = 'http://localhost:5000/api'
export function addUser(userInfo: AllActions) {
  return async (
    dispatch: ThunkDispatch<void, IStore, AnyAction>,
    getState: () => IStore
  ):Promise<void> =>{
    try {
      // const {user} = getState()
      await axios.post(`${URL}/added-user`, {
        user: userInfo
      }).then(user => dispatch(UpdateUser(user.data)))
      // dispatch(UpdateUser({userName: 'Vlad', userPassword: '123'}))
      // dispatch(userInfo)
      
    } catch (error) {
        console.log(error)
    }
  }
}