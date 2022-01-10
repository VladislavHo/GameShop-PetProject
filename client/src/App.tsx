import React from "react";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import GamePages from "./components/game-search/GamePages";
import AboutGameInfo from "./components/about-game-info/AboutGameInfo";
import Header from "./components/header/Header";
import GamesByGenres  from "./components/genres-games/GamesByGenres";
import "./style.scss";
import Genres from "./components/genres-games/Genres";

export default function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/games" element={<GamePages />} />
        <Route path="/games/:id" element={<AboutGameInfo />} />
        {/* <Route path="/games/" element={<AboutGameInfo />} /> */}
        <Route path="/genres/" element={<Genres />} />
        <Route path="/genres/:id" element={<GamesByGenres />} />
      </Routes>
    </HashRouter>
  );
}
