import React$1 from 'react';
import { ReactDOM } from 'react-dom/client';

const HelloWorld = () => {
  {
    return React.createElement("p", {}, "Wollo world");
  }
};

const AnotherHello = () => {
  {
    return React.createElement("p", {}, "Another Hello");
  }
};

const App = () => {
  {
    return React$1.createElement(
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

root.render(React$1.createElement(App));
