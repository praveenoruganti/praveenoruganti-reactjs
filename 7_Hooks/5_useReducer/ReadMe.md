# All About useReducer

```jsx
const [ state, dispatch ] = useReducer(reducer, initialState)
```
For those of you who use Redux, useReducer will probably be familiar.

useReducer takes in two arguments — a reducer and an initial state.

A reducer is a function that you can define that takes in the current state and an **action**. The action has a type, and the reducer uses a switch statement to determine which block to execute based on the type.

When it finds the correct block, it returns the state but with the modifications you define depending on the type. We can pass this reducer into useReducer, and then use this hook like this:
useReducer is normally used when you have to manage complex states.

useReducer is the best solution in React for handling complex state interactions so let’s look at how we can convert a component from useState to useReducer.

useReducer is normally used when you have to manage complex states.

```jsx
import React, { useReducer } from 'react'
const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}
export default function CounterReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
    </>
  );
}

```
### [Buy me a Book](https://www.buymeacoffee.com/praveenoruganti)

