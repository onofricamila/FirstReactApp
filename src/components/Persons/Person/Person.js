import React, {Component} from 'react';
import './Person.css';

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
      }

    render (){
        console.log('[Person.js] render');
        return (
            <div className="Person" >
               <p> Hi i am {this.props.name}, {this.props.age} years old </p>
               <p onClick={this.props.click}> lala </p>
               <input type="text" onChange={this.props.changed} value={this.props.name}/>
            </div> 
        )
    }
}
   

export default Person;
