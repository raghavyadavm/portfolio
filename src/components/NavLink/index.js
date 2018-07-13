import React from 'react';

import StyledLink from './NavLinkStyler';

const navLink = (props) => {
  return (
    <StyledLink to={props.to}>
      {props.name}
    </StyledLink>
    );
}
 
export default navLink;