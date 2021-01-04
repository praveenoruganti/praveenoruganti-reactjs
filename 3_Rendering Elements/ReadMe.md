# Rendering Elements
Elements are the smallest building blocks of React apps.

An element describes what you want to see on the screen:
```jsx
const element = <h1>Hello, world</h1>;
```
Unlike browser DOM elements, React elements are plain objects, and are cheap to create. React DOM takes care of updating the DOM to match the React elements.

## Rendering an Element into the DOM
Lets say there is a <div> somewhere in your HTML file:
```HTML
<div id="root"></div>
```
We call this a **root** DOM node because everything inside it will be managed by React DOM.

Applications built with just React usually have a single root DOM node. If you are integrating React into an existing app, you may have as many isolated root DOM nodes as you like.

To render a React element into a root DOM node, pass both to ReactDOM.render():

```jsx
const element = <h1>Hello, world</h1>;
ReactDOM.render(element, document.getElementById('root'));
```
It displays **Hello, world** on the page.

## Updating Rendering Element
React elements are immutable. Once you create an element, you can’t change its children or attributes. An element is like a single frame in a movie: it represents the UI at a certain point in time.

With our knowledge so far, the only way to update the UI is to create a new element, and pass it to ReactDOM.render().

Consider this ticking clock example:

```jsx
function tick() {
    const element = (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
    ReactDOM.render(element, document.getElementById('root'));
}
setInterval(tick, 1000);
```
It calls ReactDOM.render() every second from a setInterval() callback.

In practice, most React apps only call ReactDOM.render() once.

## React Only Updates What's Necessary
React DOM compares the element and its children to the previous one, and only applies the DOM updates necessary to bring the DOM to the desired state.

Even though we create an element describing the whole UI tree on every tick, only the text node whose contents have changed gets updated by React DOM.

In our experience, thinking about how the UI should look at any given moment, rather than how to change it over time, eliminates a whole class of bugs.


### [Buy me a Book](https://bit.ly/388sUbE)


