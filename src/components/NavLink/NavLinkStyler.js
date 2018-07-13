import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavLink = styled(Link)`
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  &:active {
    color: blue;
  }
  &:hover {
    color: red;
  }
`;

export default NavLink;