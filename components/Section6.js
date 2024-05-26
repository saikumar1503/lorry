import React, { useState } from "react";
import { data } from "../utilities/images";
import Section6Data from "./Section6Data";

const Section6 = () => {
  const [showIndex, setShowIndex] = useState(null);

  const handleSetShowIndex = (index) => {
    setShowIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="accordion-container">
      <h2 style={{ textAlign: "center" }}>Frequently Asked Questions</h2>
      <div>
        {data.map((ele, index) => (
          <Section6Data
            key={index}
            data={ele}
            toggle={index === showIndex}
            setShowIndex={() => handleSetShowIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Section6;
