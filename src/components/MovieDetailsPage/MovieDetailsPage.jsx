import { useState, useEffect } from "react";
import { useParams, useRouteMatch, Route, NavLink, Switch } from "react-router-dom";
import Cast from "../Cast";
import Reviews from "../Reviews";
import * as filmsApi from '../../services/FilmsApi'

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
       <Route exact path={`${path}/cast`}>
          <Cast/>
      </Route>
       <Route exact path={`${path}/reviews`}>
          <Reviews/>
      </Route>
      
    </>
    )
 }