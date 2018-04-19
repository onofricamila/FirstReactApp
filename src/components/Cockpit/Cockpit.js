import React from 'react';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';

const cockpit = (props) => {
    return (
        <div>
            <h1> {props.title} </h1>
            <Button bsStyle="primary"
            onClick={ props.toggle}>
            TOGGLE
            </Button>
        </div>
    );
}

export default cockpit;