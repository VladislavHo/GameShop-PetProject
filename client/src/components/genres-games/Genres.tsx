import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { genresOfGames } from "../../store/requests";
import { IStore } from "../../store/types/store-types";

export default function Genres() {
  const dispatch = useDispatch()
  const { genresGame } = useSelector((data: IStore) => data.settings);
  console.log(genresGame)
  return (
    <>
      {genresGame.map((el, i) => (
        <NavLink to={`/genres/${el.slug}`} key={el.name + i} onClick={() => dispatch(genresOfGames(el.id))}>
          <div className="categories">{el.name}</div>
        </NavLink>
      ))}
    </>
  );
}
