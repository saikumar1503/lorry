import React from "react";
import CheckPrice from "./CheckPrice";
import Header from "./Header";
import { truckURL } from "../utilities/images";
import Section1 from "./Section1";
import Sections2 from "./Sections2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";

const Body = () => {
  return (
    <div>
      <Header />
      <CheckPrice />
      <Section1 />
      <Sections2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
    </div>
  );
};

export default Body;
