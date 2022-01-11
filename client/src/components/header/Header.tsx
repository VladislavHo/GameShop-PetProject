import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import axios from "../../../node_modules/axios/index";
import { getGameID, SearchGames, ShowModal } from "../../store/actions";
import {
  aboutGame,
  addUser,
  getSearchGames,
  getGames,
} from "../../store/requests";
import { IStore } from "../../store/types/store-types";
import SearchUserGames from '../search-user-games/SearchUserGames'
import "./header.scss";

export default function Header() {
  const dispatch = useDispatch();
  const { user, settings } = useSelector((data: IStore) => data);
  const [searchGames, setSearchGames] = React.useState({
    name: '',
    searchStatus: false
  });


  const openSearch = useCallback(()=>{
    setSearchGames({...searchGames, searchStatus: true})
  }, [])

  const closeSearch = useCallback(()=>{
    setSearchGames({...searchGames, searchStatus: false})
  }, [])

  function getNameGame(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    openSearch()
    dispatch(getSearchGames(searchGames.name))
    
  }

  useEffect(()=>{
    console.log(searchGames.name)
  }, [searchGames.name])
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
              name={searchGames.name}
              value={searchGames.name}
              onChange={(e) => {
                setSearchGames({...searchGames, name: e.target.value})
                
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
          {searchGames.searchStatus && (<SearchUserGames onClose = {closeSearch} nameSearchGame = {searchGames.name}/>)}
    </header>
  );
}
