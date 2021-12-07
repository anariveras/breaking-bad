import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Personajes from "./pages/Characters";
import Quotes from './pages/Quotes';


function App() {




  return (

    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <span className="navbar-brand">Breaking bad wiki</span>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/" >Personajes</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" exact to="/quotes" >Quotes</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link disabled">Disabled</Link>
              </li>
            </ul>

          </div>
        </div>
      </nav>
      <Switch>
        <Route exact path="/" >
          <Personajes />
        </Route>
        <Route exact path="/quotes" >
          <Quotes />
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
