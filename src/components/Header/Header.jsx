import React from 'react';
import css from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className={css.heder}>
      <ul className={css.nav_menu}>
        <li className={css.nav_item}>
          <Link className={css.nav_link} to="/">
            Home
          </Link>
        </li>
        <li className={css.nav_item}>
          <Link to="/movies">Movies</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
