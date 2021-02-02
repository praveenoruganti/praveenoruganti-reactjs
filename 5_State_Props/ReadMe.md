# State and Props

## What are props?

- Props is the shorthand for Properties in React.
- They are read only components which must be kept pure i.e. immutable.
- They are always passed down from the parent to the child components throughout the application.
- A child component can never send a prop back to the parent component.
- This help in maintaining the unidirectional data flow and are generally used to render the dynamically generated data.

**How do you pass data with props?**

Here is an example of how data can be passed by using props:

```jsx
const Person = (props) => {
  return (
    <h3>
      Name: {props.name} | Company: {props.company}
    </h3>
  );
};

const App = () => {
  return (
    <div>
      <Person name="Praveen" company="CTS" />
      <Person name="Kiran" company="HCL" />
      <Person name="Vipin" company="Wipro" />
    </div>
  );
};
```

Firstly, we need to define some data for Person Component in App Component and access with **prop** attributes in Person Component.

```jsx
<Person name="Praveen" company="CTS" />
```

**name and company** is a defined props here and contains text data. Then we can pass data with props like we're giving an argument to a function:

```jsx
const Person = (props) => {
  // statements
};
```

And finally, we use dot notation to access the prop data and render it:

```jsx
return (
  <h3>
    Name: {props.name} | Company: {props.company}
  </h3>
);
```

You can also check the [demo](https://praveenorugantitech.github.io/praveenorugantitech-reactjs-course/5_State_Props/Demo/prop.html){:target="\_blank"}

In Class Component, we need to use **this.props** instead of **props** as props is reserved keyword refers to the class.

Lets convert the above example from Functional component to Class Component,

```jsx
class Person extends React.Component {
  render() {
    return (
      <h3>
        Name: {this.props.name} | Company: {this.props.company}
      </h3>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Person name="Praveen" company="CTS" />
        <Person name="Kiran" company="HCL" />
        <Person name="Vipin" company="Wipro" />
      </div>
    );
  }
}
```

## What is state?

React has another special built-in object called state, which allows components to create and manage their own data. So unlike props, components cannot pass data with state, but they can create and manage it internally.
They are mutable unlike the props and create dynamic and interactive components.

Here is an example showing how to use state:

```jsx
class StateTest extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 1,
      name: "Praveen Oruganti",
      designation: "Software Engineer",
    };
  }
  render() {
    return (
      <div>
        Id: {this.state.id} <br />
        Name: {this.state.name} <br />
        Designation: {this.state.designation}
      </div>
    );
  }
}
```

You can also check the [demo](https://praveenorugantitech.github.io/praveenorugantitech-reactjs-course/5_State_Props/Demo/state.html){:target="\_blank"}

**How do you update a component's state?**

State should not be modified directly, but it can be modified with a special method called setState( ).

```jsx
this.state.id = 2; // wrong
this.setState({
  // correct
  id: 2,
});
```

**What happens when state changes?**

OK, why must we use setState()? Why do we even need the state object itself? If you are asking these questions, don't worry – you'll understand state soon :) Let me answer.

A change in the state happens based on user-input, triggering an event, and so on. Also, React components (with state) are rendered based on the data in the state. State holds the initial information.

So when state changes, React gets informed and immediately re-renders the DOM – not the whole DOM, but only the component with the updated state. This is one of the reasons why React is fast.

And how does React get notified? You guessed it: with setState(). The setState() method triggers the re-rendering process for the updated parts. React gets informed, knows which part(s) to change, and does it quickly without re-rendering the whole DOM.

In summary, there are 2 important points we need to pay attention to when using state:

- State shouldn't be modified directly – the setState() should be used.
- State affects the performance of your app, and therefore it shouldn't be used unnecessarily.

**Can I use state in every component?**

Another important question you might ask about state is where exactly we can use it. In the early days, state could only be used in class components, not in functional components.

That's why functional components were also known as stateless components. However, after the introduction of React Hooks, state can now be used both in class and functional components.

If your project is not using React Hooks, then you can only use state in class components.

Lets see an example on usage of **state with events**

```jsx
class App extends React.Component {
  state = {
    /*  Initial State */
    input: "",
    reversedText: "",
  };

  /* handleChange() function to set a new state for input */
  handleChange = (event) => {
    const value = event.target.value;
    this.setState({
      input: value,
    });
  };

  /* handleReverse() function to reverse the input and set that as new state for reversedText */
  handleReverse = (event) => {
    event.preventDefault();
    const text = this.state.input;
    this.setState({
      reversedText: text.split("").reverse().join(""),
    });
  };

  render() {
    return (
      <React.Fragment>
        {/* handleReverse() is called when the form is submitted */}
        <form onSubmit={this.handleReverse}>
          <div>
            {/* Render input entered */}
            <label>Text: {this.state.input}</label>
          </div>
          <div>
            {/* handleChange() is triggered when text is entered */}
            <input
              type="text"
              value={this.state.input}
              onChange={this.handleChange}
              placeholder="Enter a text"
            />
          </div>
          <div>
            <button>Reverse Text</button>
          </div>
        </form>
        {/* Render reversed text */}
        <p>Reversed Text: {this.state.reversedText}</p>
      </React.Fragment>
    );
  }
}
```

You can also check the [demo](https://praveenorugantitech.github.io/praveenorugantitech-reactjs-course/5_State_Props/Demo/state_event.html){:target="\_blank"}

## What are the differences between props and state?

- Components receive data from outside with props, whereas they can create and manage their own data with state.
- Props are used to pass data, whereas state is for managing data.
- Data from props is read-only, and cannot be modified by a component that is receiving it from outside.
- State data can be modified by its own component, but is private (cannot be accessed from outside).
- Props can only be passed from parent component to child (unidirectional flow).
- Modifying state should happen with the setState() method.
