import React from "react";
import { NavLink } from "react-router-dom";
import axios from "../../../node_modules/axios/index";
import './header.scss'

export default function Header() {
  const [name, setName] = React.useState('')

  function getGame(e:React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault()
   const res = axios.post(`http://localhost:5000/api/game`,{
     name
   })
  .then(data => console.log(data))
  .catch(e => console.log(e))

  }

  return(
    <header>
      <div className="wrapper wrapper-header">
      <div className="logo"></div>
      <div className="search">
        <form>
          <input type="search" name="" id="" onChange={(e) => setName(e.target.value)}/>
          <button className="btn btn-search" onClick={(e) => getGame(e)}>Search</button>
        </form>
      </div>
      <div className="nav-menu">
        <ul>
          <li><NavLink to="*">LINK</NavLink></li>
          <li><NavLink to="*">LINK</NavLink></li>
          <li><NavLink to="*">LINK</NavLink></li>
        </ul>
      </div>
      <button>вход</button>
      {/* <div className="avatar"></div> */}
      </div>

    </header>
  )
}