import React from "react";
import { ReactDOM } from "react-dom/client";

import { AnotherHello, HelloWorld } from "./another.js";
const App = () => {
  {
    return React.createElement(
      "h1",
      { style: { color: "red" } },
      "This is a fokira React App Added something new",
      HelloWorld(),
      AnotherHello()
    );
  }
};

// const HelloWorld = () => {
//   return <h1>Hwllo world</h1>;
// };

// const APP = () => {
//   return (
//     <React.Fragment>
//       <div>This is a fokira react app</div>;
//       <HelloWorld />;
//     </React.Fragment>
//   );
// };

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(React.createElement(App));
