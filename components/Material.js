import React, { useEffect, useState } from "react";
import MaterialsSuggestions from "./MaterialsSuggestions";
import SelectedMaterials from "./SelectedMaterials";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBusinessMaterials } from "../businessTonsSlice";
import { arrowURL } from "../utilities/images";

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
        <div>
          <img
            onClick={() => history.back()}
            style={{
              width: "50",
              float: "left",
              height: "40",
            }}
            src={arrowURL}
          />
        </div>
        <h3 className="header-title">
          {details.pickUpLocation} ➡️ {details.dropLocation}
        </h3>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>
          <div>
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
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  if (e.target.value == "") {
                    setMaterials(null);
                  } else {
                    const filtered = materials2?.filter((item) =>
                      item.name
                        .toLowerCase()
                        .includes(e.target.value.toLowerCase())
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
          <div
            style={{
              display: "flex",
              flex: "coloumn",
              marginTop: "15",

              justifyContent: "center",
            }}
          >
            <button
              style={{
                height: "40",
                borderRadius: "10px",
                color: "white",
                fontSize: "15",
                backgroundColor: "#007bff",
              }}
              onClick={() => {
                setSelected([...selected, query]);
              }}
            >
              Choose Material
            </button>
          </div>
          <div
            style={{
              display: "flex",
              marginTop: "15",
              justifyContent: "center",
            }}
          >
            <button
              style={{
                height: "40",
                width: "80",
                borderRadius: "5px",
                color: "white",
                fontSize: "15",
                backgroundColor: "#007bff",
              }}
              onClick={() => {
                dispatch(addBusinessMaterials(selected));
                navigate("/booking/truck");
              }}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Material;
