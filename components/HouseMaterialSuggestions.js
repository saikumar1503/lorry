import React from "react";

const HouseMaterialSuggestions = ({ data, setMaterials, setQuery }) => {
  return (
    <p
      className="suggestion-item"
      onClick={() => {
        setMaterials(null);
        setQuery(data);
      }}
    >
      {data}
    </p>
  );
};

export default HouseMaterialSuggestions;
