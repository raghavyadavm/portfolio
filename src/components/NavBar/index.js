import React from 'react';

import NavGrid from './NavGrid';
import NavLink from '../NavLink';

const navBar = props => {
  return (
    <NavGrid role="navigation">
      <NavLink to="/about" name="AboutMe" />
      <NavLink to="/education" name="Education" />
      <NavLink to="/experience" name="Experience" />
      <NavLink to="/skills" name="Skills" />
      <NavLink to="/projects" name="Projects" />
    </NavGrid>
  );
};

export default navBar;
