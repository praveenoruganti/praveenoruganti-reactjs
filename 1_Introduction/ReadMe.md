# React JS Introduction

React JS is a JavaScript library created by Facebook and it generally uses jsx(js and html) for writing the code and uses Virtual DOM concept.

Initial release of React JS happened on May 29, 2013.

React JS is an Open Sourced JavaScript library for building fast and interactive User Interfaces. It lets you compose complex UIs from small and isolated pieces of code called **components**.

## Why React JS is so popular?
![screenshot of the app](https://raw.githubusercontent.com/praveenorugantitech/praveenorugantitech-reactjs/master/1_Introduction/images/reactjs.png)

## Single Page Applications(SPAs)
A single page application is an app that works inside a browser and does not require page load during use.

SPAs are all about serving an outstanding user experience(UX) by trying to imitate a natural environment in the browser - no page reloads, no extra wait time.It is just one HTML page that you visit which then loads all other content using JavaScript.

For example: Gmail, Facebook, Instagram, Trello.

## Multiple Page Applications(MPAs)
Multi-page applications work in a **traditional** way. Every change like, display the data or submit the data or submit data back to server, sends a request to the server to render a new page in the browser.

Whenever a user navigates from one page to another, a request is sent to the server to send a new HTML file for that URL. The server returns a file and then HTML file is loaded in the browser.

For example: Dribble, Harvard's Official site.
## Prerequisites for learning React JS

1. Knowledge of HTML & CSS
2. Knowledge of JavaScript and ES6 standards(https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript)
3. Some knowledge about the DOM
4. Some knowledge about Node & npm (and installation)

## React JS Roadmap

Lets see the React JS roadmap and go deeper into the concepts.

![screenshot of the app](https://raw.githubusercontent.com/praveenorugantitech/praveenorugantitech-reactjs/master/1_Introduction/images/roadmap.jpg)

## Aspects of React JS

1. Virtual DOM
2. Data binding
3. Server side rendering

## What is meant by Virtual DOM?

Lets see how exactly renders the webpage

![screenshot of the app](https://raw.githubusercontent.com/praveenorugantitech/praveenorugantitech-reactjs/master/1_Introduction/images/virtualdom.png)

Rendering engines which is responsible for displaying or rendering the webpage on the browser screen parses the HTML page to create DOM.

If you see above screenshot, updating a Real DOM does not involves just updating the DOM but, it involves a lot of other process.

Also, each of the above steps runs for each update of the real DOM i.e. if we update the Real DOM 10 times each of the above step will repeat 10 times. This is why updating Real DOM is slow.

To solve the above problem, Virtual DOM came into the picture.

Virtual DOM is in-memory representation of Real DOM. It is lightweight JavaScript object which is copy of Real DOM.

Like an actual DOM, Virtual DOM is a node tree that lists the elements and their attributes and content as Objects and their properties.

Model gives data to view, if the DOM is empty then React will create a DOM for it.

![screenshot of the app](https://raw.githubusercontent.com/praveenorugantitech/praveenorugantitech-reactjs/master/1_Introduction/images/virtualdom1.png)

Updating virtual DOM in React JS is faster because React JS uses
- Efficient diff algorithm
- Batched update operations
- Efficient update of sub tree only
- Uses observable instead of dirty checking to detect change

## What is data binding?
React JS follows unidirectional data flow or one way data binding.
Throughout the application the data flows in a single direction which gives you better control over it.

![screenshot of the app](https://raw.githubusercontent.com/praveenorugantitech/praveenorugantitech-reactjs/master/1_Introduction/images/databinding.png)

## What is Server side rendering?
Server side rendering allows you to pre-render the initial state of react components at the server side only.

## React JS installation

We can use online editors like
- https://codesandbox.io/
- https://jsfiddle.net/reactjs/
- https://codepen.io/

Now let's see what are all the dependencies needed for React JS installation in your environment.
- Download and install npm : [https://nodejs.org/en/](https://nodejs.org/en/)
- Download and install editor [https://code.visualstudio.com/docs/?dv=win](https://code.visualstudio.com/docs/?dv=win)

## Main components to build a React JS application are
- webpack.config.js -> contains information about the dependencies and the files from where browser start rendering form.
- HTML file -> contains the html template which is used by browser to render the elements on the webpage.
- JSX file -> contains description off what all components we want to display on our webpage and how they will behave.

## Create React App
For creating application, use the below command

**npx create-react-app praveenorugantitech-reactjs-samples**

The create-react-app tool installs all the libraries and packages required to build a React Application. It creates a default configuration for our react project. It also add some starter files in the newly created application.

**What is npm and npx?**

npm is the node package manager for JavaScript. It helps you manage all the 3rd party packages and libraries that you will be installing for your application. It installed automatically when you install Node JS. You can check out my [blog](https://praveenorugantitech.blogspot.com/2019/11/npm-basics.html) for more information on npm.

npx is a node package runner. It is used to download and run a package temporarily.

For running the application, use the below command

**npm start**


**React Boilerplate**

Let's see the React boilerplate, which has been created by create-react-app. Whenever you create a new project, you run create-react-app and name of the project.

In the following React boilerplate, there are three folders: node_modules, public and src. In addition, there are .gitignore, README.md , package.json and yarn.lock. Some of you, instead of yarn.lock, you may have package-lock.json.

It is good to know these folders and files.

- node_modules - stores all the necessary node packages of the React applications.

- Public

  - index.html - the only HTML file we have in the entire application

  - favicon.ico - an icon file
  - manifest.json - is used to make the application a progressive web app
  - other images - open graph images(open graph images are images which are visible when a link share on social media)
  - robots.txt - information, if the website allows web scraping

- src

  - App.css, index.css - are different CSS files
  - index.js - a file which allows to connect all the components with index.html
  - App.js - A file where we usually import most of the presentational components
  - serviceWorker.js: is used to add progressive web app features
  - setupTests.js - to write testing cases

- package.json- List of packages the applications uses
- .gitignore - React boilerplate comes with git initiated, and the .gitingore allows files and folders not to be pushed to GitHub
- README.md - Markdown file to write documentation
- yarn.lock or package-lock.json - a means to lock the version of the package


Now run the application using  **npm start** and you will see the below in browser.

![screenshot of the app](https://raw.githubusercontent.com/praveenorugantitech/praveenorugantitech-reactjs/master/1_Introduction/images/reactjs1.png)


Now lets remove all the files, which we do not need at the moment, and leave only the files we need right now.

I have created a sample react app and you can check out the code in [repo](https://github.com/praveenorugantitech/praveenorugantitech-reactjs/tree/master/1_Introduction/Demo/praveenorugantitech-reactjs-samples).






