import React from "react";
import "./App.css";

// COMPONENTS

import AuthButton from "./components/authButton";

function App() {
  return <div className="App">
    <AuthButton text={"Login"}/>
    <AuthButton text={"Logout"}/>
  </div>;
}

export default App;
