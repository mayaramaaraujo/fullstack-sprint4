import React from 'react';
import MenuImg from "../../assets/menu.svg";
import Close from "../../assets/close.svg";
import LogoMobile from "../../assets/rchlo.svg";
import LogoDesktop from "../../assets/riachuelo.svg";
import SearchIcon from "../../assets/search.svg";

import Menu from '../Menu/Menu'

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__mobile">
          <div className="header__drawer menu header__drawer--active">
            <img className="menu__img" src={MenuImg} alt="" />
            <p className="menu__title">menu</p>
          </div>
          <div className="header__drawer close">
            <img src={Close} alt="" />
            <p className="close__title">fechar</p>
          </div>
          <h1 className="header__logo">
            <img className="header__img" src={LogoMobile} alt="Logo" />
          </h1>
        </div>
        <div className="header__desktop">
          <h1 className="header__logo">
            <img className="header__img" src={LogoDesktop} alt="Logo" />
          </h1>
        </div>
        <div className="header__search">
          <img className="header__icon" src={SearchIcon} alt="" />
          <input className="header__input" type="search" placeholder="O que você está procurando?"/>
        </div>
        <Menu />
      </div>
    </header>
  )
}

export default Header;