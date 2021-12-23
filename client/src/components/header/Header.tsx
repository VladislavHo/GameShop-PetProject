import React from "react";
import { NavLink } from "react-router-dom";
import './header.scss'

export default function Header() {
  return(
    <header>
      <div className="wrapper wrapper-header">
      <div className="logo"></div>
      <div className="search">
        <form>
          <input type="search" name="" id="" />
          <button className="btn btn-search">Search</button>
        </form>
      </div>
      <div className="nav-menu">
        <ul>
          <li><NavLink to="*">LINK</NavLink></li>
          <li><NavLink to="*">LINK</NavLink></li>
          <li><NavLink to="*">LINK</NavLink></li>
        </ul>
      </div>
      <div className="avatar"></div>
      </div>

    </header>
  )
}