import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import css from './Reviews.module.css';
import { Loader } from 'components/Loader/Loader';
import { getMoviesReviews } from 'api/getMovies';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getReviews = async () => {
      try {
        setIsLoading(true);
        const data = await getMoviesReviews(movieId);
        setReviews(data.data.results);
      } catch (error) {
        alert('Oops, something went wrong');
      } finally {
        setIsLoading(false);
      }
    };
    getReviews();
  }, [movieId]);

  return (
    <div>
      {isLoading && <Loader />}
      <ul className={css.reviews_list}>
        {reviews.length > 0 ? (
          reviews.map(({ author, content }) => (
            <li className={css.reviews_item} key={author}>
              <div className={css.reviews_container}>
                <p className={css.rev_author}>{author}</p>
                <p className={css.rev_content}>{content}</p>
              </div>
            </li>
          ))
        ) : (
          <p>Sorry, there is no information</p>
        )}
      </ul>
    </div>
  );
};

export default Reviews;
