import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { aboutGame, gamesOnGenres } from '../../store/requests';
import { IStore } from '../../store/types/store-types'

export default function GamesByGenres() {
  const dispatch = useDispatch()
  const { genresGame } = useSelector((data: IStore) => data.settings);
  return (
    <div>
      <ul>
        {genresGame.map((el, i) =>(
            <li
            key={el.name + el.id + i}
            onClick={() => dispatch(aboutGame(el.id))}
          >
            <NavLink to={`/games/${el.id}`}>{el.name}</NavLink>
          </li>
        ))}
      </ul>

    </div>
  )
}


