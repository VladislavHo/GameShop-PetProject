import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { AllActions } from "../../store/reducers";
import { aboutGame } from "../../store/requests";
import { ISetting } from "../../store/types/store-types";
import Pagination from '../pagination/Pagination'


export default function GameSearch() {
  const dispatch = useDispatch();
  const { searchGames } = useSelector((data: any) => data.settings);
  
  const [currentPage, setCurrentPage] = useState(1)
  const offset = 10

  const lastGamesIndex = currentPage * offset
  const firstGamesIndex = lastGamesIndex - offset
  const currentGames = searchGames.slice(firstGamesIndex, lastGamesIndex)

  const paginate  = (current) => setCurrentPage(current)

  const nextPage = () => setCurrentPage(next => next + 1)
  const prevPage = () => setCurrentPage(prev => prev - 1)

  return (
    <>
    <h3>Всего игр: {searchGames.length}</h3>
      {searchGames[0] && (
        <ul>
          {currentGames.map((el, i) => (
            <li
              key={el.name + el.id + i}
              onClick={() => dispatch(aboutGame(el.id))}
            >
              <NavLink to={`/games/${el.id}`}>{el.name}</NavLink>
            </li>
          ))}
        </ul>
      )}
      
      <Pagination 
        totalGames = {searchGames.length} 
        offset = {offset} paginate = {paginate}
        next = {nextPage}
        prev = {prevPage}/>
    </>
  );
}