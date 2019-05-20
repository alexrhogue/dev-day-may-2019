import React from "react";
import { string } from "prop-types";

const App = ({ name }) => <div>Hello {name || "World"}</div>;

App.propTypes = {
  name: string
};

export default App;
