import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateBookings } from "../bookingsSlice";

const HouseUpdate = ({ item, data, setData, houseToggle, setHouseToggle }) => {
  const [house, setHouse] = useState({
    pickup: "",
    drop: "",
    pickupDate: "",
    materials: "",
    weight: "",
    truck: "",
    quantity: "",
  });
  const dispatch = useDispatch();
  const updated = data.map((ele) => {
    if (item.id === ele.id) {
      if (ele.type === "housefare") {
        return {
          id: ele.id,
          pickupLocation: house.pickup,
          dropLocation: house.drop,
          type: ele.type,
          materialDetails: [
            {
              item: house.materials,
              weight: house.weight,
              quantity: house.quantity,
            },
          ],
          date: house.pickupDate,
        };
      } else if (ele.type === "busniesstons") {
        return {
          id: ele.id,
          pickupLocation: house.pickup,
          dropLocation: house.drop,
          type: ele.type,
          materials: {
            weightTons: house.weight,
            businessMaterials: [house.materials],
            truck: house.truck,
            businessDate: house.pickupDate,
          },
        };
      } else if (ele.type === "busniesskg") {
        return {
          id: ele.id,
          type: ele.type,
          pickupLocation: house.pickup,
          dropLocation: house.drop,
          materials: {
            materials: [
              {
                item: house.materials,
                weight: house.weight,
                quantity: house.quantity,
              },
            ],
            date: house.pickupDate,
          },
        };
      }
    } else {
      return ele;
    }
  });

  return (
    <div className="overlay">
      <div className="house-update-container">
        <div className="row">
          <div className="field">
            <h3>Pickup</h3>
            <input
              className="input-field"
              value={house.pickup}
              type="text"
              onChange={(e) => setHouse({ ...house, pickup: e.target.value })}
            />
          </div>
          <div className="field">
            <h3>Drop</h3>
            <input
              className="input-field"
              value={house.drop}
              type="text"
              onChange={(e) => setHouse({ ...house, drop: e.target.value })}
            />
          </div>
        </div>
        <div className="row">
          <div className="field">
            <h3>Pickup Date</h3>
            <input
              className="input-field"
              value={house.pickupDate}
              type="date"
              onChange={(e) =>
                setHouse({ ...house, pickupDate: e.target.value })
              }
            />
          </div>
        </div>
        <div className="row">
          <div className="field">
            <h3>Materials</h3>
            <input
              className="input-field"
              value={house.materials}
              type="text"
              onChange={(e) =>
                setHouse({ ...house, materials: e.target.value })
              }
            />
          </div>
          <div className="field">
            <h3>Weight</h3>
            <input
              className="input-field"
              value={house.weight}
              type="text"
              onChange={(e) => setHouse({ ...house, weight: e.target.value })}
            />
          </div>
        </div>
        <div className="row">
          <div className="field">
            <h3>Quantity</h3>
            <input
              className="input-field"
              value={house.quantity}
              type="text"
              onChange={(e) => setHouse({ ...house, quantity: e.target.value })}
            />
          </div>
          <div className="field">
            <h3>Truck</h3>
            <input
              className="input-field"
              value={house.truck}
              type="text"
              onChange={(e) => setHouse({ ...house, truck: e.target.value })}
            />
          </div>
        </div>
        <button
          className="update-button"
          onClick={() => {
            setData(updated);
            dispatch(updateBookings(updated));
            setHouseToggle(!houseToggle);
          }}
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default HouseUpdate;
