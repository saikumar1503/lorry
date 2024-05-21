import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const HouseType = () => {
  const details = useSelector((store) => store.details.details);
  return (
    <>
      <div className="header">
        <h3 className="header-title">
          {details.pickUpLocation} ➡️ {details.dropLocation}
        </h3>
      </div>
      <div className="bookingService">
        <div>
          <h2>Choose Load service</h2>
          <h5>Choose Load services</h5>
        </div>
        <hr />
        <div className="service-container">
          <Link to="/booking/houseMaterial" className="service">
            <div>
              <h3>Few packed items ( 1 - 5 )</h3>
              <p>Non Furniture items like boxes,luggage, Appliances</p>
            </div>
          </Link>
          <Link to="/booking/houseMaterial" className="arrow">
            ➡️
          </Link>
          <Link to="/booking/moverDetail" className="service">
            <div>
              <h3>Packers & Movers</h3>
              <p>Includes Furnitures and complete house shifting</p>
            </div>
          </Link>
          <Link to="/booking/moverDetail" className="arrow">
            ➡️
          </Link>
        </div>
      </div>
    </>
  );
};

export default HouseType;
