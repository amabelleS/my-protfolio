import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavLinks.css';

export const NavLinks = () => {
  let activeStyle = {
    textShadow: '1px 1px 1px gray',
    transform: 'skewX(-20deg) scale(1.1)',
  };

  // let activeClassName = 'underline';

  return (
    <ul className="nav-links">
      <li className="nav_actions">
        <NavLink
          to="/projects"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          {' '}
          Projects
        </NavLink>
      </li>
      <li className="nav_actions">
        <NavLink
          to="/blog"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Blog
        </NavLink>
      </li>
      <li className="nav_actions">
        <NavLink
          to="/about"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          About
        </NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
