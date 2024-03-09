import SharedLauout from 'layouts/SharedLayout';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const MoviesDetailsPage = lazy(() =>
  import('pages/MoviesDetailsPage/MoviesDetailsPage')
);
const MoviesPage = lazy(() => import('pages/MoviesPage/MoviesPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage/NotFoundPage'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLauout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="movies/:movieId" element={<MoviesDetailsPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
