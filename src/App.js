import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MainNavigation from './shared/components/navigation/MainNavigation';
// import LoadingSpinner from './shared/components/UIElements/LoadingSpinner';

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import Fotter from './shared/components/UIElements/Fotter';

// const Home = lazy(() => import('./pages/Home'));
// const About = React.lazy(() => import('./pages/About'));
// const Projects = React.lazy(() => import('./pages/Projects'));
// const Blog = React.lazy(() => import('./pages/Blog'));
// const Fotter = React.lazy(() =>
//   import('./shared/components/UIElements/Fotter')
// );

function App() {
  return (
    <Router>
      <MainNavigation />
      {/* <Suspense
        fallback={
          <div className="center">
            <LoadingSpinner />
          </div>
        }
      > */}
      <main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route exact path="/blog">
            <Blog />
          </Route>
        </Switch>
      </main>
      {/* </Suspense> */}
      <Fotter />
    </Router>
  );
}

export default App;
