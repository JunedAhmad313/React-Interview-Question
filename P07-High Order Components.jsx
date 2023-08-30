/*

Q-  What is High Order Components ?

Ans.High Order Components is a Advance Technique for reusingn components 
    logic .it is A Function that takes a components and return a new components. */
    

    import React from 'react';

    // Higher-Order Component
    const withHello = (WrappedComponent) => {
      return (props) => {
        return <WrappedComponent message="Hello, World!" {...props} />;
      };
    };
    
    // Component to be enhanced
    const DisplayMessage = (props) => {
      return <p>{props.message}</p>;
    };
    
    // Enhance the component with the HOC
    const HelloMessage = withHello(DisplayMessage);
    
    // Usage
    const App = () => {
      return (
        <div>
          <DisplayMessage message="Welcome to my app!" />
          <HelloMessage />
        </div>
      );
    };
    
    export default App;
    
