/*
Q- What is similarity b/w class-based & functional based components ?

Ans. 1- Rendring Output
     2- Components Logic 
     3- Props
     4- Lifecycle Methode
     5- Reusability  */

import React, { useState } from "react";

function CounterFunctional() {
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

export default CounterFunctional;
