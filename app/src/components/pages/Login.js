import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css"; // Import the CSS file
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Clear any previous error message
    setErrorMessage("");

    // Perform validation here
    const validationErrors = validateForm(email, password);

    if (Object.keys(validationErrors).length === 0) {
      // If there are no validation errors, submit the form
      axios
        .post("http://localhost:8080/login", { email, password })
        .then((result) => {
          console.log("Response data:", result.data);
          if (result.data.message === "Success") {
            navigate("/dashboard");
          } else {
            // Display an error message if login fails
            setErrorMessage("Invalid email or password. Please try again.");
          }
        })
        .catch((err) => {
          setErrorMessage("Invalid email or password. Please try again.");
          console.log(err);
        });
    } else {
      // If there are validation errors, set them in state
      setErrors(validationErrors);
    }
  };

  const validateForm = (email, password) => {
    const validationErrors = {};

    if (!email.trim()) {
      validationErrors.email = "Email is required";
    }

    if (!password.trim()) {
      validationErrors.password = "Password is required";
    }

    return validationErrors;
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h1>Login</h1>
        <form action="" onSubmit={handleSubmit} className="form-name">
          <div className="form-group">
            <label className="lbl" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
            />
            <br />
            <span className="error-message">
              {errors.email && (
                <span className="text-danger">{errors.email}</span>
              )}
            </span>
          </div>
          <div className="form-group">
            <label className="lbl" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
            />
            <br />
            <span className="error-message">
              {errors.password && (
                <span className="text-danger">{errors.password}</span>
              )}
            </span>
          </div>
          <div className="login-error-message"> {/* Use a different class for login error */}
        {errorMessage && (
          <span className="text-danger">{errorMessage}</span>
        )}
      </div>
          <button type="submit" className="btn btn-success">
            Log in
          </button>
          <p>You agree to our terms and policies</p>
          <Link to="/sign-up" className="create-account-link">
            Create account
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;