/*
Q. What is One-way DataBinding ?
Ans. React use One-Way databinding  there is two condition follow
     
     Components to View: Any changes in the component's data would get reflected 
                         in the component's view.

     View to Component: Any changes in the view would get reflected in the 
                        component's data." */
                        


import React, { useState } from "react";

function App() {
  const [message, setMessage] = useState("Hello, World!");

  const updateMessage = () => {
    setMessage("Updated Message!");
  };

  return (
    <div>
      <h1>{message}</h1>
      <button onClick={updateMessage}>Update Message</button>
    </div>
  );
}

export default App;
