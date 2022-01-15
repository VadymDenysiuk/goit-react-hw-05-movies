import { useState, useEffect } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import * as filmsApi from '../services/FilmsApi'

export default function HomeView() {
  const [films, setfilms] = useState(null)
  useEffect(() => {
    filmsApi.fetchTrends().then(setfilms)
  }, [])
  
  return (
    <>
      <h1>Trands</h1> <ul>
        {films && films.map(movies => <li key={movies.id}>
          <Link to={`/movies/${movies.id}`}>{movies.title || movies.name} </Link>
        </li>)}

    </ul>
      </>
  );
}
