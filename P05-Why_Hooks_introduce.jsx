/* Q.Why Hooks are Introduce ?

 Ans.Hooks were Introduce in react to provide a simpler and more Reusable 
     way to manage state and handle lifecycle events in functional components
     without need of class components. 

      Hooks Advantages ➢

    1- Improve Code Reusability       2- Simple Components Structure
    3-Enhance Readability             4- Simple State Management



    

    Using Class Component: */

 import React, { Component } from 'react';

class CounterClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    document.title = `Count: ${this.state.count}`;
  }

  componentDidUpdate() {
    document.title = `Count: ${this.state.count}`;
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
      </div>
    );
  }
}

export default CounterClass;




// Using Functional Component with Hooks:

import React, { useState, useEffect } from 'react';

function CounterFunctional() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default CounterFunctional;



