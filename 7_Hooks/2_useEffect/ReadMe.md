# All About useEffect

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

### [Buy me a Coffee](http://bit.ly/2WryDT8)
