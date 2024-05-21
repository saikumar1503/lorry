import React from "react";
import { useSelector } from "react-redux";

const BookingHouseFare = () => {
  const store = useSelector((store) => store.houseFare.houseFare);
  const details = useSelector((store) => store.details.details);
  const materialDetails = useSelector(
    (store) => store.houseFare.houseFare.material
  );

  return (
    <>
      <div className="header">
        <h3 className="header-title">
          {details.pickUpLocation} ➡️ {details.dropLocation}
        </h3>
      </div>
      <div style={{ marginTop: "100" }} className="booking-confirmation">
        <h2 className="booking-title">Confirm booking</h2>
        <p className="booking-instructions">
          Please Confirm your Booking and Pay later at the Time of Loading.
        </p>
        {materialDetails.map((ele, i) => (
          <>
            <p className="booking-detail">
              <span className="detail-label">Material {i + 1}:</span> {ele.item}
            </p>
            <p className="booking-detail">
              <span className="detail-label">weight:</span> {ele.weight}{" "}
              {ele.type}
            </p>
          </>
        ))}
        <p className="booking-detail">
          <span className="detail-label">Date:</span>{" "}
          {store.date?.toString().slice(0, 15)}
        </p>
        <h4 className="section-title">What's Next</h4>
        <p className="next-steps">
          After your confirmation, our team will verify your requirement with
          you and schedule the shipment as per requirement.
        </p>
        <h4 className="section-title">Total</h4>
        <h4 className="total-amount">Rs {Math.trunc(Math.random() * 18000)}</h4>
        <h4 className="book-now">Book this for 0 now.</h4>
        <p className="pay-later">You can Pay on the Day of Loading Material.</p>
        <h4 className="important-note-title">Important Note:</h4>
        <p className="important-note">
          Material should be properly packed by clients. Trukky does not provide
          packing service. The service is from ground to ground floor.
        </p>
        <button
          className="confirm-button"
          onClick={() => {
            alert("booking confirmed");
          }}
        >
          Confirm Booking
        </button>
      </div>
    </>
  );
};

export default BookingHouseFare;
