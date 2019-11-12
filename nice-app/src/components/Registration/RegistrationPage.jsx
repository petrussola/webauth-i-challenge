import React from "react";
import { Link } from "react-router-dom";

import RegistrationForm from "./RegistrationForm";
import RegistrationCredentials from "./RegistrationCredentials";

export default function RegistrationPage(props) {
  const { onRegisterHandle, regConfirmation } = props;
  return (
    <div>
      {!regConfirmation ? (
        <RegistrationForm
          onRegisterHandle={onRegisterHandle}
          regConfirmation={regConfirmation}
        />
      ) : (
        <RegistrationCredentials />
      )}
      <Link to="/">Back to Home Page</Link>
    </div>
  );
}
