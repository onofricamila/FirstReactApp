import React from 'react';
import './Person.css';

const person = (props) => {
    return (
        <div className="Person" >
           <p> Hi i am {props.name}, {props.age} years old </p>
           <p onClick={props.click}> lala </p>
           <input type="text" onChange={props.changed} value={props.name}/>
        </div> 
    )
}

export default person;
