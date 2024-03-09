import { getMoviesCast } from 'api/getMovies';
import { Loader } from 'components/Loader/Loader';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import css from './Cast.module.css';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getcast = async () => {
      try {
        setIsLoading(true);
        const data = await getMoviesCast(movieId);
        if (data.data.cast.length === 0) {
          alert('Sorry, there is no information');
          return;
        }
        setCast(data.data.cast);
      } catch (error) {
        alert('Oops, something went wrong');
      } finally {
        setIsLoading(false);
      }
    };
    getcast();
  }, [movieId]);

  return (
    <div>
      {isLoading && <Loader />}
      <ul className={css.cast_list}>
        {cast.map(({ id, profile_path, character, name }) => (
          <li className={css.cast_item} key={id}>
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w185${profile_path}`
                  : 'https://live.staticflickr.com/65535/51349451747_f6d7898f2c_n.jpg'
              }
              alt={name}
              width={'120px'}
              height={'200px'}
            />
            <div className={css.cast_descript}>
              <p className={css.cast_name}>{name}</p>
              <p className={css.cast_character}>Character: {character}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
