import React from "react";

const CitySuggestions = ({ data, setPickUpCities, setCity2 }) => {
  return (
    <p
      onClick={() => {
        setPickUpCities({ pickupCity: data });
        setCity2(null);
      }}
    >
      {data}
    </p>
  );
};

export default CitySuggestions;
