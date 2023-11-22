import React, { useState } from 'react';
import * as Yup from 'yup'; // Using Yup for validation
import { Formik, Form, Field, ErrorMessage } from 'formik';

const Login = () => {
  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string()
      .required('Password is required')
      .min(8, 'Password must be at least 8 characters'),
  });

  const handleSubmit = (values) => {
    // Perform login action (e.g., API call) with values.email and values.password
    console.log('Form submitted:', values);
  };

  return (
    <div>
      <h2>Login Page</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <div>
              <label>Email:</label>
              <Field type="text" name="email" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>
            <div>
              <label>Password:</label>
              <Field type="password" name="password" />
              <ErrorMessage name="password" component="div" className="error" />
            </div>
            <button type="submit">Login</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
