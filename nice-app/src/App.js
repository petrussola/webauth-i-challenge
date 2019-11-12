import React, { useState } from "react";
import { Link, Route } from "react-router-dom";
import axios from "axios";

// COMPONENTS

import AuthButton from "./components/authButton";
import RegistrationPage from "./components/Registration/RegistrationPage";

function App() {
  // slices of state

  const [regConfirmation, setRegConfirmation] = useState(false);

  // form handlers

  function onRegisterHandle(formValues) {
    axios
      .post("http://localhost:4000/api/auth/register", formValues)
      .then(data => {
        setRegConfirmation(true);
      })
      .catch(error => {
        debugger;
        console.log(error);
      });
  }

  return (
    <div className="App">
      <Link to="/auth/register">Register</Link>
      <Link to="/auth/Login">Login</Link>
      <Link to="#">Logout</Link>
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

      <Route
        exact path="/auth/register"
        render={props => {
          return (
            <RegistrationPage
              {...props}
              onRegisterHandle={onRegisterHandle}
              regConfirmation={regConfirmation}
            />
          );
        }}
      />
    </div>
  );
}

export default App;
