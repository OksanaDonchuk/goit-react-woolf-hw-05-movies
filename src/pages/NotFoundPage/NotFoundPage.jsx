import React from 'react';
import css from './NotFoundPage.module.css';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className={css.notFound}>
      <h2>Cannot found this page</h2>
      <p className={css.discription}>
        We’re sorry, the page you requested could not be found. Please, go back
        to home page
      </p>

      <Link className={css.bth_to_home} to="/">
        To home page
      </Link>
    </div>
  );
};

export default NotFoundPage;
