import React from "react";

const MaterialsSuggestions = ({
  data,
  setSelected,
  selected,
  setMaterials,
}) => {
  return (
    <p
      onClick={() => {
        setMaterials(null);
        setSelected([...selected, data]);
      }}
    >
      {data}
    </p>
  );
};

export default MaterialsSuggestions;
