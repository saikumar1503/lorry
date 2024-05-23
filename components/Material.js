import React, { useEffect, useState } from "react";
import MaterialsSuggestions from "./MaterialsSuggestions";
import SelectedMaterials from "./SelectedMaterials";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBusinessMaterials } from "../businessTonsSlice";

const Material = () => {
  const details = useSelector((store) => store.details.details);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [materials, setMaterials] = useState(null);
  const [materials2, setMaterials2] = useState(null);
  const [selected, setSelected] = useState([]);

  console.log(selected);
  const [query, setQuery] = useState("");
  const materialsData = async () => {
    const data = await fetch("http://localhost:1001/materials");
    const jsonData = await data.json();
    setMaterials2(jsonData);
  };
  useEffect(() => {
    materialsData();
  }, []);

  return (
    <div>
      <div className="header">
        <h3 className="header-title">
          {details.pickUpLocation} ➡️ {details.dropLocation}
        </h3>
      </div>
      <div className="materials-container">
        <h2>Enter material type</h2>
        <h5>Select the material from the list or enter a new type.</h5>
        <div>
          {selected?.map((item) => (
            <SelectedMaterials
              data={item}
              selected={selected}
              setSelected={setSelected}
            />
          ))}
          <input
            style={{ width: "250" }}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              if (e.target.value == "") {
                setMaterials(null);
              } else {
                const filtered = materials2?.filter((item) =>
                  item.name.toLowerCase().includes(e.target.value.toLowerCase())
                );
                setMaterials(filtered);
              }
            }}
          />
        </div>
        {materials?.map((item) => (
          <MaterialsSuggestions
            data={item.name}
            setSelected={setSelected}
            selected={selected}
            setMaterials={setMaterials}
          />
        ))}
      </div>

      <button
        onClick={() => {
          setSelected([...selected, query]);
        }}
        style={{
          marginLeft: "600",
          marginTop: "20",
          width: "250",
          height: "40",
          color: "white",
          fontSize: "15",
          backgroundColor: "#007bff",
        }}
      >
        Choose Material
      </button>
      <button
        onClick={() => {
          dispatch(addBusinessMaterials(selected));
          navigate("/booking/truck");
        }}
        style={{
          marginLeft: "600",
          marginTop: "20",
          width: "250",
          height: "40",
          color: "white",
          fontSize: "15",
          backgroundColor: "#007bff",
        }}
      >
        Next
      </button>
    </div>
  );
};

export default Material;
