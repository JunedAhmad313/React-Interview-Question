/*
Ans- useEffect ek React Hook hai jo React functional components mein use hota hai. Iska main 
     uddeshya components ke lifecycle events, jaise ki component mount, unmount, update, etc.
     ke sath kuch action execute karne ka hai.

     useEffect ek function hai jo do argument leta hai:

   1-  Ek function jisko effect function kehte hain: Ye function effect ke douran chalaya jata hai,
       jab component render hota

   2- Ek dependency array: Ye array batata hai ki kis kis tarah ke changes par ye effect function chalana
      chahiye. Agar ye array khali hai, to effect component ke har render par chalega. Agar isme kuch dependencies
      hain, to effect function sirf un dependencies ke change par chalega.    */

import React, { useEffect, useState } from "react";

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Ye effect component mount hone par aur count ki value change hone par chalega
    console.log(`Count has changed to ${count}`);

    // Cleanup function (optional), component unmount hone par ye chalega
    return () => {
      console.log("Component is unmounting");
    };
  }, [count]); // count dependency specified

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default MyComponent;
