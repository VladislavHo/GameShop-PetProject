import React from "react";
import { BrowserRouter } from "react-router-dom";
import MainPage from '../pages/MainPage'
import '../style.scss'


export default function App() {
  return (
    <BrowserRouter>
      <MainPage/>
    </BrowserRouter>
  )
}