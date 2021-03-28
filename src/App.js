import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MainNavigation from './shared/components/navigation/MainNavigation';

import Home from './pages/Home';
import Projects from './pages/Projects';

// const Auth = React.lazy(() => import('./user/pages/Auth'));

function App() {
  return (
    <Router>
      <MainNavigation />
      <main>
        {/* <Suspense
              fallback={
                <div className="center">
                  <LoadingSpinner />
                </div>
              }
            > */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
        </Switch>
        {/* </Suspense> */}
      </main>
    </Router>
  );
}

export default App;
