import React, {Component} from 'react';
import './Person.css';
import Aux from '../../../hoc/Aux';
import PropTypes from 'prop-types';
import withClass from '../../../hoc/withClass';
import {AuthContext} from '../../../containers/App';

class Person extends Component{

    constructor(props){
        super(props);
        console.log('[Person.js] inside constructor ', props);
      }
    
      componentWillMount(){
        console.log('[Person.js] will mount');
      }
    
      componentDidMount(){
        console.log('[Person.js] Did mount');
        this.inpElement.focus(); // can access this variable bc this method is excecuted after render
      }

    render (){
        console.log('[Person.js] render');
        return (
            <Aux>
                <AuthContext.Consumer>
                {auth => auth ? <p> Auth babe </p> : null}
                </AuthContext.Consumer>
               <p> Hi i am {this.props.name}, {this.props.age} years old </p>
               <p onClick={this.props.click}> lala </p>
               <input 
                    ref={(inp) => {this.inpElement = inp}}
                    type="text" 
                    onChange={this.props.changed} 
                    value={this.props.name}/>
            </Aux> 
        )
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person, 'Person');
