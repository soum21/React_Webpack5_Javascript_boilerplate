import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import Home from './home';
import About from './aboutUs';

export class AppModule extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default withRouter(AppModule);
