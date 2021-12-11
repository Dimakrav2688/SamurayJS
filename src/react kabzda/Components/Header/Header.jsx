import React from "react";
import { NavLink } from "react-router-dom";
import s from './Header.module.css';

const Header = (props) => {
  return (
    <header className={s.header}>
      <img src='https://st2.depositphotos.com/1192512/6870/v/600/depositphotos_68706365-stock-illustration-woman-eye-logo-beauty-symbol.jpg' />
      <div className={s.loginBlok}>
        {props.isAuth ? props.login
        : <NavLink to={'/login'}>Login</NavLink> }
      </div>
    </header>
  );

}

export default Header;
