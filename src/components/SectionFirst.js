import React from "react";
import { Link } from "react-router-dom";
import background from "../images/background.webp";
import car from "../images/car.png";

const SectionFirst = () => {
  return (
    <div className="section-1">
      <div>
        <h1>
          Lifelong memories just a <br /> <span>few seconds away</span>
        </h1>
        <p>Let’s start your journey with us, your dream will come true</p>
        <Link to='/events'>
          <button>Explore Destinations</button>
          </Link>
      </div>
      <div>
        <img id="background" src={background} />
        <img id="car" src={car} />
      </div>
    </div>
  );
};

export default SectionFirst;
