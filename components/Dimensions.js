import React from "react";

const Dimensions = ({ data, toggle, setShowIndex }) => {
  onclickHandler = () => {
    setShowIndex();
  };
  return (
    <div>
      <button
        className={toggle ? "dimensionbuttoncolor" : "dimensionbutton"}
        onClick={onclickHandler}
      >
        {data}
      </button>
    </div>
  );
};

export default Dimensions;
