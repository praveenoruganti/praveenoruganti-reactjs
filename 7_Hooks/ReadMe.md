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

## useState

React useState() hook manages the state in functional React components. In class components this.state holds the state, and you invoke the special method this.setState() to update the state.

We define it as follows:

```jsx
const [ someState, updateState ] = useState(initialState)
```
Let's break this down:
- someState: lets you access the current state variable, someState.
- updateState: function that allows you to update the state — whatever you pass into it becomes the new someState.
- initialState: what you want someState to be upon initial render.

**Note**: 
- The state variable is immutable and readonly.
- useState() hook and this.setState() (inside class components) update the state variable and the component output asynchronously.
- Calling the setter function setValue(newValue) of useState() hook (or this.setState() of class components) doesn't exactly update the state, but rather schedules a state update.

## useEffect

useEffect is another hook that handles componentDidUpdate, componentDidMount, and componentWillUnmount all in one call. If you need to fetch data, for example, you could use useEffect hook to do so, as seen below.

```jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const HooksExample = () => {
    const [data, setData] = useState();

    useEffect(() => {
        const fetchGithubData = async (name) => {
            const result = await axios(`https://api.github.com/users/${name}/repos`)
            setData(result.data)
        }
        fetchGithubData('praveenoruganti')
    }, [data])

    return (
        <div className="App">
            {data && (
                data.map(item => <p>{item.name}</p>)
            )}
        </div>
    )
}

export default HooksExample;

```
Taking a look at useEffect we see:

- **First argument**: A function. Inside of it, we fetch our data using an async function and then set data when we get results.
- **Second argument**: An array containing data. This defines when the component updates. As I mentioned before, useEffect runs when componentDidMount, componentWillUnmount, and componentDidUpdate would normally run. Inside the first argument, we’ve set some state, which would traditionally cause componentDidUpdate to run. As a result, useEffect would run again if we did not have this array. Now, useEffect will run on componentDidMount, componentWillUnmount, and if data was updated, componentDidUpdate. **This argument can be empty**— you can choose to pass in an empty array. In this case, only componentDidMount and componentWillUnmount will ever fire. But, you do have to specify this argument if you set some state inside of it.

**Points to be noted**
- Runs on every update
  ```jsx
    useEffect(() =>{
    });
  ```
- Runs ONCE after initial rendering
  ```jsx
    useEffect(() =>{
    },[]);
  ```
- Runs ONCE after initial rendering and after every rendering ONLY if dependency changes.
  ```jsx
    useEffect(() =>{
    },[Dependencies]);
  ```

### [Buy me a Coffee](http://bit.ly/2WryDT8)
