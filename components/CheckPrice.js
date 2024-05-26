import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { addDropLocation, addPickUpLocation } from "../DetailsSlice";
import { useDispatch } from "react-redux";

import CitySuggestions from "./CitySuggestions";
import CitySuggestions2 from "./CitySuggestions2";
import { trucks } from "../utilities/images";

const CheckPrice = () => {
  const [pickUpCities, setPickUpCities] = useState({ pickupCity: "" });
  const [dropCities, setDropCities] = useState({ dropCity: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [city, setCity] = useState(null);
  const [city2, setCity2] = useState(null);
  const [city3, setCity3] = useState(null);

  const cityData = async () => {
    const data = await fetch("http://localhost:8081/cities");
    const jsonData = await data.json();
    setCity(jsonData);
  };
  useEffect(() => {
    cityData();
  }, []);

  const validate = (formData) => {
    const errorsData = {};
    if (!formData.pickupCity) {
      errorsData.pickupCity = "Pickup city is required";
    }
    if (!formData.dropCity) {
      errorsData.dropCity = "Dropcity is required";
    }
    setErrors(errorsData);
    return errorsData;
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const validateResult = validate({ ...pickUpCities, ...dropCities });

    if (Object.values(validateResult).length == 0) {
      navigate("/booking/service");
    }
    dispatch(addPickUpLocation(pickUpCities.pickupCity));
    dispatch(addDropLocation(dropCities.dropCity));
  };

  return (
    <div className="main-check">
      <div className="check-price-container">
        <form className="check-price-form" onSubmit={submitHandler}>
          <div className="input-container">
            <label htmlFor="pickUpCity">Enter pickup city</label>
            <input
              id="pickUpCity"
              name="pickUpCity"
              value={pickUpCities.pickupCity}
              placeholder="Enter pickup city"
              onChange={(e) => {
                setPickUpCities({ pickupCity: e.target.value });

                const filtered = city.filter((cur) =>
                  cur.name.toLowerCase().includes(e.target.value.toLowerCase())
                );
                setCity2(filtered);
              }}
            />
          </div>
          <p style={{ color: "red" }}>{errors.pickupCity}</p>
          {pickUpCities.pickupCity == ""
            ? null
            : city2?.map((cur) => (
                <CitySuggestions
                  data={cur.name}
                  setPickUpCities={setPickUpCities}
                  setCity2={setCity2}
                ></CitySuggestions>
              ))}
          <div className="input-container">
            <label htmlFor="dropCity">Enter drop city</label>
            <input
              id="dropCity"
              name="dropCity"
              placeholder="Enter drop city"
              value={dropCities.dropCity}
              onChange={(e) => {
                setDropCities({ dropCity: e.target.value });
                const filtered = city.filter((cur) =>
                  cur.name.toLowerCase().includes(e.target.value.toLowerCase())
                );
                setCity3(filtered);
              }}
            />
            {dropCities.dropCity == ""
              ? null
              : city3?.map((cur) => (
                  <CitySuggestions2
                    data={cur.name}
                    setDropCities={setDropCities}
                    setCity3={setCity3}
                  ></CitySuggestions2>
                ))}
            <p style={{ color: "red" }}>{errors.dropCity}</p>
            <button className="checkPrice-btn">Check price</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckPrice;
