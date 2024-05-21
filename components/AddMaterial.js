import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Dimensions from "./Dimensions";
import HouseMaterialSuggestions from "./HouseMaterialSuggestions";
import SelecetedHouseMaterial from "./SelecetedHouseMaterial";

const AddMaterial = () => {
  const details = useSelector((store) => store.details.details);
  const navigate = useNavigate();
  const [weight, setWeight] = useState("");
  const [material, setMaterial] = useState([]);
  const [materials, setMaterials] = useState(null);
  const [materials2, setMaterials2] = useState(null);
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const [noOfItems, setNoOfItems] = useState("");
  const [type, setType] = useState("");
  const [dimensions, setDimensions] = useState(["in", "mm", "cmm", "ft"]);
  const [showIndex, setShowIndex] = useState(null);

  const materialsData = async () => {
    const data = await fetch("http://localhost:1001/materials");
    const jsonData = await data.json();
    setMaterials2(jsonData);
  };
  useEffect(() => {
    materialsData();
  }, []);

  return (
    <>
      <div className="header">
        <h3 className="header-title">
          {details.pickUpLocation} ➡️ {details.dropLocation}
        </h3>
      </div>

      <div style={{ marginTop: "100" }} className="house-material-container">
        <div style={{ textAlign: "center" }}>
          <h2>Add material details</h2>
          <h5>Add material types with details and quantity to proceed.</h5>
        </div>
        <input
          className="search-input"
          type="text"
          value={query}
          placeholder="Search for any item"
          onChange={(e) => {
            setQuery(e.target.value);
            if (e.target.value === "") {
              setMaterials(null);
            } else {
              const filtered = materials2?.filter((item) =>
                item.name.toLowerCase().includes(e.target.value.toLowerCase())
              );
              setMaterials(filtered);
            }
          }}
        />

        {materials?.map((item) => (
          <HouseMaterialSuggestions
            key={item.name}
            data={item.name}
            setMaterials={setMaterials}
            setQuery={setQuery}
          />
        ))}

        <h5>Enter dimensions (Boxes/Bundles) </h5>
        <div className="dimension-container">
          {dimensions.map((ele, index) => (
            <Dimensions
              data={ele}
              toggle={index == showIndex ? true : false}
              setShowIndex={() => setShowIndex(index)}
            />
          ))}
        </div>
        <input
          className="weight-input"
          placeholder="Enter length"
          type="number"
        />
        <input
          className="weight-input"
          placeholder="Enter width"
          type="number"
        />
        <input
          className="weight-input"
          placeholder="Enter height"
          type="number"
        />
        <input
          className="weight-input"
          type="number"
          placeholder="Enter total weight(KGs)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <input
          className="weight-input"
          type="number"
          placeholder="No. of (Boxes/Bundles/packed unit)"
        />

        <button
          className="add-button"
          onClick={() => {
            setMaterial([
              ...material,
              {
                item: query,
                weight: weight,
                quantity: noOfItems,
                type: type,
              },
            ]);
            setQuery("");
            setWeight("");
            setNoOfItems("");
          }}
        >
          Add
        </button>
        <button
          className="next-button"
          onClick={() => {
            navigate("/booking/houseDate");
          }}
        >
          Next
        </button>
        <div className="selected-materials">
          {material?.map((item, index) => (
            <SelecetedHouseMaterial
              key={index}
              data={item.item}
              material={material}
              setMaterial={setMaterial}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default AddMaterial;
