import React from "react";

const SelecetedHouseMaterial = ({ data, material, setMaterial }) => {
  return (
    <div
      className="selected-item"
      onClick={() => {
        const filtered = material.filter((item) => item.item !== data);
        setMaterial(filtered);
      }}
    >
      <h4>{data !== "" ? `${data} ❌` : null}</h4>
    </div>
  );
};

export default SelecetedHouseMaterial;
