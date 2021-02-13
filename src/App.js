import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppModule from './modules';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log('App Create. xxxxxxxx');
  }

  componentWillUnmount() {
    console.log('App Close. xxxxxxxx');
  }
  render() {
    return (
      <Router>
        <AppModule></AppModule>
      </Router>
    );
  }
}

export default App;
