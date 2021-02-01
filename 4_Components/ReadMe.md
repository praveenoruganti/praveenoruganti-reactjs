# React JS Components

Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.

A component is a JavaScript class or function that optionally accepts some data and returns a React elements that describes how a section of the UI should appear.

Components can be:

- Functional Component / Presentational Component / Stateless Component / Dumb Component
- Class Component / Container Component/ Statefull Component / Smart Component

## Class Components

- Class components make use of ES6 class and extend the Component class in React.
- Sometimes called **smart** or **stateful** components as they tend to implement logic and state.
- React lifecycle methods can be used inside class components (for example, componentDidMount).
- You pass props down to class components and access them with **this.props**.

You can also use an ES6 class to define a component

```jsx
import React from "react";

class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
export default Welcome;
```

## Function Components

- Function components are basic JavaScript functions. These are typically arrow functions but can also be created with the regular function keyword.
- Sometimes referred to as **dumb** or **stateless** components as they simply accept data and display them in some form; that is they are mainly responsible for rendering UI.
- React lifecycle methods (for example, componentDidMount) cannot be used in function components.
- There is no render method used in functional components.
- These are mainly responsible for UI and are typically presentational only (For example, a Button component).
- Functional components can accept and use props.
- Functional components should be favored if you do not need to make use of React state.

The simplest way to define a component is to write a JavaScript function.

```jsx
import React from "react";

const Greeting = (props) => {
  return <h1>Hello, {props.name}</h1>;
};
export default Greeting;
```

This function is a valid React component because it accepts a single **props** (which stands for properties) object argument with data and returns a React element. We call such components **function components** because they are literally JavaScript functions.

The above two components are equivalent from React's point of view.

**Note**: Always start component names with a capital letter.

React treats components starting with lowercase letters as DOM tags. For example, <div /> represents an HTML div tag, but <Welcome /> represents a component and requires Welcome to be in scope.

## Difference between Functional and Class components

![screenshot of the app](https://raw.githubusercontent.com/praveenorugantitech/praveenorugantitech-reactjs-course/master/4_Components/images/components.PNG)

**Functional components after Hooks Introduction**

![screenshot of the app](https://raw.githubusercontent.com/praveenorugantitech/praveenorugantitech-reactjs-course/master/4_Components/images/components_comparision.PNG)

You can learn more about Hooks in [Hooks](https://praveenorugantitech.github.io/praveenorugantitech-reactjs-course/7_Hooks/)
