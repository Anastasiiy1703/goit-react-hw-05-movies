import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Default from "./Defoult/Defoult";
import Layout from "../Layout/Layout";
import MovieDetailsPage from "pages/MovieDetailsPage";
import Cast from "./Cast/Cast";
import Reviews from "./Reviews/Reviews";

const HomePage = lazy(() => import("pages/HomePage"));
const MoviesPage = lazy(() => import("pages/MoviePage"));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Suspense fallback={<div>Loading...</div>}>
          <HomePage />
        </Suspense>} />
        <Route path="movies" element={<Suspense fallback={<div>Loading...</div>}>
          <MoviesPage />
        </Suspense>} />
        <Route path="movies/:movieId" element={<MovieDetailsPage />}>
                <Route path="cast" element={<Cast />} />
                <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Default />} />
      </Route>
    </Routes>
  );
};

export default App;
