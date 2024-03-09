import { useLocation, useNavigate, useParams } from 'react-router-dom';
import css from './MoviesDetailsPage.module.css';
import { useEffect, useState } from 'react';
import { getMoviesById } from 'api/getMovies';
import MoviesDetails from 'components/MoviesDetails/MoviesDetails';
import { Loader } from 'components/Loader/Loader';

const MoviesDetailsPage = () => {
  const { movieId } = useParams();
  const [details, setDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const getMovies = async () => {
      try {
        setIsLoading(true);

        const data = await getMoviesById(movieId);
        setDetails(data.data);
      } catch (error) {
        alert('Oops, something went wrong');
      } finally {
        setIsLoading(false);
      }
    };

    getMovies();
  }, [movieId]);

  const goBack = () => {
    navigate(location.state?.from ?? '/');
  };

  return (
    <>
      <button className={css.btn_back} onClick={goBack}>
        Go back
      </button>

      {details && <MoviesDetails details={details} />}
      {isLoading && <Loader />}
    </>
  );
};

export default MoviesDetailsPage;
