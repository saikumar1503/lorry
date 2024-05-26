import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import {
  RouterProvider,
  createBrowserRouter,
  useNavigate,
} from "react-router-dom";
import BookingService from "./components/BookingService";
import Weight from "./components/Weight";
import HouseType from "./components/HouseType";
import HouseMaterial from "./components/HouseMaterial";
import Movers from "./components/Movers";
import Material from "./components/Material";
import { Provider, useDispatch } from "react-redux";
import { appStore } from "./appStore";
import MoversDate from "./components/MoversDate";
import BookingPhone from "./components/BookingPhone";
import BookingHouseDate from "./components/BookingHouseDate";
import HouseMobile from "./components/HouseMobile";
import BookingHouseFare from "./components/BookingHouseFare";
import BookTruck from "./components/BookTruck";
import AddMaterial from "./components/AddMaterial";
import MoversFare from "./components/MoversFare";
import BookingDate from "./components/BookingDate";
import BusinessTons from "./components/BusinessTons";
import BusinessKgs from "./components/BusinessKgs";
import BusinessKgsDate from "./components/BusinessKgsDate";
import Login from "./components/Login";
import Register from "./components/Register";
import BookingStatus from "./components/BookingStatus";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "./userslice";
import { auth } from "./utilities/firebase";

export const App = () => {
  const dispatch = useDispatch();

  const appRoute = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/home",
      element: <Body />,
    },

    {
      path: "/booking/service",
      element: <BookingService />,
    },
    {
      path: "/booking/weight",
      element: <Weight />,
    },
    {
      path: "/booking/housetype",
      element: <HouseType />,
    },
    {
      path: "/booking/houseMaterial",
      element: <HouseMaterial />,
    },
    {
      path: "/booking/moverDetail",
      element: <Movers />,
    },
    {
      path: "/booking/material",
      element: <Material />,
    },
    {
      path: "/booking/moversDate",
      element: <MoversDate />,
    },

    { path: "/booking/phone", element: <BookingPhone /> },
    {
      path: "/booking/houseDate",
      element: <BookingHouseDate />,
    },
    {
      path: "/booking/housePhone",
      element: <HouseMobile />,
    },
    {
      path: "/booking/houseFare",
      element: <BookingHouseFare />,
    },
    {
      path: "/booking/truck",
      element: <BookTruck />,
    },
    {
      path: "/booking/addMaterial",
      element: <AddMaterial />,
    },
    {
      path: "/booking/moversBooking",
      element: <MoversFare />,
    },
    {
      path: "/booking/date",
      element: <BookingDate />,
    },
    {
      path: "/booking/businessTons",
      element: <BusinessTons />,
    },
    {
      path: "/booking/businessDate",
      element: <BusinessKgsDate />,
    },
    {
      path: "/booking/businessKgs",
      element: <BusinessKgs />,
    },

    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/booking/status",
      element: <BookingStatus />,
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
      } else {
        dispatch(removeUser());
      }
    });
  }, []);

  return <RouterProvider router={appRoute} />;
};
