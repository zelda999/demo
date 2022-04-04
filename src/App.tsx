import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import AuthButton from './components/AuthButton';

import AboutPage from './pages/aboutPage/AboutPage';
import HomePage from './pages/homePage/HomePage';
import LoginPage from './pages/loginPage/LoginPage';
import PrivateRoute from './pages/PrivateRoute';
import ProvideAuth from './ProvideAuth';
import PageNotFound from './pages/pageNotFound/PageNotFound';

import { routesString } from './pages/routes_string';

function App() {
  return (
    // <Router>
    //   <div>
    //     <ul>
    //       <li>
    //         <Link to="/">Home</Link>
    //       </li>
    //       <li>
    //         <Link to="/about">About</Link>
    //       </li>
    //     </ul>

    //     <hr />

    //     <Switch>
    //       <Route exact path="/">
    //         <Home />
    //       </Route>
    //       <Route path="/about">
    //         <About />
    //       </Route>
    //       <Route path="*">
    //         <PageNotFound />
    //       </Route>
    //     </Switch>
    //   </div>
    // </Router>
    <ProvideAuth>
      <Router>
        <div>
          <AuthButton />

          <ul>
            <li>
              <Link to={routesString.PUBLIC}>Public Page</Link>
            </li>
            <li>
              <Link to={routesString.PROTECTED}>Protected Page</Link>
            </li>
          </ul>

          <Switch>
            <Route path={routesString.PUBLIC}>
              <AboutPage />
            </Route>
            <Route path={routesString.LOGIN}>
              <LoginPage />
            </Route>
            <PrivateRoute path={routesString.PROTECTED}>
              <HomePage />
            </PrivateRoute>
            <Route path="*">
              <PageNotFound />
            </Route>
          </Switch>
        </div>
      </Router>
    </ProvideAuth>
  );
}

export default App;
