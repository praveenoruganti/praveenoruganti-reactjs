# All About React JS Hooks

Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.

```jsx
import React,{useState} from 'react'

export default function SampleCountHook() {
    // Declare a new state variable, which we'll call as count
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

This example renders a counter. When you click the button, it increments the value.

Here, useState is a Hook (we'll talk about what this means in a moment). We call it inside a function component to add some local state to it. React will preserve this state between re-renders. useState returns a pair: the current state value and a function that lets you update it. You can call this function from an event handler or somewhere else. It's similar to this.setState in a class, except it doesn't merge the old and new state together. (We’ll show an example comparing useState to this.state in Using the State Hook.)

The only argument to useState is the initial state. In the example above, it is 0 because our counter starts from zero. Note that unlike this.state, the state here doesn’t have to be an object — although it can be if you want. The initial state argument is only used during the first render.

**Declaring multiple state variables**

You can use the State Hook more than once in a single component:

```jsx
function ExampleWithManyStates() {
    // Declare multiple state variables!
    const [age, setAge] = useState(42);
    const [fruit, setFruit] = useState('banana');
    const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);
    // ...
}

```
## What is a Hook?

Hooks are functions that let you **hook into** React state and lifecycle features from function components. Hooks don't work inside classes — they let you use React without classes. (We don't recommend rewriting your existing components overnight but you can start using Hooks in the new ones if you'd like.)

Hooks are JavaScript functions, but they have two additional rules:

- Only call Hooks at the top level. Don’t try to call Hooks inside loops, conditions, or nested functions.
- Only call Hooks from React function components. Don’t try to call Hooks from regular JavaScript functions.

React provides a few built-in Hooks like useState. You can also create your own Hooks to reuse stateful behavior between different components. We'll look at the built-in Hooks first.

Here with the different types of React Hooks.

- [useState](https://praveenoruganti.github.io/praveenoruganti-reactjs/7_Hooks/1_useState)
- [useEffect](https://praveenoruganti.github.io/praveenoruganti-reactjs/7_Hooks/2_useEffect)
- [useContext](https://praveenoruganti.github.io/praveenoruganti-reactjs/7_Hooks/3_useContext)
- [useRef](https://praveenoruganti.github.io/praveenoruganti-reactjs/7_Hooks/4_useRef)
- [useReducer](https://praveenoruganti.github.io/praveenoruganti-reactjs/7_Hooks/5_useReducer)
- [useMemo and useCallback](https://praveenoruganti.github.io/praveenoruganti-reactjs/7_Hooks/6_useMemo_useCallback)
- [Custom Hook](https://praveenoruganti.github.io/praveenoruganti-reactjs/7_Hooks/7_Custom_Hook)

## React Component Lifecycle methods in Hooks

![screenshot of the app](https://raw.githubusercontent.com/praveenoruganti/praveenoruganti-reactjs/master/7_Hooks/images/lifecycle.jpg)


### [Buy me a Book](https://www.buymeacoffee.com/praveenoruganti)
