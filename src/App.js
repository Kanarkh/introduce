import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Test from "./routes/index";
import "./App.css";
import "./styles/mains.scss"
function App() {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Test} />
    </HashRouter>
  );
}

export default App;
