import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routers from "./Routes";

function App() {
  return (
    <Router>
      <div className="App">
        <Routers />
      </div>
    </Router>
  );
}

export default App;
