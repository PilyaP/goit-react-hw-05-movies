// import Home from '../pages/Home';
// import Movies from '../pages/Movies';
// import Nav from './Nav/Nav';
// import Cast from 'pages/Cast';
// import Reviews from 'pages/Reviews';
// import SingleMovie from 'pages/SingleMovie';
// import { Suspense } from 'react';
// import Loader from './Loader/Loader';

import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './Nav/Nav';
import Loader from './Loader/Loader';

const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const Cast = lazy(() => import('../pages/Cast'));
const Reviews = lazy(() => import('../pages/Reviews'));
const SingleMovie = lazy(() => import('../pages/SingleMovie'));

export const App = () => {
  return (
    <>
      <Nav />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />

          <Route path="/movies/:id" element={<SingleMovie />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
