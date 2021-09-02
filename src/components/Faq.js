import React from "react";
import { Link } from "react-router-dom";
import service from "../images/service-range.png";

function Faq() {
  return (
    <div className="faq">
      <p>FAQ</p>
      <h1>Full range of travel service</h1>
      <div className="part">
        <div>
          <ul>
            <li>
              <input type="checkbox" id="selection1" />
              <label htmlFor="selection1">Starts the automated process.</label>
              <div className="content">
                The automated process starts as soon as <br /> your clothes go
                into the machine. Duis <br /> cursus, mi quis viverra ornare.
              </div>
            </li>
            <li>
              <input type="checkbox" id="selection2" />
              <label htmlFor="selection2">The automated process starts.</label>
              <div className="content">
                The automated process starts as soon as <br /> your clothes go
                into the machine. Duis <br /> cursus, mi quis viverra ornare.
              </div>
            </li>
            <li>
              <input type="checkbox" id="selection3" />
              <label htmlFor="selection3"> Automated process starts.</label>
              <div className="content">
                The automated process starts as soon as <br /> your clothes go
                into the machine. Duis <br /> cursus, mi quis viverra ornare.
              </div>
            </li>
            <li>
              <input type="checkbox" id="selection4" />
              <label htmlFor="selection4">Starts the automated process.</label>
              <div className="content">
                The automated process starts as soon as <br /> your clothes go
                into the machine. Duis <br /> cursus, mi quis viverra ornare.
              </div>
            </li>
          </ul>
        </div>
        <div>
          <img src={service} />
        </div>
      </div>
      <Link to='/events' className='btnLink'>
        <button>Book Your Destination</button>
        </Link>
    </div>
  );
}

export default Faq;
