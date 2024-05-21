import React from "react";
import { useSelector } from "react-redux";

const MoversFare = () => {
  const moversdata = useSelector((store) => store.movers.moversData);
  const details = useSelector((store) => store.details.details);
  console.log(moversdata);
  return (
    <>
      <div className="header">
        <h3 className="header-title">
          {details.pickUpLocation} ➡️ {details.dropLocation}
        </h3>
      </div>
      <div className="booking-container">
        <h2 className="booking-header">Booking Details</h2>
        <div className="details-container">
          <div className="detail-item">
            <span className="detail-label">Weight:</span>
            <span className="detail-value">{moversdata.totalWeight}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Pickup Floor:</span>
            <span className="detail-value">{moversdata.pickupFloor}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Drop Floor:</span>
            <span className="detail-value">{moversdata.dropFloor}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">House Type:</span>
            <span className="detail-value">{moversdata.houseType}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Date:</span>
            <span className="detail-value">
              {moversdata.moversDate.toString().slice(0, 15)}
            </span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Amount:</span>
            <span className="detail-value">
              Rs {Math.trunc(Math.random() * 18000)}
            </span>
          </div>
        </div>
        <p className="thank-you-text">
          Thank you for choosing Trukky for your goods services. Please wait
          while we get back to you with more details regarding your order
          placement.
        </p>
        <button className="confirm-button">Confirm Booking</button>
      </div>
    </>
  );
};

export default MoversFare;
