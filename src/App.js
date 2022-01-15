import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Appbar from "./components/AppBar/AppBar";
import HomeView from "./views/HomeView";
import MoviesPage from "./views/MoviesPage";
import NotFoundView from "./views/NotFoundView";
import MovieDetailsPage from "./components/MovieDetailsPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Appbar />
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
          <NotFoundView />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
