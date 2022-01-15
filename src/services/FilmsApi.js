import axios from "axios";

const API_KEY = "d665be3319bbf0606cebcc4f2b47d192";
const BASE_URL = "https://api.themoviedb.org/3/";
const trends = `trending/all/day?api_key=${API_KEY}`; /* Тренды */
const search = `search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false`; /* по ключ слову на стр */
const film = `movie/{movie_id}?api_key=${API_KEY}&language=en-US`; /* запрос полной информации о фильме для страницы кинофильма. */
const credits = `movie/{movie_id}/credits?api_key=${API_KEY}&language=en-US`; /* запрос информации о актёрском составе для страницы кинофильма. */
const reviews = `movie/{movie_id}/reviews?api_key=${API_KEY}&language=en-US&page=1`; /* запрос обзоров для страницы кинофильма */

async function fetchInfo(url) {
  const response = await axios.get(url);
  return response.data;
}

export function fetchTrends() {
  return fetchInfo(`${BASE_URL}${trends}`).then((data) => data.results);
}
export function fetchFilmByQuery(movie) {
  return fetchInfo(
    `${BASE_URL}search/movie?api_key=${API_KEY}&language=en-US&page=1&query=${movie}`
  ).then((data) => data.results);
}
export function fetchFilmInfo(movieId) {
  return fetchInfo(
    `${BASE_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
}
export function fetchCredits(movieId) {
  return fetchInfo(
    `${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}`
  ).then((data) => data.cast);
}
export function fetchReviews(movieId) {
  return fetchInfo(
    `${BASE_URL}movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  ).then((data) => data.results);
}
