import React from "react";
import videomain from "../../Components/assets/samplevideo.mp4";
import "./Section.css";

function Section() {
  return (
    <div>
      <video
        width="vw"
        height="vh"
        loop
        muted
        autoPlay
        controls=""
        style={{
          //  position: "absolute",
          //  width: "vw",
          // //  top: "50%",
          //  height:"vh",
          //  objectFit: "cover",
          //  transform: "translate(-50%,-50%)",
          //  zIndex: "-1",
          //             position: "absolute",
          //   right: "0",
          // //   left: "0",
          //   width: "100%",
          // //   width: "100%",
          //   minHeight: "100vh",
          //   padding: "100px",
          // //   display: flex,
          // //   justifyContent: space-between,
          // //   align-items: center,
          //   background:" #111",
          //   transition: "0.5s",
          //   zIndex: "2",
          position: "absolute",
          top: " 0",
          left: "0",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: " 0.8",
        }}
      >
        <source src={videomain} type="video/mp4" />
      </video>
      <div className="paracontainer"></div>
      <div class="content">
        <h2>Welcome To Paradise!!! </h2>
        <h3>Once in a lifetime Opportunity!!</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <a href="#">Explore</a>
      </div>
    </div>
  );
}

export default Section;
