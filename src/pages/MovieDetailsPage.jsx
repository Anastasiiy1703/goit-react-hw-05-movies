import MovieDetails from "components/MovieDetails/MovieDetails"
import { Outlet } from "react-router-dom"
const MoviesDetailsPage = () => {
  return (
    <div>
          <MovieDetails />
          <Outlet />
    </div>
  )
}

export default MoviesDetailsPage