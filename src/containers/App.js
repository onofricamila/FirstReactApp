import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import Aux from '../hoc/Aux';
import withClass from '../hoc/withClass';

class App extends Component {

  constructor(props){
    super(props);
    console.log('[App.js] inside constructor ', props);
    this.state = {
      persons: [
        {id: 'afdsj' , name:'Cam', age:21},
        {id: 'afdsj1' , name:'Mel', age:21}
      ],
      other: 'other property',
      showPersons: false,
      toggleClicked: 0
    }
  }

  componentWillMount(){
    console.log('[App.js] will mount');
  }

  componentDidMount(){
    console.log('[App.js] Did mount');
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
    console.log('[App.js] render');
    let pers = null;

    if (this.state.showPersons) {
      pers = (
           <Persons
                  persons={this.state.persons}
                  clicked={this.deletePersonHandler}
                  changed={this.nameChangedHandler}/>
      );
    }

    return (
      <Aux>
          <Cockpit title={this.props.title} toggle={this.togglePersonsHandler}/>
          {pers}
      </Aux>
    );
 // above code gets compiled to below code
 // return React.createElement('div',{ className:"App"}, React.createElement('h1', null, 'Camila\'s first React app :)'));
  }
}

export default withClass(App, 'App') ;
