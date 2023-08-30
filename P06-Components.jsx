/*
Q-  What is component in react ?

Ans.Component is considerd as core building blocks of React Application.
    it makes the task of building UI much easier.

    There are two main types of components in React:


Functional Components:  */

import React from 'react';
// Functional Component
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

export default Greeting;


// Class Components

import React, { Component } from 'react';

class HelloWorld extends Component {
  render() {
    return <h1>Hello, World!</h1>;
  }
}

export default HelloWorld;





    