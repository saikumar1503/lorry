import React, { useState } from "react";
import { useSelector } from "react-redux";
import HouseUpdate from "./HouseUpdate";

const BookingStatus = () => {
  const details = useSelector((store) => store.bookings);
  const [state, setState] = useState("");
  console.log(details.bookingDetails);
  const [data, setData] = useState(details.bookingDetails);
  const [houseToggle, setHouseToggle] = useState(false);
  return (
    <div>
      <div className="booking-status">
        <h1 className="booking-header">Your Bookings</h1>
        {data.map((ele, index) => {
          if (ele.type === "housefare") {
            return (
              <div key={index} className="booking-item housefare">
                <p className="location">
                  Pickup location: {ele?.pickupLocation}
                </p>
                <p className="location">Drop location: {ele?.dropLocation}</p>
                {ele?.materialDetails?.map((material, index) => (
                  <div key={index} className="material-details">
                    <p className="material-item">Items : {material.item}</p>
                    <p className="material-weight">
                      quantity: {material.quantity}
                    </p>
                    <p className="material-weight">
                      Weight: {material.weight} {material.type}
                    </p>
                  </div>
                ))}
                <p className="date">Date: {ele?.date}</p>
                <button
                  onClick={() => {
                    setState(ele);
                    setHouseToggle(!houseToggle);
                  }}
                >
                  update
                </button>
              </div>
            );
          } else if (ele.type === "moversfare") {
            return (
              <div key={index} className="booking-item moversfare">
                <p className="location">
                  Pickup location: {ele?.pickupLocation}
                </p>
                <p className="location">Drop location: {ele?.dropLocation}</p>
                <p className="house-type">
                  House Type: {ele?.materials.houseType}
                </p>
                <p className="location">
                  Pickup floor: {ele?.materials.pickupFloor}
                </p>
                <p className="location">
                  Drop floor: {ele?.materials.dropFloor}
                </p>
                <p className="total-weight">
                  Total Weight: {ele?.materials.totalWeight}
                </p>
                <p className="date">
                  Date: {ele?.materials.moversDate.toString().slice(0, 15)}
                </p>
                <button>update</button>
              </div>
            );
          } else if (ele.type === "busniesstons") {
            return (
              <div key={index} className="booking-item busniesstons">
                <p className="location">
                  Pickup location: {ele.pickupLocation}
                </p>
                <p className="location">Drop location: {ele.dropLocation}</p>
                <p className="weight-tons">
                  Weight: {ele.materials.weightTons} tons
                </p>
                <p className="business-materials">
                  Materials: {ele.materials.businessMaterials.join(", ")}
                </p>
                <p className="truck">
                  Truck: {ele.materials.truck} feet container
                </p>
                <p className="date">
                  Date: {ele?.materials.businessDate.toString().slice(0, 15)}
                </p>
                <button
                  onClick={() => {
                    setState(ele);
                    setHouseToggle(!houseToggle);
                  }}
                >
                  update
                </button>
              </div>
            );
          } else if (ele.type === "busniesskg") {
            return (
              <div key={index} className="booking-item busniesskg">
                <p className="location">
                  Pickup location: {ele.pickupLocation}
                </p>
                <p className="location">Drop location: {ele.dropLocation}</p>
                {ele.materials.materials.map((cur, index) => (
                  <div key={index} className="material-details">
                    <p className="material-item">
                      Items : {cur.item}
                    </p>
                    <p className="material-weight">Weight: {cur.weight}Kgs</p>
                    <p className="material-quantity">
                      Quantity: {cur.quantity}
                    </p>
                  </div>
                ))}
                <p className="date">
                  Date: {ele?.materials.date.toString().slice(0, 15)}
                </p>
                <button
                  onClick={() => {
                    setState(ele);
                    setHouseToggle(!houseToggle);
                  }}
                >
                  update
                </button>
              </div>
            );
          }
        })}
      </div>
      {houseToggle && (
        <HouseUpdate
          data={data}
          setData={setData}
          item={state}
          houseToggle={houseToggle}
          setHouseToggle={setHouseToggle}
        />
      )}
    </div>
  );
};

export default BookingStatus;
