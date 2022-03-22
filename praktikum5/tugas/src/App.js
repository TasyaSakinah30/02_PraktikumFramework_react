import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
  useHistory,
  Redirect,
  useLocation
} from 'react-router-dom'

export function AuthExample() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  const fakeAuth = {
    isAuthenticated: isAuthenticated,
    authenticate(cb) {
      fakeAuth.isAuthenticated = true;
      setIsAuthenticated(true);
      setTimeout(cb, 100); // fake async
    },
    signout(cb) {
      setIsAuthenticated(false);
      fakeAuth.isAuthenticated = false;
      setTimeout(cb, 100);
    }
  };

  return (
    <Router>
      <div>
        <AuthButton fakeAuth={fakeAuth} isAuthenticated={isAuthenticated} />

        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <LoginPage fakeAuth={fakeAuth} />
          </Route>
          <PrivateRoute path="/menu" fakeAuth={fakeAuth}>
            <Menu />
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
  );
}

function AuthButton(props) {
  const { fakeAuth, isAuthenticated } = props;
  let history = useHistory();

  return isAuthenticated ? (
    <p>
      Welcome!{" "}
      <button
        onClick={() => {
          fakeAuth.signout(() => history.push("/"));
        }}
      >
        Sign out
      </button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  );
}

function PrivateRoute({ children, ...rest }) {
  const { fakeAuth } = rest;

  return (
    <Route
      {...rest}
      render={({ location }) =>
        fakeAuth.isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

function Home() {
  return(
    <div>
      <h2>Home</h2>
    </div>
  );
}

function Menu() {
  let { path, url } = useRouteMatch();
  return (
    <div>
      <h2>Menu</h2>
      <ul>
        <li>
          <Link to={`${url}/Kemeja, Outer, Celana`}>Outfit</Link>
        </li>
        <li>
          <Link to={`${url}/Jam Tangan, Gelang, Kuncir`}>Aksesoris</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path={path}>
          <h3>Please select a topic.</h3>
        </Route>
        <Route path={`${path}/:menuId`}>
          <Menuu />
        </Route>
      </Switch>
    </div>
  )
} 

function Menuu() {
  let { menuId } = useParams()

  return(
    <div>
      <h3>{menuId}</h3>
    </div>
  )
}

function LoginPage(props) {
  const { fakeAuth } = props;

  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };
  let login = () => {
    fakeAuth.authenticate(() => {
      history.replace(from);
    });
  };

  return (
    <div>
      <p>You must log in to view the page at {from.pathname}</p>
      <button onClick={login}>Log in</button>
    </div>
  );
}

export default AuthExample;
