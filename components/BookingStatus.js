import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import HouseUpdate from "./HouseUpdate";
import { deleteBookings } from "../bookingsSlice";

const BookingStatus = () => {
  const details = useSelector((store) => store.bookings);
  const dispatch = useDispatch();
  const [state, setState] = useState("");
  console.log(details.bookingDetails);
  const [data, setData] = useState(details.bookingDetails);
  const [houseToggle, setHouseToggle] = useState(false);

  if (data.length === 0) {
    return <h2 className="no-bookings">No Bookings Found</h2>;
  }

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
                <div>
                  <p className="material-item">Goods(Kgs/Tons):</p>
                  {ele?.materialDetails?.map((material, index) => (
                    <div key={index} className="material-details">
                      <p>{material.item}</p>
                      <p className="material-weight">
                        Weight: {material.weight} {material.type}
                      </p>
                    </div>
                  ))}
                </div>
                <p className="date">Date: {ele?.date}</p>
                <button
                  onClick={() => {
                    setState(ele);
                    setHouseToggle(!houseToggle);
                  }}
                >
                  Update
                </button>
                <button
                  onClick={() => {
                    const filtered = data.filter((cur) => ele.id !== cur.id);
                    setData(filtered);
                    dispatch(deleteBookings(filtered));
                  }}
                >
                  Delete
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
                <button>Update</button>
                <button
                  onClick={() => {
                    const filtered = data.filter((cur) => ele.id !== cur.id);
                    setData(filtered);
                    dispatch(deleteBookings(filtered));
                  }}
                >
                  Delete
                </button>
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
                  Weight(Tons): {ele.materials.weightTons} tons
                </p>
                <p className="business-materials">
                  Goods: {ele.materials.businessMaterials.join(", ")}
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
                  Update
                </button>
                <button
                  onClick={() => {
                    const filtered = data.filter((cur) => ele.id !== cur.id);
                    setData(filtered);
                    dispatch(deleteBookings(filtered));
                  }}
                >
                  Delete
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
                <div>
                  <p className="material-item">Goods(Kgs)</p>
                  {ele?.materials?.materials?.map((material, index) => (
                    <div key={index} className="material-details">
                      <p>{material.item}</p>
                      <p className="material-weight">
                        Weight: {material.weight} Kgs
                      </p>
                    </div>
                  ))}
                </div>
                <p className="date">
                  Date: {ele?.materials.date.toString().slice(0, 15)}
                </p>
                <button
                  onClick={() => {
                    setState(ele);
                    setHouseToggle(!houseToggle);
                  }}
                >
                  Update
                </button>
                <button
                  onClick={() => {
                    const filtered = data.filter((cur) => ele.id !== cur.id);
                    setData(filtered);
                    dispatch(deleteBookings(filtered));
                  }}
                >
                  Delete
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
