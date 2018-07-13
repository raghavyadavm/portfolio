import React, { Component } from 'react';
import styled from 'styled-components';
import { Provider as RebassProvider } from 'rebass';

import Header from '../../components/Header';
import SideDrawer from '../../components/SideDrawer';

const AppWrapper = styled.div`
  display: grid;
  grid-template-areas: 'header content';
  grid-template-rows: 100%;
  grid-template-columns: 30% 70%;
  width: 100vw;
  height: 100vh;
`;

const HeaderWrapper = styled.div`
  grid-area: header;  
`;

const ContentWrapper = styled.div`
  grid-area: content;
`;

class Portfolio extends Component {
  state = {
    showSideDrawer: false
  };

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  sideDrawerToggleHandler = () => {
    this.setState(prevState => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  render() {
    return (
      <RebassProvider>
        <AppWrapper>
          <HeaderWrapper>
            <Header drawerToggleClicked={this.sideDrawerToggleHandler} />
          </HeaderWrapper>
          {/* <SideDrawer
            open={this.state.showSideDrawer}
            closed={this.sideDrawerClosedHandler}
          /> */}
          <ContentWrapper>
            <main>{this.props.children}</main>
          </ContentWrapper>
        </AppWrapper>
      </RebassProvider>
    );
  }
}

export default Portfolio;
