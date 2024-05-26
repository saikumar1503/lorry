import React from "react";

const SelectedMaterials = ({ data, selected, setSelected }) => {
  return (
    <div
      onClick={() => {
        const filtered = selected.filter((item) => item != data);
        setSelected(filtered);
      }}
    >
      <h4>{data != "" ? `${data}❌` : null}</h4>
    </div>
  );
};

export default SelectedMaterials;
