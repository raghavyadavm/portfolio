import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import './App.css';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import About from './components/About';
import Portfolio from './containers/Portfolio';

class App extends Component {
  render() {
    return <div className="App">
        <Portfolio>
          <Switch>           
            <Route path="/Education" component={Education} />
            <Route path="/Experience" component={Experience} />
            <Route path="/Skills" component={Skills} />
            <Route path="/Projects" component={Projects} />
            <Route exact path="/" component={About} />
            <Redirect to="/" />
          </Switch>
        </Portfolio>
      </div>;
  }
}

export default App;
