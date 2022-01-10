import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { AllActions } from "../../store/reducers";
import { aboutGame } from "../../store/requests";
import { ISetting } from "../../store/types/store-types";

export default function GameSearch() {
  const dispatch = useDispatch();
  const { searchGames } = useSelector((data: any) => data.settings);

  return (
    <>
      {searchGames[0] && (
        <ul>
          {searchGames.map((el, i) => (
            <li
              key={el.name + el.id + i}
              onClick={() => dispatch(aboutGame(el.id))}
            >
              <NavLink to={`/games/${el.id}`}>{el.name}</NavLink>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
