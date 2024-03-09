import { NavLink, Outlet } from 'react-router-dom';
import css from './MoviesDetails.module.css';

const MoviesDetails = ({ details }) => {
  const { title, original_name, overview, poster_path, vote_average, genres } =
    details;

  return (
    <div className={css.wrapper_details}>
      <div className={css.movie_details}>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w185${poster_path}`
              : 'https://live.staticflickr.com/65535/51349451747_f6d7898f2c_n.jpg'
          }
          className={css.movie_poster}
          width={'270px'}
          height={'400px'}
          alt="poster"
        />

        <div className={css.information}>
          <h2 className={css.title}>{title ? title : original_name}</h2>

          <p>User Score: {vote_average}%</p>

          <>
            <h2>Overview</h2>
            <p>{overview}</p>
          </>

          <>
            <h2>Genres</h2>
            <ul className={css.genres}>
              {genres &&
                genres.map(item => {
                  return <p key={item.id}>{item.name}</p>;
                })}
            </ul>
          </>
        </div>
      </div>
      <div>
        <h3>Additional information</h3>
        <ul className={css.additional_link}>
          <NavLink className={css.additional_item} to="cast">
            Cast
          </NavLink>
          <NavLink className={css.additional_item} to="reviews">
            Reviews
          </NavLink>
        </ul>
        <Outlet />
      </div>
    </div>
  );
};

export default MoviesDetails;
