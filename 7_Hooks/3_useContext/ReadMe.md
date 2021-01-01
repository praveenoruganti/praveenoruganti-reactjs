# All About useContext

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


