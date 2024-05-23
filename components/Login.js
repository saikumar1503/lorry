import React from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <div className="login-container">
        <form className="login-form">
          <h2>Login</h2>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
          <div className="register-link">
            <h4>New here? </h4>
            <h4 onClick={() => navigate("/register")} style={{ color: "red" }}>
              Register
            </h4>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
