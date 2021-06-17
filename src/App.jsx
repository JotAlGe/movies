import MoviesGrid from "./components/MoviesGrid.jsx";
import styles from "./App.module.css";
import { MovieDetails } from "./pages/MovieDetails.jsx";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage.jsx";

function App() {
  return (
    <Router>
      <div>
        <header>
          <Link to="/">
            <h1 className={styles.title}>Movies</h1>
          </Link>
          <Link to="/">Movies</Link>
          <Link to="/movie">Movie</Link>
        </header>
        <main>
          <Switch>
            <Route exact path="/movie">
              <MovieDetails />
            </Route>
            <Route path="/">
              <LandingPage />
              Home
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}
export default App;
