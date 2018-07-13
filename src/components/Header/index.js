import React from 'react';
import styled from 'styled-components';

import NavBar from '../NavBar';
import DrawerToggle from '../SideDrawer/DrawerToggle';

const header = props => {
  return (
    <header>
      <DrawerToggle clicked={props.drawerToggleClicked} />
      <NavBar />
    </header>
  );
};

export default header;
