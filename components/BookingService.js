import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { arrowURL } from "../utilities/images";

const BookingService = () => {
  const details = useSelector((store) => store.details.details);
  console.log(details);

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
      <div className="bookingService">
        <div>
          <h2>Choose service type</h2>
          <h5>
            Select business for Full truck or partload or personal for household
            goods
          </h5>
        </div>
        <hr />
        <div className="service-container">
          <Link to="/booking/weight" className="service">
            <div>
              <h3>Business</h3>
              <p>Industrial, Commercial or Enterprise goods</p>
            </div>
          </Link>
          <Link to="/booking/weight" className="arrow">
            ➡️
          </Link>
          <Link to="/booking/housetype" className="service">
            <div>
              <h3>Personal</h3>
              <p>Household or personal Goods</p>
            </div>
          </Link>
          <Link to="/booking/housetype" className="arrow">
            ➡️
          </Link>
        </div>
      </div>
    </>
  );
};

export default BookingService;
