import React from "react";
import Section6Des from "./Section6Des";

const Section6Data = ({ data, toggle, setShowIndex }) => {
  const clickHandler = () => {
    setShowIndex();
  };

  return (
    <div>
      <h3 className="accordion-title" onClick={clickHandler}>
        {data.title}
      </h3>
      {toggle && (
        <div className="accordion-content">
          <Section6Des description={data.description} />
        </div>
      )}
    </div>
  );
};

export default Section6Data;
