import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to='/profile' activeClassName={s.activeLink}>Profile</NavLink>
      </div>
      <div className={`${s.item} ${s.active}`}>
        <NavLink to='/dialogs' activeClassName={s.activeLink}>Massages</NavLink>
      </div>

      <div className={`${s.item} ${s.active}`}>
        <NavLink to='/users' activeClassName={s.activeLink}>Users</NavLink>
      </div>

      <div className={s.item}>
        <a href='/news'>News</a>
      </div>
      <div className={s.item}>
        <NavLink to='/music' activeClassName={s.activeLink}>Music</NavLink>
      </div>
      <div className={s.item}>
        <a href='/setings'>Setings</a>
      </div>
    </nav>
  );
}

export default NavBar;
