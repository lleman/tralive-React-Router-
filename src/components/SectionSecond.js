import React from "react";
import { Link } from "react-router-dom";
import adventure from "../images/adventure.png";

const SectionSecond = () => {
  return (
    <div className="section-2">
      <img id="adventure" src={adventure} />
      <div>
        <h6>About Us</h6>
        <h2>
          Get ready for real <br /> time adventure
        </h2>
        <p>
          Let’s start your journey with us, your dream will come true. <br /> Lorem
          ipsum dolor sit amet, consectetur adipisicing elit, <br /> sed do eiusmod
          tempor incididunt ut labore et dolore <br /> magna aliqua. Ut enim ad minim
          veniam quis nostrud <br /> exercitation.
        </p>
        <Link to='/events'>
          <button>Book Your Destination</button>
          </Link>
      </div>
    </div>
  );
};

export default SectionSecond;
