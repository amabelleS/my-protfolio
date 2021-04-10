import React from 'react';

import './Blog.css';

const Blog = () => {
  return (
    <div className="blog-container">
      <h1>Blog - Under Constructions</h1>
      <h2>Somthing helpfull in the meanwhile</h2>
      <h4>
        When developing, if you want to check how your app looks on mobile in
        real time, go to your browser on your mobile and enter your IP
        adress:your local port (localhost:3000). There are some bugs that you
        can only catch there.
      </h4>
      <h2>Up Next - Working with react player as backgroud</h2>
      <h4>
        {' '}
        How to make react-player full screan and scale responsively to mobile
        views:
      </h4>
    </div>
  );
};

export default Blog;
