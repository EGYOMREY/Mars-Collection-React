import React, { Component, Fragment } from 'react';
//import logo from './logo.svg';
import './App.css';

import Navigation from './components/Navigation/Navigation';
import MainContent from './containers/MainContent/MainContent';

import {Row, Col} from 'react-materialize';

class App extends Component {
  render() {
    return (
      <Fragment>
      <Navigation />
      <Row>
        <MainContent />
      </Row>
      </Fragment>
    );
  }
}

export default App;
