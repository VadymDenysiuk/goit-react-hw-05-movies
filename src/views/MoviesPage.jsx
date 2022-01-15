import { useState, useEffect, useRef } from 'react';
import { Link, useRouteMatch } from "react-router-dom";
import PropTypes from 'prop-types';
import * as filmsApi from '../services/FilmsApi'


function Searchbar() {
  const {url} = useRouteMatch()
  const [inputText, setInputText] = useState('');
  const [query, setQuery] = useState('')
  const [films, setFilms] = useState(null)
  const isFirstRender = useRef(true);
  
  useEffect(() => {
    if (isFirstRender) {
       if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    }
    
   filmsApi.fetchFilmByQuery(query).then(setFilms)
  }, [query])
  
  
  const handleQuerySearch = e => {
    setInputText(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    console.log('aaa')
    e.preventDefault();
    
    setQuery(inputText)
    setInputText('');
  };

  return (
   <>
      <form onSubmit={handleSubmit}>
        <button onClick={handleSubmit} type="submit">
          <label className="button-label">Search</label>
        </button>

        <input
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={inputText}
          onChange={handleQuerySearch}
        />
    </form>
       {films && films.map(movies => <li key={movies.id}>
        <Link to={`${url}/${movies.id}`}>{movies.title || movies.name} </Link>
        </li>)}
</>
  );
}

export default Searchbar;
