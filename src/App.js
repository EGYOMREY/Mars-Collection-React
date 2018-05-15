import React, { Component } from 'react';

import Navigation from './components/Navigation/Navigation';
import Home from './containers/Home/Home';
import MyPictures from './containers/MyPictures/MyPictures';
import LearnMore from './containers/LearnMore/LearnMore';


import { Route, Switch, Redirect } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
      <Switch>
        <Route path="/learnmore"  component={LearnMore} />
        <Route path="/mypictures"  component={MyPictures} />
        <Route path="/" exact component={Home} />
        <Redirect to="/" />
      </Switch>
      </div>
    );
  }
}

export default App;
