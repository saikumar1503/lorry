import React from "react";

const SelectedMaterials = ({ data, selected, setSelected }) => {
  return (
    <div
      onClick={() => {
        const filtered = selected.filter((item) => item != data);
        setSelected(filtered);
      }}
    >
      <p>{data != "" ? `${data}❌` : null}</p>
    </div>
  );
};

export default SelectedMaterials;
