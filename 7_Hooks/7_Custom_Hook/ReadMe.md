# All About Custom Hook

There might be instances where you have been using the same repetitive and redundant stateful logic inside multiple components. We were able to handle this situation by relying on Render props and Higher Order Components. But with hooks, we can do it in a much simpler and cleaner way, Thanks to the Custom hooks.

**Okay, But what are they?**
These are normal javascript functions which can use other hooks inside of it and contain a common stateful logic that can be reused within multiple components. These functions are prefixed with the word use.

Let's say you have 2 functions (components) which implement some common logic. You can create a third function with this common logic and implement it in the other two functions. After all, hooks are just functions.

**Custom hooks means fewer keystrokes and less repetitive code.**

For Example,

**useDocumentTitle hook**
Say we have to build a component which on every click increases the count and updates the title of the page with the count value using hooks.

```jsx
import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  },[count]);

  return (
    <div>
      <h3>{count}</h3>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

```

It works well. I always prefer creating the component first and then extracting out the stateful logic from that function(component) and then putting it into another function(custom hook) and then just doing some refactoring so the component works well with our hook.

Let's take the useEffect section out of the component and put it inside our new function useDocumentTitle.

```jsx
import React, { useState, useEffect } from 'react';

const useDocumentTitle = title =>{
    useEffect(
        () =>{
            document.title = title;
        },
        [title]
    );
};

function Counter() {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const title = `You clicked ${count} times`;
  useDocumentTitle(title);
  return (
    <div>
      <h3>{count}</h3>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

```




