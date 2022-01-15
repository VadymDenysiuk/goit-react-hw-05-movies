import { useState, useEffect, lazy, Suspense } from "react";
import { useParams, useRouteMatch, Route, NavLink, Switch } from "react-router-dom";
import * as filmsApi from '../../services/FilmsApi'
const Cast = lazy(() => import('../Cast' /* webpackChunkName: 'cast' */))
const Reviews = lazy(() => import('../Reviews' /* webpackChunkName: 'reviews' */))


export default function MovieDetailsPage() {
  const [movie, setMovie] = useState(null)
  const { movieId } = useParams()
  const {url, path} = useRouteMatch()
  useEffect(() => {
    filmsApi.fetchFilmInfo(movieId).then(setMovie)
  }, [movieId])
  
  return (
    <>
    { movie && (<>
      <h2>{movie.title}</h2>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="movie.title" />
      <p>{movie.overview}</p>
    </>)
      }

      <h3>Additional information</h3>
      <ul>
        <li>
          {<NavLink to={`${url}/cast`}>Cast</NavLink>}
        </li>
       
          <li>
          {<NavLink to={`${url}/reviews`}>Reviews</NavLink>}
        </li>
          
      </ul>
      <Suspense fallback={<h1>Loading</h1>}>
       <Route exact path={`${path}/cast`}>
          <Cast/>
      </Route>
       <Route exact path={`${path}/reviews`}>
          <Reviews/>
      </Route>
      </Suspense>
    </>
    )
 }