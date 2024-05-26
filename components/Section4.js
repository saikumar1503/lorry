import React from "react";
import {
  ahm,
  bangalore,
  chennai,
  kolkata,
  mumbai,
  pune,
} from "../utilities/images";

const Section4 = () => {
  return (
    <div className="section4-container">
      <h1>Popular Cities We Serve</h1>
      <div className="city-images">
        <img src={mumbai} alt="Mumbai" className="city-image" />
        <img src={pune} alt="Pune" className="city-image" />
        <img src={chennai} alt="Chennai" className="city-image" />
        <img src={ahm} alt="Ahmedabad" className="city-image" />
        <img src={kolkata} alt="Kolkata" className="city-image" />
        <img src={bangalore} alt="Bangalore" className="city-image" />
      </div>
    </div>
  );
};

export default Section4;
