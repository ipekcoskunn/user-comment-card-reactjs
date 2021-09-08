import React, { Component } from 'react';
import Comment from './Comment';


class App extends Component {
  render() {
    return (
      <div className="ui comments">
        <Comment/>
      </div>
    );
  }
}

export default App;