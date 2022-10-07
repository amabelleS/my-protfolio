import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Routes,
  // Switch,
  // Redirect,
} from 'react-router-dom';

import MainNavigation from './shared/components/navigation/MainNavigation';

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import Fotter from './shared/components/UIElements/Fotter';

function App() {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          {/* <Redirect to="/" /> */}
        </Routes>
      </main>
      <Fotter />
    </Router>
  );
}

export default App;
