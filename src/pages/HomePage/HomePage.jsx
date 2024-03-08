import { useEffect, useState } from 'react';
import css from './HomePage.module.css';
import { getTrendingMovies } from 'api/getMovies';
import { Loader } from 'components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';

const HomePage = () => {
  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchTrendMovies = async () => {
      try {
        setIsLoading(true);
        const data = await getTrendingMovies();
        setMovies(data.data.results);
      } catch (err) {
        alert('Oops, something went wrong');
      } finally {
        setIsLoading(false);
      }
    };
    fetchTrendMovies();
  }, []);

  return (
    <div className={css.home_container}>
      {isLoading && <Loader />}
      <h1 className={css.home_title}>Trending today</h1>
      {movies && <MoviesList movies={movies} />}
    </div>
  );
};

export default HomePage;
