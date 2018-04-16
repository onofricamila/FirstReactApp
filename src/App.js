import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name:'Cam', age:21},
      {name:'Mel', age:21}
    ],
    other: 'other property'
  }

  switchNameHandler = (newName) => {
    // console.log('clicked');
    // use always setters provided by Component, do not change the state directly
    // other will remain, only persons will change
    this.setState({
      persons: [
        {name:newName, age:21},
        {name:'Mel', age:21}
      ]
    });
  }

 nameChangedHandler = (event) => {
    // console.log('clicked');
    // use always setters provided by Component, do not change the state directly
    // other will remain, only persons will change
    this.setState({
      persons: [
        {name:event.target.value, age:21},
        {name:'Mel', age:21}
      ]
    });
  }

  render() {
    // coding style with js, to make inline style and assure it wont be global
    // but delimited to the block scope
    const style = {
      backgroudColor: 'white', 
      padding: '7px',
      border: '1px solid darkred',
      cursor: 'pointer'
    }
    return (
      // ineficiente
      <div className="App">
          <h1> Camila's first React app :) </h1>
          <button 
            onClick={() => this.switchNameHandler('Camiluchis')}
            style={style}
            >Switch Name
          </button>
          <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age}
            changed={this.nameChangedHandler}
          />
          <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[0].age}
            click={this.switchNameHandler.bind(this, 'Camilinda')}
          >
             Lala 
          </Person>
      </div>
    );
 // above code gets compiled to below code
 // return React.createElement('div',{ className:"App"}, React.createElement('h1', null, 'Camila\'s first React app :)'));
  }
}

export default App;
