import React from "react";
import "../small Components cssFiles/box.css";
function Box(props) {
  return (
    <>
      <div className="box">
        <img src={props.location} alt="" className="imgSizer" />
        <h2 className="boxHeading">{props.name}</h2>
        <p className="boxPara">
          "<i>{props.para}</i>"
        </p>
        <button className="btn">
          View<i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </>
  );
}

export default Box;
