# All About useState

React useState() hook manages the state in functional React components. In class components this.state holds the state, and you invoke the special method this.setState() to update the state.

- It declares a state variable.
- It is a function that accepts a single argument, initial state for the instance of the component.
- returns a pair of values, First is the state and the second is a function we call to update the state.

For example,

```jsx
import React, { useState } from 'react';

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

```

**Note**:
- The state variable is immutable and readonly.
- useState() hook and this.setState() (inside class components) update the state variable and the component output asynchronously.
- Calling the setter function setValue(newValue) of useState() hook (or this.setState() of class components) doesn't exactly update the state, but rather schedules a state update.

### [Buy me a Coffee](http://bit.ly/2WryDT8)
