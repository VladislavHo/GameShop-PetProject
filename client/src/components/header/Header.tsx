import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import axios from "../../../node_modules/axios/index";
import { getGameID, SearchGames, ShowModal } from "../../store/actions";
import {
  aboutGame,
  addUser,
  getAllGamesReq,
  getGames,
} from "../../store/requests";
import { IStore } from "../../store/types/store-types";
import "./header.scss";

export default function Header() {
  const dispatch = useDispatch();
  const { user, settings } = useSelector((data: IStore) => data);
  const [searchGames, setSearchGames] = React.useState({
    name: '',
    searchStatus: false
  });

  function getNameGame(e: React.FormEvent<HTMLFormElement>) {
    setSearchGames({...searchGames, searchStatus: true})
    e.preventDefault();
    dispatch(getGames(searchGames.name));
  }

  useEffect(()=>{
    console.log(settings);
    
  })

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
              id=""
              onChange={(e) => setSearchGames({...searchGames, name: e.target.value})}
            />
            <button className="btn btn-search">Search</button>
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
      {searchGames.searchStatus && (
        <div className="search-games">
          <ul>
            {settings.searchGames.map((el, i) => (
              <li key={el.id + i} onClick={() => {
                dispatch(aboutGame(el.id))
                setSearchGames({...searchGames, searchStatus: false})
              }}>
                <NavLink to={`/games/${el.id}`}>
                  {el.name}
                  {/* <img src={`${el.screenshots[0].url}`} alt={el.id} /> */}
                </NavLink>
              </li>
            ))}
            <NavLink
              to={"/games"}
              children={"More"}
              onClick={() => {
                setSearchGames({...searchGames, searchStatus: false})
                dispatch(getAllGamesReq(searchGames.name))
              }}
            />
          </ul>
        </div>
      )}
    </header>
  );
}
