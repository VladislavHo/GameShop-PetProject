import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { aboutGame, getGames, getSearchGames } from '../../store/requests'

import './search-user-games.scss'

interface ISearchUser{
  search: () => void

}


export default function SearchUserGames({onClose, nameSearchGame}) {
  const dispatch = useDispatch()
  const {settings} = useSelector((data:any) => data)



  return (

      <div className="search-games">
        <ul>
          {settings.searchGames.map((el, i) => (
            <li key={el.id + i} onClick={() => {
              dispatch(aboutGame(el.id))
              
            }}>
              <NavLink to={`/games/${el.id}`} onClick={()=> onClose()}>
                {el.name}
                {/* <img src={`${el.screenshots[0].url}`} alt={el.id} /> */}
               
              </NavLink>
            </li>
          ))}
          <NavLink
            to={"/games"}
            children={"More"}
            onClick={() => {
              dispatch(getGames(nameSearchGame))
              onClose()
            }}
          />
        </ul>
      </div>
  )
}