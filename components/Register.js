import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

const Register = () => {
  const naviagte = useNavigate();
  return (
    <>
      <Header />
      <div className="register-container">
        <form className="register-form">
          <h2>Register</h2>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="mobile">Mobile Number</label>
            <input type="tel" id="mobile" name="mobile" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit" className="register-button">
            Register
          </button>
          <div className="login-link">
            <p>Already have an account?</p>
            <p style={{ color: "red" }} onClick={() => naviagte("/login")}>
              Login
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
