import axios from 'axios';

const API_KEY = '5353dd79200c421da3f62df2eb27bfab';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const getTrendingMovies = async () => {
  const data = await axios(`/trending/all/day?api_key=${API_KEY}`);
  return data;
};

export const getSearchMovies = async query => {
  const data = await axios(`/search/movie?query=${query}&api_key=${API_KEY}`);
  return data;
};

export const getMoviesById = async id => {
  const data = await axios(`/movie/${id}?api_key=${API_KEY}`);
  return data;
};

export const getMoviesCast = async id => {
  const data = await axios(`/movie/${id}/credits?api_key=${API_KEY}`);
  return data;
};

export const getMoviesReviews = async id => {
  const data = await axios(`/movie/${id}/reviews?api_key=${API_KEY}`);
  return data;
};
