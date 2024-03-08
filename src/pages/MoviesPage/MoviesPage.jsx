import { getSearchMovies } from 'api/getMovies';
import { Loader } from 'components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';
import SearchForm from 'components/SearchForm/SearchForm';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const MoviesPage = () => {
  const [searchMovies, setSearchMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery] = useSearchParams();

  const query = searchQuery.get('query');

  useEffect(() => {
    if (query === null) {
      return;
    }
    const addSearchMovies = async () => {
      try {
        setIsLoading(true);
        const data = await getSearchMovies(query);
        if (data.data.total_results === 0) {
          alert(
            'Sorry, there are no movies matching your search query. Please try again.'
          );
        }
        setSearchMovies(data.data.results);
      } catch (err) {
        alert('Oops, something went wrong');
      } finally {
        setIsLoading(false);
      }
    };
    addSearchMovies();
  }, [query]);

  return (
    <div>
      <SearchForm />
      {isLoading && <Loader />}
      {searchMovies && <MoviesList movies={searchMovies} />}
    </div>
  );
};

export default MoviesPage;
