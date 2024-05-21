import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Weight from "./Weight";
import {
  addDropFloor,
  addHouseType,
  addPickupFloor,
  addTotalWeight,
} from "../moversSlice";

const Movers = () => {
  const dispatch = useDispatch();
  const details = useSelector((store) => store.details.details);
  const navigate = useNavigate();
  const [update, setUpdate] = useState({
    weight: "",
    houseType: "",
    pickupFloor: "",
    dropFloor: "",
  });
  const [erros, setErrors] = useState({});
  const validate = (formData) => {
    const errorsData = {};
    if (!formData.houseType) {
      errorsData.houseType = "houseType is required";
    }
    if (!formData.pickupFloor) {
      errorsData.pickupFloor = "pickupFloor is required";
    }
    if (!formData.dropFloor) {
      errorsData.dropFloor = "dropFloor is required";
    }
    setErrors(errorsData);
    return errorsData;
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const validateResult = validate(update);
    console.log(update);

    if (Object.values(validateResult).length == 0) {
      dispatch(addPickupFloor(update.pickupFloor));
      dispatch(addDropFloor(update.dropFloor));
      dispatch(addTotalWeight(update.weight));
      dispatch(addHouseType(update.houseType));
      navigate("/booking/moversDate");
    }
  };
  return (
    <>
      <div className="header">
        <h3 className="header-title">
          {details.pickUpLocation} ➡️ {details.dropLocation}
        </h3>
      </div>
      <div className="moversPackers">
        <h2 className="moversPackers-title">Movers and Packers</h2>
        <h5 className="moversPackers-subtitle">
          Please provide house detail for moving the goods as per the given
          date.
        </h5>
        <div className="moversPackers-section">
          <h3 className="moversPackers-label">House type</h3>
          <select
            className="moversPackers-select"
            onChange={(e) =>
              setUpdate({ ...update, houseType: e.target.value })
            }
          >
            <option>House type</option>
            <option>1BHK</option>
            <option>2BHK</option>
            <option>3BHK</option>
            <option>4BHK</option>
            <option>5BHK</option>
            <option>6BHK</option>
          </select>
        </div>
        <p style={{ color: "red" }}>{erros.houseType}</p>
        <div className="moversPackers-section">
          <h3 className="moversPackers-label">Pickup Floor</h3>
          <select
            className="moversPackers-select"
            onChange={(e) =>
              setUpdate({ ...update, pickupFloor: e.target.value })
            }
          >
            <option>Select Floor</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
          </select>
        </div>
        <p style={{ color: "red" }}>{erros.pickupFloor}</p>
        <div className="moversPackers-section">
          <h3 className="moversPackers-label">Drop Floor</h3>
          <select
            className="moversPackers-select"
            onChange={(e) =>
              setUpdate({ ...update, dropFloor: e.target.value })
            }
          >
            <option>Select Floor</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
          </select>
        </div>

        <p style={{ color: "red" }}>{erros.dropFloor}</p>
        <input
          className="moversPackers-select"
          type="text"
          placeholder="Enter total weight"
          onChange={(e) => setUpdate({ ...update, weight: e.target.value })}
        />
        <button className="moversPackers-button" onClick={submitHandler}>
          Next
        </button>
      </div>
    </>
  );
};

export default Movers;
