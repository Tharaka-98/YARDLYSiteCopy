import React from "react";
import "./ContactUs.css";
import { useState } from "react";
import axios from "axios";

const ContactUs = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false); // State to track submission
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //perform validation
    const validationErrors = validationForm(data);

    if (Object.keys(validationErrors).length === 0) {
      axios
        .post("http://localhost:8080/contact", data)
        .then((result) => {
            console.log(result);
            setIsSubmitted(true); // Set the submission flag to true
            setData({  // Clear the input fields
              name: "",
              email: "",
              phone: "",
              message: "",
            });
            setErrors('')
          })
          .catch((err) => console.log(err));

        // .then((result) => console.log(result))
        // .catch((err) => console.log(err));
        // setData({  // Clear the input fields
        //     name: "",
        //     email: "",
        //     phone: "",
        //     message: "",
        //   });
        //   setIsSubmitted(true); // Set the submission flag to true
    } else {
      // If there are validation errors, set them in state
      setErrors(validationErrors);
    }
  };

  const validationForm = (formData) => {
    const validationErrors = {}
    if (!formData.name.trim()) {
      validationErrors.name = "Name is required"; // this conditions checks, if name field is empty it returns this error.
    }

    if (!formData.email.trim()) {
      validationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      validationErrors.email = "Email is not valid";
    }

    if (!formData.phone.trim()) {
      validationErrors.phone = "Phone Number is required";
    }

    if (!formData.message.trim()) {
      validationErrors.message = "Message is required";
    }

    return validationErrors;
  };

  return (
    <div className="contact-container">
      <form className="contact-form" method="post" onSubmit={handleSubmit}>
        <h1>
          Contact <span>Here</span>
        </h1>
        <label className="lbl" htmlFor="name">Full Name</label>
        <input
          type="text"
          className="contact-input"
          onChange={handleChange}
          name="name"
          placeholder="Enter Your Name"
          value={data.name}
        />
        <span className="error-message">
          {errors.name && <span className="text-danger">{errors.name}</span>}
        </span>
        <br />
        <label className="lbl" htmlFor="email">Email</label>
        <input
          type="email"
          className="contact-input"
          onChange={handleChange}
          name="email"
          placeholder="Enter Your Email"
          value={data.email}
        />
        <span className="error-message">
          {errors.email && <span className="text-danger">{errors.email}</span>}
        </span>
        <br />
        <label className="lbl" htmlFor="phone">Phone Number</label>
        <input
          type="tel"
          className="contact-input"
          onChange={handleChange}
          name="phone"
          placeholder="Enter Your Number"
          value={data.phone}
        />
        <span className="error-message">
          {errors.phone && <span className="text-danger">{errors.phone}</span>}
        </span>
        <br />
        <label className="lbl" htmlFor="message">Message</label>
        <textarea
          className="contact-textarea"
          onChange={handleChange}
          name="message"
          cols="30"
          rows="10"
          placeholder="Type here..."
          value={data.message}
        ></textarea>
        <span className="error-message">
          {errors.message && (
            <span className="text-danger">{errors.message}</span>
          )}
        </span>
        <br />
        <button type="submit" className="contact-button">
          Send
        </button>
      </form>
      {isSubmitted && (
        <div className="success-message">
          Your message was successfully submitted!
        </div>
      )}
    </div>
  );
};

export default ContactUs;
