/*
Q. What is State in React ?

Ans-State is Encapsulated Property.Means its lives in Components.
    in outside component we can not address him.When we change him then
    Render function will. By using this we can Update UI & State is mutable. 
*/

import React from "react";

export default class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Juned Ahmad",
      Email: "junedahmad9296@gmail.com",
    };
  }
  render() {
    return (
      <div>
        <h1>Hello{this.state.name}</h1>
        <h1>Email :{this.state.Email}</h1>
      </div>
    );
  }
}
