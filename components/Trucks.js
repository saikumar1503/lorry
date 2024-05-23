import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTruck } from "../businessTonsSlice";

const Trucks = ({ data, toggle, setShowIndex }) => {
  const dispatch = useDispatch();
  const clickHandler = () => {
    setShowIndex();
    dispatch(addTruck(data.length_feet));
  };
  return (
    <div
      onClick={clickHandler}
      className={toggle ? "truckcardcolor" : "truckcard"}
    >
      <img className="truckimage" src={data.image} />
      <h4 className="feet">{data.length_feet} Feet container</h4>
    </div>
  );
};

export default Trucks;
