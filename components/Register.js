import React, { useState } from "react";

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utilities/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../userslice";

const Register = () => {
  const [login, setLogin] = useState({ name: "", email: "", password: "" });

  const [errors, setErrors] = useState({});
  const [authMsg, setAuthMsg] = useState(null);
  console.log(errors);
  const validate = (data) => {
    const error = {};
    if (!data.email) {
      error.email = "enter email";
    }
    if (!data.name) {
      error.name = "enter name";
    }
    if (!data.password) {
      error.password = "enter password";
    }
    setErrors(error);
    return error;
  };
  console.log(login.name);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onclickhandler = (e) => {
    e.preventDefault();
    const errorsData = validate(login);
    if (Object.values(errorsData).length == 0) {
      createUserWithEmailAndPassword(auth, login.email, login.password)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: login.name,
            photoURL: "",
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
              navigate("/home");
            })
            .catch((error) => {});

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          setAuthMsg(errorCode.slice(5));
          // ..
        });
    }
  };
  return (
    <>
      <div className="register-container">
        <form className="register-form">
          <h2>Register</h2>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={login.name}
              onChange={(e) => {
                setLogin({ ...login, name: e.target.value });
              }}
            />
          </div>
          <p style={{ color: "red" }}>{errors.name}</p>
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
          <p style={{ color: "red" }}>{errors.email}</p>
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
          <p style={{ color: "red" }}>{errors.password}</p>
          <p style={{ color: "red" }}>{authMsg}</p>
          <button
            type="submit"
            className="register-button"
            onClick={onclickhandler}
          >
            Register
          </button>
          <div className="login-link">
            <p>Already have an account?</p>
            <p style={{ color: "red" }} onClick={() => navigate("/")}>
              Login
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
