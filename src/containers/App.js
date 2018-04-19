import React, { Component } from 'react';
import './App.css';
import Person from '../components/Persons/Person/Person';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';

class App extends Component {
  state = {
    persons: [
      {id: 'afdsj' , name:'Cam', age:21},
      {id: 'afdsj1' , name:'Mel', age:21}
    ],
    other: 'other property',
    showPersons: false
  }

deletePersonHandler = (index) => {
  // const persons = this.state.persons.slice;
  const persons = [...this.state.persons];
  persons.splice(index, 1);
  this.setState({
    persons: persons
  });
}

 nameChangedHandler = (event, id) => {
    // console.log('clicked');
    // use always setters provided by Component, do not change the state directly
    // other will remain, only persons will change
    const personIndex = this.state.persons.findIndex(p => {return p.id === id;});
    
    const per = {...this.state.persons[personIndex]};

    per.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = per;
   
    this.setState({
      persons: persons
    });
  }

  togglePersonsHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState({showPersons: !doesShow});
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

    let pers = null;

    if (this.state.showPersons) {
      
      pers = (
        <div >
        
        {this.state.persons.map((per, index) => {
          return <Person 
                  click={() => this.deletePersonHandler(index)}
                  name={per.name} 
                  age={per.age}
                  key={per.id}
                  changed={(event) => this.nameChangedHandler(event, per.id)}/>
        })}
          
        </div> 
      );
    }

    return (
      // ineficiente
      <div className="App">
          <h1> Camila's first React app :) </h1>
          <Button bsStyle="primary"
            onClick={ this.togglePersonsHandler}
            style={style}>
            TOGGLE
          </Button>
       
           {pers}

      </div>
    );
 // above code gets compiled to below code
 // return React.createElement('div',{ className:"App"}, React.createElement('h1', null, 'Camila\'s first React app :)'));
  }
}

export default App;
