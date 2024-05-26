import React, { useState } from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utilities/firebase";

const Login = () => {
  const [login, setLogin] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [authMsg, setAuthMsg] = useState(null);
  console.log(errors);
  const validate = (data) => {
    const error = {};
    if (!data.email) {
      error.email = "enter email";
    }
    if (!data.password) {
      error.password = "enter password";
    }
    setErrors(error);
    return error;
  };
  const navigate = useNavigate();
  const onclickhandler = (e) => {
    e.preventDefault();
    const errorsData = validate(login);

    if (Object.values(errorsData).length == 0) {
      signInWithEmailAndPassword(auth, login.email, login.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);

          navigate("/home");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage);
          setAuthMsg("Invalid email-id/password");
        });
    }
  };

  return (
    <>
      <div className="login-container">
        <form className="login-form">
          <h2>Login</h2>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={login.email}
              name="email"
              onChange={(e) => {
                setLogin({ ...login, email: e.target.value });
              }}
            />
          </div>
          <p style={{ color: "red" }}>{errors?.email}</p>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={login.password}
              required
              onChange={(e) => {
                setLogin({ ...login, password: e.target.value });
              }}
            />
          </div>
          <p style={{ color: "red" }}>{errors?.password}</p>
          <p style={{ color: "red" }}>{authMsg}</p>
          <button
            type="submit"
            className="login-button"
            onClick={onclickhandler}
          >
            Login
          </button>
          <div className="register-link">
            <h4>New here? </h4>
            <h4 style={{ color: "red" }} onClick={() => navigate("/register")}>
              Register
            </h4>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
