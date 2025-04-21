import React from "react";
import "../cssFiles/Section3.css";

function Section3() {
  return (
    <>
      <div className="section3">
        <h1>
          Empowering Your Brand with Comprehensive <br />
          <span>Solutions</span>
        </h1>
        <div className="containerMainBox">
          <div className="column1">
            <button className="circle">1</button>
            <div className="textBox">
              <h2>Website Development</h2>
              <p>
                Create beautiful websites that captivate visitors and achieve
                your goals. With modern designs and easy-to-use navigation,{" "}
                <br />
                we ensure a smooth online journey that enhances your brand.
                Let's build your website together!
              </p>
            </div>
            <img src="../website.png" alt="" className="websiteImage" />
          </div>
          <div className="column1">
            <button className="circle">2</button>
            <div className="textBox">
              <h2>APP Development</h2>
              <p>
                We build awesome apps that people can't get enough of. Our team
                knows how to make apps that are super easy to use,
                <br />
                so yours will really pop.Let's bring your ideas to life and
                create something amazing together!
              </p>
            </div>
            <img src="../mobile-app.png" alt="" className="websiteImage" />
          </div>
          <div className="column1">
            <button className="circle">3</button>
            <div className="textBox">
              <h2>UI/UX Designing</h2>
              <p>
                Craft a unique identity with our creative brand design. Stand
                out, captivate your audience, and leave a lasting impression.
              </p>
            </div>
            <img src="../designer.png" alt="" className="websiteImage" />
          </div>
          <div className="column1">
            <button className="circle">4</button>
            <div className="textBox">
              <h2>Desktop Application</h2>
              <p>
                Design and build desktop apps that are easy to use and work on
                any computer. With our expertise in React and Electron,
                <br />
                we create smooth and intuitive interfaces.Let's create something
                amazing for you!
              </p>
            </div>
            <img src="../cloud-data.png" alt="" className="websiteImage" />
          </div>
          <div className="column1">
            <button className="circle">5</button>
            <div className="textBox">
              <h2>SEO</h2>
              <p>
                Boost your online visibility with expert SEO strategies. We
                optimize your website to rank higher on search engines, driving
                <br />
                organic traffic and increasing your digital presence. Dominate
                the search results today!
              </p>
            </div>
            <img src="../local-seo.png" alt="" className="websiteImage" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Section3;
