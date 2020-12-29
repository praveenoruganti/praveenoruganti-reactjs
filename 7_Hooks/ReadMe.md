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

## useEffect

- By using this, you tell React that your component needs to do something after render.
- declare count state variable, then tell React to use an effect, pass a function to the useEffect. function we pass is our effect. Inside our effect set the document.title.

For example,
```jsx
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

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

Generally when we want to fetch data from backend api we do that in useEffect for example,

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

## useContext

![screenshot of the app](https://raw.githubusercontent.com/praveenoruganti/praveenoruganti-reactjs/master/7_Hooks/images/prop_drilling.jpg)

As mentioned in the above screenshot, To avoid prop drilling we need to make use of Context API in class components and useContext in functional components.

Now lets see useContext.

- Accepts a context object(the value returned from createContext).
- Returns the current context value for that context.
- current context value is determined by value prop of the nearest <MyContext.Provider> above the calling component in the tree.

For example,

```jsx
const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};

const ThemeContext = React.createContext(themes.light);

function App() {
  return (
    <ThemeContext.Provider value={themes.dark}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar(props) {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      I am styled by theme context!
    </button>
  );
}
```

You can also check the [multi step form](https://github.com/praveenoruganti/praveenoruganti-reactjs/blob/master/0_Projects/praveenoruganti-multi-step-form/src/StepContext.js) example for reference.


## useRef

```jsx
const refContainer = useRef(initialValue);
```

- useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue).
- The returned object will persist for the full lifetime of the component.

Keep in mind that useRef doesn't notify you when its content changes. Mutating the .current property doesn't cause a re-render. If you want to run some code when React attaches or detaches a ref to a DOM node, you may want to use a callback ref instead.

A common use case is to access a child imperatively:

```jsx
function TextInputWithFocusButton() {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    // `current` points to the mounted text input element
    inputEl.current.focus();
  };
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}

```
As you can see in the code above we use the ref property on the input element to set the current value of inputRef to the input element. Now when we click the button it will call focusInput which uses the current value of the inputRef variable to set the focus on the input element.

While most use cases for refs lie with referencing DOM elements, refs can also be used for any form of storage that is persisted across component renders. A very common use case for this would be storing the previous value of a state variable.

```jsx
function Component() {
    const [name, setName] = useState('Kyle')
    const previousName = useRef(null)
    useEffect(() => {
        previousName.current = name
    }, [name])
    return (
        <>
            <input value={name} onChange={e => setName(e.target.value)} />
            <div>{previousName.current} => {name}</div>
        </>
    )
}

```

The above code will update the previousName ref every time the name changes so that it always has the previous value of the name variable stored in it. Refs in React are incredibly useful for accessing and manipulating DOM elements directly. Refs are also amazing at persisting data between renders which is makes it possible to store persisted component data without causing a re-render when it is changed.

## useReducer

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

## useMemo and useCallback

Let's see useMemo hook and the useCallback hook since they are both crucial for creating performant React applications through the use of memoization.

**What Is Memoization?**
Memoization is essentially just caching. Imagine a complex function that is slow to run which takes a as an argument. In order to speed up this function, you can cache the results of running the function so that when the function is run with the same inputs you can use the cached value instead of recomputing the value. This would look something like this.

```jsx
const cache = {}

function slow(a) {
    if (cache[a]) return cache[a]

    const result = /* Complex logic */
        cache[a] = result
    return result
}

