import { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Appbar from "./components/AppBar/AppBar";
import "./App.css";
const HomeView = lazy(() =>
  import("./views/HomeView" /* webpackChunkName: 'homeView' */)
);
const MoviesPage = lazy(() =>
  import("./views/MoviesPage" /* webpackChunkName: 'moviesPage' */)
);
const MovieDetailsPage = lazy(() =>
  import(
    "./components/MovieDetailsPage" /* webpackChunkName: 'movieDetailsPage' */
  )
);

function App() {
  return (
    <div className="App">
      <Appbar />

      <Suspense fallback={<h1>Loading</h1>}>
        <Switch>
          <Route exact path="/">
            <HomeView />
          </Route>

          <Route exact path="/movies">
            <MoviesPage />
          </Route>

          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>

          <Route>
            <HomeView />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
