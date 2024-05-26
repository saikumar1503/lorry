import React from "react";
import { tata, zomato } from "../utilities/images";

const Section3 = () => {
  return (
    <div className="section3-container">
      <h3 className="section3-subheading">TESTIMONIAL</h3>
      <h1 className="section3-heading">We Are Loved By Users And Clients</h1>
      <div className="section3-testimonial">
        <p className="section3-text">
          "TruckGuru's commitment to seamless load handling and rapid response
          time truly stood out to me. Their dedication to ensuring on-time
          deliveries was evident throughout the process. I wholeheartedly
          endorse and highly recommend their services."
        </p>
        <img src={zomato} alt="Zomato" className="section3-image" />
      </div>
      <div className="section3-testimonial">
        <p className="section3-text">
          “TruckGuru impresses us with its promptness, responsiveness, and
          excellent organization. They are safe and keep our logistics on time,
          to a Pan India location with so much ease!! The team truly pulled
          together!"
        </p>
        <img src={tata} alt="Tata" className="section3-image" />
      </div>
    </div>
  );
};

export default Section3;
