# All About useRef

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

### [Buy me a Coffee](http://bit.ly/2WryDT8)
