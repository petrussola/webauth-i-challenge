import React from "react";
import { Formik, Form, Field } from "formik";

const initialValues = {
    username: "",
    password: ""
  };

export default function RegistrationForm({ onRegisterHandle }) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onRegisterHandle}
      component={FormikForm}
    />
  );
}

function FormikForm(props) {
  return (
    <Form>
      <div>
        <label>
          username
          <Field name="username" type="text" placeholder="username" />
        </label>
      </div>
      <div>
        <label>
          password
          <Field name="password" type="password" placeholder="password" />
        </label>
      </div>
      <button type="submit">Register User</button>
    </Form>
  );
}
