import React from "react";
import {Routes, Route, NavLink } from 'react-router-dom';
import HomePage from "./HomePage";
import TimeAttackPage from "./TimeAttackPage";
import ForzaPage from "./ForzaPage";
import DriftPage from "./DriftPage";

const Menu: React.FC = () => {
  return (
  <>
    <nav className="menu">
      <NavLink className="menu__item" to="/">Главная</NavLink>
      <NavLink className="menu__item" to="/drift">Дрифт-такси</NavLink>
      <NavLink className="menu__item" to="/timeattack">Time Attack</NavLink>
      <NavLink className="menu__item" to="/forza">Forza Karting</NavLink>
    </nav>
    <div className="page">
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/drift" Component={DriftPage} />
        <Route path="/timeattack" Component={TimeAttackPage} />
        <Route path="/forza" Component={ForzaPage} />
      </Routes>
    </div>
  </>)
}

export default Menu;
