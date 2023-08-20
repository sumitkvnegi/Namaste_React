import React from 'react';
import ReactDOM from 'react-dom/client';

const heading = React.createElement("div", {}, React.createElement("h1",{className: "heading"},"hello world 🚀"));

// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing react element inside root
root.render(heading);