```

This is a very common problem in React since all the component logic is re-computed every time the component renders and could cause drastic slowdowns if the component logic is slow to compute. Because of this, many React applications use memoization libraries or custom code to make memoization possible, but with the introduction of hooks, React has built in its own memoization system which is incredibly easy to use.

**useMemo**
The most basic form of memoization in React is the useMemo hook.

The syntax for this hook is actually the exact same as useEffect since they both work in a similar way.

The first argument of useMemo is a function that does the complex calculation you want to memoize.

The second argument is an array of all dependencies for that memoization.

```jsx
const result = useMemo(() => {
    return slowFunction(a)
}, [a])
```

As you can see in the above example, we want to memoize slowFunction which depends on a. To do this, all we did was wrap the slowFunction in our useMemo function and used the argument a in the array of dependencies.

This code essentially does the exact same thing as our previous code for memoization, since as long as a stays the same the slowFunction will not be re-run and instead the cached value will be used.

This is the most common way useMemo is used, but there is a second common use case which is referential equality.

**Referential Equality**

If you are unfamiliar with referential equality it essentially defines whether or not the references of two values are the same. For example **{} === {}** is false because it is checking referential equality. While both of the objects are empty, they reference different places in memory where the object is stored. Because of this, they are not referentially equal and this comparison returns **false**.

This referential equality is important when it comes to dependency arrays, for example in useEffect.

```jsx
function Component({ param1, param2 }) {
    const params = { param1, param2, param3: 5 }

    useEffect(() => {
        callApi(params)
    }, [params])
}

```

At first glance it may seem this useEffect works properly, but since the params object is created as a new object each render this is actually going to cause the effect to run every render since the reference of params changes each render. useMemo can fix this, though.

```jsx
function Component({ param1, param2 }) {
    const params = useMemo(() => {
        return { param1, param2, param3: 5 }
    }, [param1, param2])

    useEffect(() => {
        callApi(params)
    }, [params])
}

```

Now if param1 and param2 do not change the params variable will be set to the cached version of params which means the reference for params will only change if param1, or param2 change.

This referential equality is really useful when comparing objects in dependency arrays, but if you need to use a function in a dependency array you can use the **useCallback** hook.

**useCallback**

**useCallback** works nearly identically to **useMemo** since it will cache a result based on an array of dependencies, but **useCallback** is used specifically for caching functions instead of caching values.

```jsx
const handleReset = useCallback(() => {
    return doSomething(a, b)
}, [a, b])
```

This syntax may look exactly the same as **useMemo**, but the main difference is that **useMemo** will call the function passed to it whenever its dependencies change and will return the value of that function call.

**useCallback** on the other hand will not call the function passed to it and instead will return a new version of the function passed to it whenever the dependencies change.

This means that as long as the dependencies do not change then useCallback will return the same function as before which maintains referential equality.

In order to further understand the differences between **useCallback** and **useMemo** here is a quick example where both will return the same value.

```jsx
useCallback(() => {
    return a + b
}, [a, b])

useMemo(() => {
    return () => a + b
}, [a, b])

```
As you can see **useCallback** will return the function passed to it, while **useMemo** is returning the result of the function passed to it.

**Referential Equality**

Just like with useMemo, useCallback is used to maintain referential equality.

```jsx
function Parent() {
    const [items, setItems] = useState([])
    const handleLoad = (res) => setItems(res)

    return <Child onLoad={handleLoad} />
}

function Child({ onLoad }) {
    useEffect(() => {
        callApi(onLoad)
    }, [onLoad])
}


```

In the above example the **handleLoad** function is re-created every time the **Parent** component is rendered. This means that the **Child** component's **useEffect** will re-run ever render since the **onLoad** function has a different referential equality each render. To fix this we need to wrap the **handleLoad** in a **useCallback**.

```jsx
function Parent() {
    const [items, setItems] = useState([])
    const handleLoad = useCallback((res) => setItems(res), [])

    return <Child onLoad={handleLoad} />
}

function Child({ onLoad }) {
    useEffect(() => {
        callApi(onLoad)
    }, [onLoad])
}

```

Now the **handleLoad** function will never change, thus the useEffect in the Child component will not be called on each re-render.

## React Component Lifecycle methods in Hooks

![screenshot of the app](https://raw.githubusercontent.com/praveenoruganti/praveenoruganti-reactjs/master/7_Hooks/images/lifecycle.jpg)

### [Buy me a Coffee](http://bit.ly/2WryDT8)
