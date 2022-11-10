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
import Blog from './pages/blog/Blog';
import Post from './pages/Post.js';
import Fotter from './shared/components/UIElements/Fotter';
import PrevireCard from './pages/blog/components/blog-preview-card/PrevireCard';

function App() {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />}/>
            <Route path="/blog/:id" element={<Post />}/>
            {/* <Route path=":postId" element={<PrevireCard />} /> */}
          {/* </Route> */}
          {/* <Redirect to="/" /> */}
        </Routes>
      </main>
      <Fotter />
    </Router>
  );
}

export default App;
