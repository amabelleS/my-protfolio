import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import './NavLinks.css';

export const NavLinks = () => {
  return (
    <ul className="nav-links">
      <li className="nav_actions">
        <NavLink to="/projects" exact>
          Projects
        </NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
