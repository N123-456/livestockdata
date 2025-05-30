import React from "react";
import {
  Anchor,
  Button,
  Checkbox,
  Paper,
  PasswordInput,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import classes from "./signin.module.css";
import { Formik, FormikErrors, useFormik,Form } from "formik";
import * as Yup from "yup";
import { Navigate,useNavigate } from "react-router-dom";
interface FormValues {
  email: string;
  password: string;
}


const SignupSchema = Yup.object().shape({
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});
const Login = () => {
  const navigate = useNavigate();
  return(
    <div className="min-h-screen flex items-center justify-center bg-green-400  p-4">
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Login</h2>
    <Formik
    initialValues={{ email: "", password: "" }}
    validationSchema={SignupSchema}
    onSubmit={(values) => {
      alert(
        `Logging in with\nUsername: ${values.email}\nPassword: ${values.password}`
      );
      localStorage.setItem("token", "dummy-token");
      navigate("/dashboard");

    } }
  >
    {({ errors, touched, values, setFieldValue }) => (
      

        <Form className="space-y-6">
          <TextInput
          className=" text-gray-700 font-medium mb-2"
          style={{ width: "300px" }}
            mt="sm"
            label="Email"
            placeholder=" Enter Email"
            value={values.email}
            onChange={(event) => setFieldValue("email", event.target.value)} 
            error={touched.email && errors.email ?
            <div>{errors.email}</div>
            : null}/>
          
          <PasswordInput
          className="text-gray-700 font-medium mb-2"
          style={{ width: "300px" }}
            label="Password"
            placeholder="Password"
            value={values.password}
            onChange={(event) => setFieldValue("password", event.target.value)}
            error={touched.email && errors.email ? <div>{errors.password}</div> : null}/>
        
          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md font-semibold transition">
            Sign In
          </button>
        </Form>

     

    )}
  </Formik>
  </div>
   </div>
  );
};

export default Login;
