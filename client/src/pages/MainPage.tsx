import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/header/Header";
import PopapUser from "../components/main-page/popap-user/PopapUser";
import { IStore } from "../store/types/store-types";
import './main.scss'
import { NavLink } from "react-router-dom";
import { genresOfGames, gamesOnGenres } from "../store/requests";
import { genresID } from "../store/initialStore";

export default function MainPage() {
  const dispatch = useDispatch()
  const {settings} = useSelector((data:IStore) => data)

  useEffect(()=>{
    dispatch(gamesOnGenres(genresID))
  },[])


  return(
    <main>
      <div className="wrapper wrapper-main">
      {settings.showModal && (<PopapUser/>)}
        <section className="sale"> 
          {/* <div className="sale-container"> */}
            <div className="sale-wrapper">
              <img src="https://cdn.igromania.ru/mnt/news/d/8/8/a/1/f/110734/564178414442a1eb_1920xH.jpg" style={{
                width: '900px',
                height: '455px'
              }}  alt="" />
              <div className="nav-screan">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>

              
            </div>
            <div className="screenshot">
                <div className="screen"></div>
                <div className="screen"></div>
                <div className="screen"></div>
                <button>Like</button>
              </div>
          {/* </div> */}
        </section>

        <section className="categories-best-game">
          <div className="best-game">Title</div>
          <div className="best-game">Title</div>
          <div className="best-game">Title</div>
          <div className="best-game">Title</div>
        </section>

        <section className="categories-game">
          {settings.genresGame.map((el, i) => (
            <NavLink to ={`/genres/${el.slug}`} key={el.name + i} onClick={()=> dispatch(genresOfGames(el.id))}>
              <div className="categories">{el.name}</div>
            </NavLink>
          ))}
          <NavLink to={'/genres'} children={"More"} onClick={()=> dispatch(gamesOnGenres(null))}></NavLink>
        </section>
      </div>
    </main>
  )
}

//  onClick={()=> dispatch(genresGames([`id = (${el.id})`]))}