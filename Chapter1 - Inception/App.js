/* const root = document.getElementById("root");
const heading = document.createElement("h1");

heading.innerHTML = `Welcome to namaste react 🚀`;

root.appendChild(heading); */

const heading = React.createElement("div", {className: "container"}, React.createElement("h1",{},"Welcome to namaste react 🚀"));

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);

