import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import BookingService from "./components/BookingService";
import Weight from "./components/Weight";
import HouseType from "./components/HouseType";
import HouseMaterial from "./components/HouseMaterial";
import Movers from "./components/Movers";
import Material from "./components/Material";
import { Provider } from "react-redux";
import { appStore } from "./appStore";
import MoversDate from "./components/MoversDate";
import MoversPhone from "./components/MoversPhone";
import BookingPhone from "./components/BookingPhone";
import BookingHouseDate from "./components/BookingHouseDate";
import HouseMobile from "./components/HouseMobile";
import BookingHouseFare from "./components/BookingHouseFare";
import BookTruck from "./components/BookTruck";
import AddMaterial from "./components/AddMaterial";
import MoversFare from "./components/MoversFare";

const root = ReactDOM.createRoot(document.getElementById("root"));
const App = () => {
  return <Body />;
};
const appRoute = createBrowserRouter([
  {
    path: "/",
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
]);

root.render(
  <Provider store={appStore}>
    <RouterProvider router={appRoute} />
  </Provider>
);
