import { useState, useEffect } from "react";
import { useParams, useRouteMatch } from "react-router-dom";
import * as filmsApi from '../../services/FilmsApi'

export default function Cast() {
  const [cast, setCast] = useState(null)
  const { movieId } = useParams()
  useEffect(() => {
    filmsApi.fetchCredits(movieId).then(setCast)
    
  }, [movieId])

  
  return (
    <>
      
      
     <ul>
        {cast && cast.map(actor => <li key={actor.id}>
          <h4>{actor.name}</h4>
          <img src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`} alt={actor.name} />
          <p>Role: {actor.character }</p>
        </li>)}

    </ul>
    </>
  )
 }