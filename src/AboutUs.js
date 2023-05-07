import React from "react";
import Homepage from "./homepage";
import ReactDOM from "react-dom";

function AboutUs() {
  const handleHomeClick = () => {
    ReactDOM.render(<Homepage />, document.body);
  };

  return (
    <div>
      <div style={{ marginTop: "0px", marginLeft: "1300px" }}>
        <button onClick={handleHomeClick}>Back</button>{" "}
      </div>
      <h1
        style={{
          fontSize: "2rem",
          textAlign: "center",
          fontWeight: "bold",
          marginBottom: "30px",
          color: "black",
        }}
      >
        About Bass
      </h1>

      <p>
        BASS is a team of dedicated students from Herald College in Kathmandu.
        Our mission is to develop innovative and user-friendly software
        solutions. As part of our Collaborative Development module, we have
        created a tax calculation system using agile methodology and its
        artifacts. Our tax calculation system is a robust and intuitive tool
        that allows users to easily calculate their taxes by selecting from 4
        different tax varieties. The system is fully CRUD-enabled, providing
        users with complete control over their data. At BASS, we are committed
        to delivering high-quality software solutions that simplify complex
        processes for our users.
      </p>

      {/* <img src={require("./images/logo.jpg.png")} alt='' />
      <div style={{position: 'center', width: '100px', height: '100px', left: '100px', top: '0px'}}>
          </div> */}

      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ padding: "10px" }}>
          <img
            src={require("./images/bibhusan.png")}
            style={{ width: "250px", height: "200px" }}
          />
          <p>Project Manager</p>
        </div>
        <div style={{ padding: "10px" }}>
          <img
            src={require("./images/sujan.png")}
            style={{ width: "250px", height: "200px" }}
          />
          <p>Business Analyst</p>
        </div>
        <div style={{ padding: "10px" }}>
          <img
            src={require("./images/me.JPG")}
            style={{ width: "250px", height: "200px" }}
          />
          <p>Developer</p>
        </div>
        <div style={{ padding: "10px" }}>
          <img
            src={require("./images/pratap.png")}
            style={{ width: "250px", height: "200px" }}
          />
          <p>Developer</p>
        </div>

        <div style={{ padding: "10px" }}>
          <img
            src={require("./images/aryan.png")}
            style={{ width: "250px", height: "200px" }}
          />
          <p>Developer</p>
        </div>
      </div>

      <h2
        style={{
          fontSize: "2rem",
          textAlign: "center",
          fontWeight: "bold",
          marginBottom: "30px",
          color: "black",
        }}
      >
        Our Respected Supervisors
      </h2>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ padding: "10px" }}>
          <img
            src={require("./images/anmolsir.png")}
            style={{ width: "250px", height: "200px" }}
          />
          <p>Mr Anmol Adhikari Sir</p>
        </div>

        <div style={{ padding: "10px" }}>
          <img
            src={require("./images/aadarshsir.png")}
            style={{ width: "250px", height: "200px" }}
          />
          <p>Mr Adarsha Khadka Sir</p>
        </div>

        <div style={{ padding: "10px" }}>
          <img
            src={require("./images/birajsir.png")}
            style={{ width: "250px", height: "200px" }}
          />
          <p>Mr Biraj Dulal Sir</p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
