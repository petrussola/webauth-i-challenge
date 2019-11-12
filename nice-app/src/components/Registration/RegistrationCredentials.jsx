import React from "react";
import { Link } from "react-router-dom";

export default function RegistrationCredentials(props) {
  return (
    <div>
      You have succesfully registered. Please{" "}
      <Link to="/auth/login">Log in</Link>
    </div>
  );
}
