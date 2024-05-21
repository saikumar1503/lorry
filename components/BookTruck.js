import React, { useEffect, useState } from "react";

import Trucks from "./Trucks";
import { useSelector } from "react-redux";
const BookTruck = () => {
  const details = useSelector((store) => store.details.details);
  const [trucks, setTrucks] = useState(null);
  const [showIndex, setShowIndex] = useState(null);
  const trucksData = async () => {
    const response = await fetch("http://localhost:3000/trucks");
    const jsonData = await response.json();
    setTrucks(jsonData);
  };

  useEffect(() => {
    trucksData();
  }, []);

  if (trucks == null) return <div className="loading-text">Loading</div>;

  return (
    <>
      <div className="header">
        <h3 className="header-title">
          {details.pickUpLocation} ➡️ {details.dropLocation}
        </h3>
      </div>
      <div className="main">
        <div className="trucks">
          <h2>Choose a Truck</h2>
          <div className="truckcontainer">
            {trucks.map((ele, index) => (
              <Trucks
                data={ele}
                toggle={index == showIndex ? true : false}
                setShowIndex={() => setShowIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BookTruck;
