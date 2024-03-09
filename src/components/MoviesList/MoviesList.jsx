import css from './MoviesList.module.css';
import { Link, useLocation } from 'react-router-dom';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul className={css.trend_list}>
      {movies.map(({ id, title, name, poster_path }) => (
        <li className={css.trend_item} key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            <img
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w185${poster_path}`
                  : 'https://live.staticflickr.com/65535/51349451747_f6d7898f2c_n.jpg'
              }
              alt={title}
              className={css.movie_poster}
              width={'270px'}
              height={'400px'}
            />
            <p className={css.trendMovies_title}>{title ? title : name}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;
