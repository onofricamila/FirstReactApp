import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1> Camila's first React app :) </h1>
      </div>
    );
 // above code gets compiled to below code
 // return React.createElement('div',{ className:"App"}, React.createElement('h1', null, 'Camila\'s first React app :)'));
  }
}

export default App;
