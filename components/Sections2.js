import React from "react";
import {
  godrej,
  hyundai,
  jsw,
  mahindra,
  tata,
  zomato,
} from "../utilities/images";

const Sections2 = () => {
  return (
    <div className="sections2-container">
      <h1 className="sections2-heading">Our beloved customers</h1>
      <div className="sections2-images">
        <img src={hyundai} alt="Hyundai" className="sections2-image" />
        <img src={zomato} alt="Zomato" className="sections2-image" />
        <img src={jsw} alt="JSW" className="sections2-image" />
        <img src={godrej} alt="Godrej" className="sections2-image" />
        <img src={tata} alt="Godrej" className="sections2-image" />
        <img src={mahindra} alt="Godrej" className="sections2-image" />
      </div>
    </div>
  );
};

export default Sections2;
