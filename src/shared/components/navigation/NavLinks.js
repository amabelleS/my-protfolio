import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavLinks.css';

export const NavLinks = () => {
  return (
    <ul className="nav-links">
      <li className="nav_actions">
        <NavLink
          to="/projects"
          exact
          activeStyle={{
            textShadow: '1px 1px 1px gray',
            transform: 'skewX(-20deg) scale(1.1)',
          }}
        >
          Projects
        </NavLink>
      </li>
      <li className="nav_actions">
        <NavLink
          to="/about"
          exact
          activeStyle={{
            textShadow: '1px 1px 1px gray',
            transform: 'skewX(-20deg) scale(1.1)',
          }}
        >
          About
        </NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
