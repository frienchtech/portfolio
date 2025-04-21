import React from "react";
import "../cssFiles/Section2.css";
function Section2() {
  return (
    <>
      <div class="section2">
        <div class="containerSection2">
          <img src="../about.jpg" alt="" class="section2Image" />
          <div class="textContainer">
            <h1 class="headerSection2">
              Our Purpose and <br />
              Aspiration
            </h1>
            <p class="paraSection2">
              Driven by creativity and excellence, our mission is to transform
              ideas into impactful digital experiences. We envision a future
              where brands connect with their audiences in meaningful ways.{" "}
              <br />
              <br />
              Integrity, innovation, and collaboration are at the heart of
              everything we do, guiding us as we create value for our clients.
            </p>
            <br />
            <br />
            <hr />
            <div class="flexBoxContainer">
              <div class="flexContainer">
                <button class="percent">%</button>
                <h2>95%</h2>
                <p>Success Rate</p>
              </div>
              <div class="flexContainer">
                <button class="percent">
                  <i class="fa-solid fa-medal"></i>
                </button>
                <h2>13+</h2>
                <p>Project Launched</p>
              </div>
              <div class="flexContainer">
                <button class="percent">
                  <i class="fa-solid fa-list-check"></i>
                </button>
                <h2>100+</h2>
                <p>Project Completed</p>
              </div>
              <div class="flexContainer">
                <button class="percent">
                  <i class="fa-solid fa-user-plus"></i>
                </button>
                <h2>100+</h2>
                <p>Satisfied Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section2;
