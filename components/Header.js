import React, { useState } from "react";
import SideBar from "./SideBar";
import { menuURL } from "../utilities/images";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utilities/firebase";
import { useSelector } from "react-redux";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const clickHadler = () => setToggle(!toggle);
  const user = useSelector((store) => store.user);
  console.log(user);
  const navigate = useNavigate();

  const handlesignout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {});
  };
  return (
    <>
      <div className="header-container">
        <div className="header-item sidebar">
          <img style={{ width: "35" }} src={menuURL} onClick={clickHadler} />
        </div>

        <div className="header-item title">
          <h2 className="name">trukky</h2>
        </div>
        <div className="header-item account">
          <p style={{ fontSize: "20" }} className="account">
            {user?.displayName}
          </p>
          <u style={{ color: "red" }}>
            <p
              onClick={handlesignout}
              style={{ color: "red" }}
              className="account"
            >
              Signout
            </p>
          </u>
        </div>
      </div>
      {toggle && <SideBar />}
    </>
  );
};

export default Header;
