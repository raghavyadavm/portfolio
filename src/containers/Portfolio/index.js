import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import NavBar from '../../components/NavBar';
import AboutMe from '../../components/AboutMe';
import Projects from '../../components/Projects';

class Portfolio extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route path="/projects" component={Projects} />
          <Route exact path="/" component={AboutMe} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default Portfolio;
