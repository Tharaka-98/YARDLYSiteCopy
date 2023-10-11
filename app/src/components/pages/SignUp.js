import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "../../App.css";
import "./SignUp.css";
import Validation from "./SignupValidation.js";

// import user_icon from "../Assests/person.png";
// import email_icon from "../Assests/email.png";
// import password_icon from "../Assests/password.png";

export default function SignUp() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', confirmPassword: '' });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform validation here
    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length === 0) {
      axios.post('http://localhost:8080/register', formData)
        .then(result => {
          console.log(result);
          navigate('/login');
        })
        .catch(err => console.log(err))
    } else {
      // If there are validation errors, set them in state
      setErrors(validationErrors);
    }
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = (data) => {
    const validationErrors = {}
    if (!data.name.trim()) {
      validationErrors.name = "Name is required";
    }

    if (!data.email.trim()) {
      validationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      validationErrors.email = "Email is not valid";
    }

    if (!data.password.trim()) {
      validationErrors.password = "Password is required";
    } else if (data.password.length < 6) {
      validationErrors.password = "Password must be at least 6 characters";
    }

    if (data.confirmPassword !== data.password) {
      validationErrors.confirmPassword = "Passwords do not match";
    }

    return validationErrors;
  }

  return (
    <div className="login-container">
      <div className="login-form">
        <h1>Sign Up</h1>
        <form action="" onSubmit={handleSubmit} className="form-name">
          <div className="form-group">
            <label className="lbl" htmlFor="name">Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="form-control"
            />
            <br />
            <span className="error-message">
              {errors.name && (
                <span className="text-danger">{errors.name}</span>
              )}
            </span>
          </div>
          <div className="form-group">
            <label className="lbl" htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
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
            <label className="lbl" htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="form-control"
            />
            <br />
            <span className="error-message">
              {errors.password && (
                <span className="text-danger">{errors.password}</span>
              )}
            </span>
          </div>
          <div className="form-group">
            <label className="lbl" htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              className="form-control"
            />
            <br />
            <span className="error-message">
              {errors.confirmPassword && (
                <span className="text-danger">{errors.confirmPassword}</span>
              )}
            </span>
          </div>
          <button type="submit" className="btn btn-success">
            Sign Up
          </button>
          <p>You agree to our terms and policies</p>
          <Link to="/login" className="create-account-link">
            Login
          </Link>
        </form>
      </div>
    </div>
  );
}