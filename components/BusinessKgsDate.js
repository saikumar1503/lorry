import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBusinessKgDate } from "../businessKgsSlice";

const BusinessKgsDate = () => {
  const details = useSelector((store) => store.details.details);

  const dispatch = useDispatch();
  const [selectedDate, setSelectedDate] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const clickHandler = () => {
    if (selectedDate != null) {
      setError("");
      dispatch(addBusinessKgDate(selectedDate));
      navigate("/booking/businessKgs");
    } else {
      setError("Enter date");
    }
  };
  return (
    <>
      <div className="header">
        <h3 className="header-title">
          {details.pickUpLocation} ➡️ {details.dropLocation}
        </h3>
      </div>
      <div className="calendar-container">
        <h2>Choose pickup date</h2>
        <h5>Select date for picking up material from the given destination.</h5>
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          dateFormat="MMMM d, yyyy"
          className="date-picker"
          placeholderText="Click to select a date"
        />
        <p style={{ color: "red" }}>{error}</p>
        <button className="next-button" onClick={clickHandler}>
          Next
        </button>
      </div>
    </>
  );
};

export default BusinessKgsDate;
