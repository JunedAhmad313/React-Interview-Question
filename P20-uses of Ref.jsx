/*

Q- What is use of ref in react ?
Ans- Ref is attribute that allow you to access and Intract with DOM elements, or React Components by 
     using this we can access - 

     1- Accessing Dom Element
     2- Managing Focus 
     3- Triggering Animation 
     4- Measuring Animation 
     5- Integreate Third Party Libraries. */

import React, { useRef, useEffect } from "react";

function MyComponent() {
  const myInputRef = useRef(null);

  useEffect(() => {
    myInputRef.current.focus();
  }, []);

  return (
    <div>
      <input ref={myInputRef} />
      <button onClick={() => (myInputRef.current.value = "")}>
        Clear Input
      </button>
    </div>
  );
}

export default MyComponent;
