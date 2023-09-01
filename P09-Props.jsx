/*
Q- What is Props in React ?

Ans. Props Stands For the Properties. they are read only components.
     They are makes components Reusable because they Pass data from 
     one components to another components.  */

//  Parent Component:
import React from "react";
import ChildComponent from "./ChildComponent";

function ParentComponent() {
  const message = "Hello from Parent!";
  return <ChildComponent message={message} />;
}

// Child Component
import React from "react";

function ChildComponent(props) {
  return <div>{props.message}</div>;
}
