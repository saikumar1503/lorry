import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { arrowURL } from "../utilities/images";

const HouseMobile = () => {
  const details = useSelector((store) => store.details.details);
  const navigate = useNavigate();
  return (
    <>
      <div className="header">
        <div>
          <img
            onClick={() => history.back()}
            style={{
              width: "50",
              float: "left",
              height: "40",
            }}
            src={arrowURL}
          />
        </div>
        <h3 className="header-title">
          {details.pickUpLocation} ➡️ {details.dropLocation}
        </h3>
      </div>
      <div style={{ marginTop: "150" }} className="container">
        <h2 className="title">Enter Mobile Number</h2>
        <p className="description">
          We will send price notification on your number.
        </p>
        <input
          type="number"
          className="input"
          placeholder="WhatsApp no. recommended"
        />
        <button
          onClick={() => navigate("/booking/houseFare")}
          className="button"
        >
          Get Price
        </button>
      </div>
    </>
  );
};

export default HouseMobile;
