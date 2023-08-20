## Emmet 👨‍💻

Emmet is a web development tool that helps you write HTML and CSS code more quickly by allowing you to use shorthand expressions that are expanded into full code structures. It's a time-saving tool for web developers, especially when dealing with repetitive tasks or complex code.

## Library Vs Framework ⚖

A **library** is like a toolbox. You pick the tools you need for your project. You control when and how you use them. It's more flexible, and you're in charge of the flow.

A **framework** is like a blueprint. It provides a structure for your project and dictates how things should be done. You follow the framework's rules, and it often includes built-in tools. It's less flexible but can save you time by providing a predefined structure.

## CDN 🌐

CDNs (Content Delivery Networks) are networks of servers that make websites faster by storing and delivering content like images and scripts from servers closer to users. We use CDNs to speed up websites, reduce server load, handle traffic spikes, and improve the overall user experience.

## Why React is known as React? 🤷‍♂️

React is known as "React" because of its fundamental concept: it reacts to changes in data. It's a JavaScript library for building user interfaces, and its core idea is to provide a way to efficiently update and render user interfaces based on changes in application state or data.

React introduces a declarative approach to building UI components. Instead of manually manipulating the DOM (Document Object Model) and updating UI elements when data changes, React allows developers to describe how the UI should look at any given point in time. When the data changes, React "reacts" by efficiently updating only the necessary parts of the UI, which is often referred to as the Virtual DOM.

This approach simplifies UI development, enhances performance, and makes it easier to manage complex UI interactions and state changes. React's name reflects its focus on reactivity, efficient rendering, and managing UI components in response to data changes.

## What is crossorigin in the script tag? 🤔

When React or any other library/framework is hosted on a CDN, the `crossorigin` attribute is used to control how the browser interacts with the resources from that CDN. It helps ensure that the scripts are loaded securely and without causing potential security issues related to cross-origin requests.

## React Vs ReactDOM 💕

**React** : React is the core library for building user interfaces in JavaScript. It provides a way to create reusable UI components, manage component state, and efficiently update the DOM based on changes in data. React focuses on the declarative representation of UI components and how they should look at any given time.

**ReactDOM** : ReactDOM is a specific package within the React ecosystem that deals with the interaction between React and the Document Object Model (DOM). It enables React to render components onto the actual DOM elements in the browser. ReactDOM provides methods for rendering React components into the DOM, updating them, and handling the reconciliation process to efficiently reflect changes in component state.

## react.development.js Vs react.production.js 🗃

#### **react.development.js** :

* **Debugging** : This version of React is intended for development and debugging purposes.
* **Larger Size** : It includes additional warnings, error messages, and debugging tools, making it larger in size compared to the production version.
* **Performance** : The development version includes checks and extra code that can help catch potential errors during development but can impact performance.

#### **react.production.js** :

* **Production Optimized** : This version is optimized for production use.
* **Smaller Size** : It has a smaller file size because it doesn't include the extra debugging checks and messages present in the development version.
* **Performance** : The production version is optimized for performance, making it suitable for use in the final production build of your application.

> When developing a React application, it's common to use the development version during the development and testing phases because it provides more informative error messages and debugging tools, which can be helpful for identifying and fixing issues. However, for the final production build of your application, it's essential to switch to the production version to minimize the file size and optimize performance, as the extra debugging features are not necessary in the production environment, and they may impact the end-user experience negatively due to the larger file size and reduced performance.

## Async Vs Defer 👶

**Async** loads and executes the script while the page continues to load. **Defer** loads the script asynchronously but ensures it's executed after the page is fully parsed.

# Code Explanation :

### React.createElement (Creates an object that we can give it to the render method of ReactDOM)

> `React.createElement` is a fundamental function in React that's used to create virtual representations of UI components in JavaScript. Think of it as a way to describe what a piece of your user interface should look like without directly manipulating the actual HTML.

1. The first argument is the element type, which could be an HTML tag name (like "h1") or a custom React component.
2. The second argument is a set of properties (often referred to as "props") you want to set for the element.
3. The third and any subsequent arguments are the children elements of the current element.

### ReactDOM.createRoot

> `ReactDOM.createRoot` is a method in React used to create a root-level element for rendering React components. It's a more advanced way to render your React application compared to the traditional `ReactDOM.render` method.

> In simple terms, `createRoot` allows you to create a "root" where you can render React components that will automatically handle concurrent rendering, making your application more efficient by breaking updates into smaller chunks.

> Use `ReactDOM.createRoot` when you want to leverage React's concurrent mode for improved performance and responsiveness in your app.
