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
      {/* <h2>In Progress - Nested routs with react & redux </h2>
      <h4>
        I'm stuck on something. So here I am writing my first blog describing the work process as I try to work this out. 
        I'm working on a e-commerce react app, trying to implement nested routs with mapStateToProps.  
      </h4> */}
        {/* <div className="blog_link">
          <a href='https://codesandbox.io/s/icy-https-ok2nr?file=/src/App.tsx'>To codesandbox</a>
        </div> */}
      <h2>Up Next - Working with react player as backgroud</h2>
      <h4>
        {' '}
        How to make react-player full screan and scale responsively to mobile
        views:
      </h4>
      <h2>Up Next - Working with canvas.js - make it functional:)</h2>
      {/* <h2>Up Next - Why you dont need redux:)</h2> */}
    </div>
  );
};

export default Blog;
