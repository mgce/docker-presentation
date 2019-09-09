import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
import NotesList from './containers/notes';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <NotesList />;
  }
}

export default hot(App);
