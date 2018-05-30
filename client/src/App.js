import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    activeWindows: [],
  }

  // componentDidMount() {
  //     const { params } = this.props.match;
  //     this.ref = base.syncState(`${params}`, {
  //       context: this,
  //       state: 'fishes',
  //     });
  // }

  render() {
    return (
      <div className="App">
        <div className="headerTxt">
          <h1>Stories from Mercado Street</h1>
        </div>
        <img className="bg img-fluid" src="./apt.jpg" alt="apartment building" />
      </div>
    );
  }
}

export default App;
