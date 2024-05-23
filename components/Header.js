import React, { useState } from "react";
import SideBar from "./SideBar";
import { menuURL } from "../utilities/images";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const clickHadler = () => setToggle(!toggle);
  const navigate = useNavigate();
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
          <p onClick={() => navigate("/login")} className="account">
            My Account
          </p>
        </div>
      </div>
      {toggle && <SideBar />}
    </>
  );
};

export default Header;
