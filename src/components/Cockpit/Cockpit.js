import React from 'react';
import Aux from '../../hoc/Aux';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';

const cockpit = (props) => {
    return (
        <Aux>
            <h1> {props.title} </h1>
            <Button bsStyle="primary"
            onClick={ props.toggle}>
            TOGGLE
            </Button>
        </Aux>
    );
}

export default cockpit;