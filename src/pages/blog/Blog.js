import React from 'react';
import { Outlet } from 'react-router-dom';
import logo from '../../assets/logo8.png';
import BlogPrevireCard from './components/blog-preview-card/PrevireCard';

import './Blog.css';

const Blog = () => {
  return (
    <div className="blog-container">
      <header style={{ backgroundImage: { logo } }}>
        <span>
          {/* <img
            alt="my avater"
            src={logo}
            // src="https://avatars.githubusercontent.com/u/45571546?v=4"
            style={{
              clipPath: 'circle(50% at 50% 50%)',
              maxWidth: '11vw',
              maxHeight: '11vh',
            }}
          ></img> */}
          <h1>My Temp Blog</h1>
        </span>
        <input type="search" />
      </header>
      <BlogPrevireCard />
    </div>
  );
};

export default Blog;
