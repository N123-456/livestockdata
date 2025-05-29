import React from 'react'
import {
  Anchor,
  Button,
  Checkbox,
  Paper,
  PasswordInput,
  Text,
  TextInput,
  Title,
} from '@mantine/core';
import classes from './signin.module.css';
import { FormikErrors, useFormik } from 'formik';
interface FormValues {
  username: string;
  password: string;
}
const styles = {
  container: {
    maxWidth: "320px",
    margin: "50px auto",
    fontFamily: "'Poppins', sans-serif",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
    background: "#f7f7f7",
  } as React.CSSProperties,
  label: {
    display: "block",
    marginBottom: "6px",
    fontWeight: 600,
    color: "#333",
  } as React.CSSProperties,
  input: {
    width: "100%",
    padding: "8px 12px",
    marginBottom: "12px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    fontSize: "1rem",
    boxSizing: "border-box" as "border-box",
  } as React.CSSProperties,
  error: {
    color: "red",
    fontSize: "0.85rem",
    marginBottom: "12px",
  } as React.CSSProperties,
  button: {
    width: "100%",
    padding: "10px",
    background: "#667eea",
    color: "white",
    border: "none",
    borderRadius: "6px",
    fontWeight: 600,
    cursor: "pointer",
    fontSize: "1rem",
  } as React.CSSProperties,
};
const initialValues: FormValues = {
  username: "",
  password: "",
};
function validate(values: FormValues) {
  const errors: FormikErrors<FormValues> = {};
  if (!values.username) {
    errors.username = "Required";
  }
  if (!values.password) {
    errors.password = "Required";
  }
  return errors;
}
const Login = () => {
  const formik = useFormik({
    initialValues,
    validate,
    onSubmit: (values) => {
      alert(`Logging in with\nUsername: ${values.username}\nPassword: ${values.password}`);
      // Here you could add login logic, store in localStorage, redirect, etc.
    },
  });
  return (
    <div style={styles.container}>
      <h2>Login</h2>
      <form onSubmit={formik.handleSubmit} noValidate>
        <label htmlFor="username" style={styles.label}>
          Username
        </label>
        <input
          id="username"
          name="username"
          type="text"
          style={styles.input}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.username}
          autoComplete="username"
        />
        {formik.touched.username && formik.errors.username ? (
          <div style={styles.error}>{formik.errors.username}</div>
        ) : null}
        <label htmlFor="password" style={styles.label}>
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          style={styles.input}
              onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.username}
          autoComplete="username"
        />
        {formik.touched.username && formik.errors.username ? (
          <div style={styles.error}>{formik.errors.username}</div>
        ) : null}
        <label htmlFor="password" style={styles.label}>
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          style={styles.input}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          autoComplete="current-password"
        />
        {formik.touched.password && formik.errors.password ? (
          <div style={styles.error}>{formik.errors.password}</div>
        ) : null}
        <button type="submit" style={styles.button}>
          Log In
        </button>
      </form>
    </div>
  )
}

export default Login

