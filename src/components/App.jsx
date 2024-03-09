import SharedLauout from 'layouts/SharedLayout';
import { Suspense, lazy } from 'react';
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
      <Route
        path="/"
        element={
          <Suspense fallback={<h3>loading...</h3>}>
            <SharedLauout />
          </Suspense>
        }
      >
        <Route
          index
          element={
            <Suspense fallback={<h3>loading...</h3>}>
              <HomePage />
            </Suspense>
          }
        />
        <Route
          path="movies"
          element={
            <Suspense fallback={<h3>loading...</h3>}>
              <MoviesPage />
            </Suspense>
          }
        />
        <Route
          path="movies/:movieId"
          element={
            <Suspense fallback={<h3>loading...</h3>}>
              <MoviesDetailsPage />
            </Suspense>
          }
        >
          <Route
            path="cast"
            element={
              <Suspense fallback={<h3>loading...</h3>}>
                <Cast />
              </Suspense>
            }
          />
          <Route
            path="reviews"
            element={
              <Suspense fallback={<h3>loading...</h3>}>
                <Reviews />
              </Suspense>
            }
          />
        </Route>
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
