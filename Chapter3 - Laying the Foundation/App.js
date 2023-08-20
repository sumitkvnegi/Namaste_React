import React from "react";
import ReactDOM from "react-dom/client";
import Search from "./search.png";
import User from "./user.png";
import Logo from "./logo.png";

/* ********************************* */

// Create a Nested header Element using React.createElement(h1,h2,h3 inside a div with class "title")

const header = React.createElement(
  "div",
  {
    className: "Title",
    key: "title",
  },
  [
    React.createElement(
      "h1",
      {
        key: "h1",
      },
      "This is h1 Tag"
    ),
    React.createElement(
      "h2",
      {
        key: "h2",
      },
      "This is h2 Tag"
    ),
    React.createElement(
      "h3",
      {
        key: "h3",
      },
      "This is h3 Tag"
    ),
  ]
);

// Create the same element using JSX

const headerJSX = (
  <div className="Title" key="title">
    <h1 key="h1">This is h1 tag</h1>
    <h2 key="h2">This is h2 tag</h2>
    <h3 key="h3">This is h3 tag</h3>
  </div>
);

// Create a functional component of the same with JSX

const Header = () => {
  return (
    <div className="Title" key="title">
      <h1 key="h1">This is h1 tag</h1>
      <h2 key="h2">This is h2 tag</h2>
      <h3 key="h3">This is h3 tag</h3>
    </div>
  );
};

// Pass attribute into the tag in JSX

const Header2 = () => {
  return (
    <div className="Title" key="title">
      <h1 style={{ color: "blue" }} key="h1">
        This is h1 tag
      </h1>
      <h2 style={{ color: "palevioletred" }} key="h2">
        This is h2 tag
      </h2>
      <h3 style={{ color: "green" }} key="h3">
        This is h3 tag
      </h3>
    </div>
  );
};

// Composition of Component (Add a component inside another)

const AnotherComponent = function () {
  return <h2> This is Another Component</h2>;
};

const Header3 = () => {
  return (
    <div className="Title" key="title">
      <h1 style={{ color: "blue" }} key="h1">
        This is h1 tag
      </h1>
      <h2 style={{ color: "palevioletred" }} key="h2">
        This is h2 tag
      </h2>
      <AnotherComponent />
      <h3 style={{ color: "green" }} key="h3">
        This is h3 tag
      </h3>
    </div>
  );
};

/* ********************************* */

// Create a Header Component from scratch using Functional Component with JSX

/* 
    Add a Logo on Left
    Add a search bar in middle
    Add User icon on right
    Add CSS to make it look nice
*/

const headerStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: "#fefefe",
  padding: "8px 16px",
  boxShadow: "3px 3px 8px #999",
};

const logo = {
  width: "30px",
  aspectRatio: "1",
};

const search = {
  width: "15px",
  height: "15px",
  cursor: "pointer",
};

const user = {
  width: "20px",
  cursor: "pointer",
};

const HeaderComponent = () => {
  return (
    <div style={headerStyle}>
      <img src={Logo} alt="logo" style={logo} />
      <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
        <input
          type="text"
          style={{
            padding: "8px",
            border: "1px solid #999",
            borderRadius: "4px",
            boxShadow: "inset 1px 1px 2px #999",
          }}
        />
        <img src={Search} alt="search" style={search} />
      </div>
      <img src={User} alt="user" style={user} />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent />);

// * JSX => React.createElement => React Element (Object) => ReactDOM.render => HTML Element

// * JSX is html like or xml like syntax

// * this whole code => babel (transpile to javascript) => javascript engine
