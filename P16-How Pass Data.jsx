/*

Q.  How to Pass data between react components .?

Ans- With the help of props we can send data from a prent to
     child components. and with the help callback function we
     can send data to child components  to parrent components. */

     

//  Props (Parent to Child):

// ParentComponent.js
import React from "react";
import ChildComponent from "./ChildComponent";

function ParentComponent() {
  const dataToPass = "Hello from Parent!";
  return <ChildComponent data={dataToPass} />;
}

// ChildComponent.js
import React from "react";

function ChildComponent(props) {
  return (
    <div>
      <p>{props.data}</p>
    </div>
  );
}







// Callback Functions (Child to Parent):

// ParentComponent.js
import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
  const [dataFromChild, setDataFromChild] = useState("");

  const handleChildData = (data) => {
    setDataFromChild(data);
  };

  return (
    <div>
      <p>Data from Child: {dataFromChild}</p>
      <ChildComponent onData={handleChildData} />
    </div>
  );
}

// ChildComponent.js
import React from 'react';

function ChildComponent(props) {
  const sendDataToParent = () => {
    const data = "Hello from Child!";
    props.onData(data);
  };

  return (
    <div>
      <button onClick={sendDataToParent}>Send Data to Parent</button>
    </div>
  );
}

