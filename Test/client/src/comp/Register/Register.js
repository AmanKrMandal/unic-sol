import React, { useState } from "react";
import "./resgister.css";
import { Navigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare data for the POST request
    const userData = {
      name: name,
      email: email,
      password: password,
    };

    try {
      // Make a POST request to the signup API endpoint
      const response = await fetch("http://localhost:4000/api/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      // Check if the request was successful (status code 2xx)
      if (response.ok) {
        setRedirect(true);
      } else {
        // Handle error cases (e.g., display an error message)
        console.error("Registration failed");
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  if (redirect) {
    // Redirect to the login page upon successful registration
    return <Navigate to="/login" />;
  }

  return (
    <div className="mainFrom">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Register;
