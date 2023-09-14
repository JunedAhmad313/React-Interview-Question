/*
 Q- What is the virtual DOM ?

 Ans. Virtual Dom is concept where the virtual Repersentation  of the 
      real dom is kept inside the memory and syncd with the real dom by
      a library such as a react dom.

      when we make any changes in the virtual dom it does not reflect on
      the screen directly.

      react uses two  virtual  dom  to render the user interface. one of 
      them used to store the current state of the object and the other 
      to store the previous state of the object.

      whenever the Virtual Dom get updated, react compare the two virtual 
      Dom object then he render those object which is change. */

      
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}

export default Counter;
