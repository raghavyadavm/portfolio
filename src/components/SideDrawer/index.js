import React from 'react';
import styled from 'styled-components';

import Backdrop from '../Backdrop/Backdrop';
import classes from './SideDrawer.css';
import NavBar from '../NavBar';

const NavBarWrapper = styled.div`
  position: relative;
  top: 0;
`;

const SideDrawerWrapper = styled.div`
  position: fixed;
  width: 280px;
  max-width: 70%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 200;
  background-color: white;
  padding: 32px 16px;
  box-sizing: border-box;
  transition: transform 0.3s ease-out;
`;

const SideDrawerWrapperOpen = styled.div`
  transform: translateX(0);
`;
const SideDrawerWrapperClose = styled.div`
  transform: translateX(-100%);
`;

const sideDrawer = props => {
  let cssStyle = (
    <SideDrawerWrapperClose>
      <NavBar />
    </SideDrawerWrapperClose>
  );
  if (props.open) {
    cssStyle = (
      <SideDrawerWrapperOpen>
        <NavBar />
      </SideDrawerWrapperOpen>
    );
  }
  console.log(cssStyle);
  return (
    <React.Fragment>
      <Backdrop show={props.open} clicked={props.closed} />
      <SideDrawerWrapper>{cssStyle}</SideDrawerWrapper>
    </React.Fragment>
  );
};

export default sideDrawer;
