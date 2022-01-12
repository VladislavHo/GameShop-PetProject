import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import axios from "../../../node_modules/axios/index";
import { getGameID, SearchGames, ShowModal } from "../../store/actions";
import { NUMBER_SEARCH_GAMES } from "../../store/initialStore";
import {
  aboutGame,
  addUser,
  getGames,
} from "../../store/requests";
import { IStore } from "../../store/types/store-types";
import SearchUserGames from '../search-user-games/SearchUserGames'
import "./header.scss";

export default function Header() {
  const dispatch = useDispatch();
  const { user, settings } = useSelector((data: IStore) => data);
  const [nameSearch, setNameSearch] = useState('')
  const [searchStatus, setSearchStatus] = useState(false)


  const openSearch = useCallback(()=>{
    setSearchStatus(true)
  }, [])

  const closeSearch = useCallback(()=>{
    setSearchStatus(false)
  }, [])

  function getNameGame(e: React.FormEvent<HTMLFormElement>) {
    openSearch()
    e.preventDefault();
    dispatch(getGames(nameSearch, NUMBER_SEARCH_GAMES))
  }



  return (
    <header>
      <div className="wrapper wrapper-header">
        <NavLink to={"/"}>

        <div className="logo"></div>
        </NavLink>
        <div className="search">
          <form onSubmit={(e) => getNameGame(e)}>
            <input
              type="search"
              // value={searchGames.name}
              onChange={(e) => {
                // setSearchGames({...searchGames, name: e.target.value})
                setNameSearch(e.target.value)
                
              }}
            />
            <button type="submit" className="btn btn-search">Search</button>
          </form>
        </div>
        <div className="nav-menu">
          <ul>
            <li>
              <NavLink to="*">LINK</NavLink>
            </li>
            <li>
              <NavLink to="*">LINK</NavLink>
            </li>
            <li>
              <NavLink to="*">LINK</NavLink>
            </li>
          </ul>
        </div>

        <p>{user.userName}</p>

        {!user.userName && (
          <button onClick={() => dispatch(ShowModal(true))}>вход</button>
        )}
      </div>
          {searchStatus && (<SearchUserGames onClose = {closeSearch} nameSearchGame = {nameSearch}/>)}
    </header>
  );
}
