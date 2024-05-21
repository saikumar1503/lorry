import React from "react";

const CitySuggestions2 = ({ data, setDropCities, setCity3 }) => {
  return (
    <p
      onClick={() => {
        setDropCities({ dropCity: data });
        setCity3(null);
      }}
    >
      {data}
    </p>
  );
};

export default CitySuggestions2;
