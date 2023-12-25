import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Default from "./Defoult/Defoult";
import Layout from "../Layout/Layout";
import Layout2 from "Layout/Layout2";

const HomePage = lazy(() => import("pages/HomePage"));
const MoviesPage = lazy(() => import("pages/MoviePage"));
const CastPage = lazy(() => import("pages/CastPage"));
const ReviewsPage = lazy(() => import("pages/ReviewsPage"));

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
        <Route path="movies/:movieId" element={<Layout2 />}>
          <Route path="cast" element={<Suspense fallback={<div>Loading...</div>}>
            <CastPage />
          </Suspense>} />
          <Route path="reviews" element={<Suspense fallback={<div>Loading...</div>}>
            <ReviewsPage />
          </Suspense>} />
        </Route>
        <Route path="*" element={<Default />} />
      </Route>
    </Routes>
  );
};

export default App;
