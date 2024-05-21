import React, { useState } from "react";

const Trucks = ({ data, toggle, setShowIndex }) => {
  const clickHandler = () => {
    setShowIndex();
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
