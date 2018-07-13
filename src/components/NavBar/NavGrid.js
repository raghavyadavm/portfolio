import styled from 'styled-components';
import { theme } from 'rebass';

const NavGrid = styled.nav`
  background-color: ${theme.colors.blue};
  align-items: center;
  height: 100%;
  width: 30%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  overflow-x: hidden;
  padding-top: 20px;
`;

export default NavGrid;
