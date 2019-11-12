import React from "react";
import { Link, Route } from "react-router-dom";

// COMPONENTS

import AuthButton from "./components/authButton";
import RegistrationForm from "./components/RegistrationForm";

function App() {
  return (
    <div className="App">
      <Link to="/auth/register">Register</Link>
      <Route
        exact
        path="/"
        render={props => {
          return <AuthButton {...props} text={"Login"} />;
        }}
      />
      <Route
        exact
        path="/"
        render={props => {
          return <AuthButton {...props} text={"Logout"} />;
        }}
      />

      <Route path="/auth/register" component={RegistrationForm} />
    </div>
  );
}

export default App;
