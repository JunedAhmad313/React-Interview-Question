/*
Q. Which hooks you used in frequently in functional components ?

Ans. useState Because it is a simply state updating function.const is 
     used here because the change of the value is being managed somwhere
     else by react. */

import React, { useState } from "react";

function ExampleComponent() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
