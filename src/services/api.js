import axios from 'axios';

const API_KEY = 'c66f597fbdbbb50c0972dd6c4a492e0e';
const BASE_URL = 'https://api.themoviedb.org/3/';

const instance = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
    language: 'en-US',
  },
});

const searchMovies = async query => {
  try {
    const { data } = await instance.get('search/movie', {
      params: {
        query: query,
      },
    });
    return data;
  } catch (error) {
    console.error('Error searching movies:', error);
    throw error;
  }
};

const getMostPopular = async () => {
  try {
    const { data } = await instance.get('movie/popular');
    return data;
  } catch (error) {
    console.error('Error getting most popular movies:', error);
    throw error;
  }
};

const getMovieById = async id => {
  try {
    const { data } = await instance.get(`movie/${id}`);
    return data;
  } catch (error) {
    console.error(`Error getting movie with ID ${id}:`, error);
    throw error;
  }
};

const getCredits = async id => {
  try {
    const { data } = await instance.get(`movie/${id}/credits`);
    return data;
  } catch (error) {
    console.error(`Error getting credits for movie with ID ${id}:`, error);
    throw error;
  }
};

const getReviews = async id => {
  try {
    const { data } = await instance.get(`movie/${id}/reviews`);
    return data;
  } catch (error) {
    console.error(`Error getting reviews for movie with ID ${id}:`, error);
    throw error;
  }
};

export { searchMovies, getMostPopular, getMovieById, getCredits, getReviews };
