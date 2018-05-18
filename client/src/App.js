import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    activeWindows: [],
  }

  componentDidMount() {
    console.log('sup');
  }

  render() {
    return (
      <div className="App">
        <h1>Stories from Mercado Street</h1>
      </div>
    );
  }
}

export default App;
