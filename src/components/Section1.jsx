import React from "react";
import "../cssFiles/Section1.css";

function Section1() {
  return (
    <>
      <div className="section1">
        <h1 className="headerOfSection">
          Transforming Ideas into <br />
          <span>Digital Excellence</span>
        </h1>
        <p className="paraOfSection">
          Innovate Your Brand with Creative Excellence. Let’s Shape Your Digital
          Journey.
        </p>
        <button className="btnServices ">
          Explore Services<i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </>
  );
}

export default Section1;
