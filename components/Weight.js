import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Weight = () => {
  const details = useSelector((store) => store.details.details);
  const [update, setUpdate] = useState({ weigh: "", type: "" });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = (formData) => {
    const errorsData = {};
    if (!formData.weigh) {
      errorsData.weigh = "Weight is required";
    }
    if (!formData.type) {
      errorsData.type = "Type is required";
    }
    setErrors(errorsData);
    return errorsData;
  };
  console.log(errors);

  const clickHandler = (e) => {
    e.preventDefault();
    const validateResult = validate(update);
    console.log(update);
    if (Object.values(validateResult).length == 0) {
      if (update.type == "Tons") {
        navigate("/booking/material");
      } else {
        navigate("/booking/addMaterial");
      }
    }
  };

  return (
    <>
      <div className="header">
        <h3 className="header-title">
          {details.pickUpLocation} ➡️ {details.dropLocation}
        </h3>
      </div>
      <div className="weightInput">
        <h2 className="weightInput-title">Enter total material weight</h2>
        <h5 className="weightInput-subtitle">
          A full truck or partload will be recommended based on the weight of
          the goods.
        </h5>
        <input
          className="weightInput-field"
          type="text"
          placeholder="Enter weight"
          value={update.weigh}
          onChange={(e) => {
            setUpdate({ ...update, weigh: e.target.value });
          }}
        />
        <p style={{ color: "red" }}>{errors.weigh}</p>
        <select
          className="weightInput-select"
          onChange={(e) => {
            setUpdate({ ...update, type: e.target.value });
          }}
        >
          <option>Type</option>
          <option>Tons</option>
          <option>Kgs</option>
        </select>
        <p style={{ color: "red" }}>{errors.type}</p>
        <h3 onClick={clickHandler} className="weightInput-arrow">
          ➡️
        </h3>
      </div>
    </>
  );
};

export default Weight;
