import React, { useState } from "react";
import ReactDOM from "react-dom";
import Homepage from "./homepage";

const Vehicletax = () => {
  const [vehicleType, setVehicleType] = useState("bike");
  const [ccType, setCcType] = useState("100");
  const [isLoading, setLoading] = useState(false);
  const [vehicleTax, setVehicleTax] = useState(0);

  const handleVehicleTypeChange = (event) => {
    setVehicleType(event.target.value);
  };

  const handleCcTypeChange = (event) => {
    setCcType(event.target.value);
  };

  const handleHomeClick = () => {
    ReactDOM.render(<Homepage />, document.body);
  };

  const calculateVehicleTax = () => {
    let tax = 0;

    if (vehicleType === "bike") {
      if (ccType <= 125) {
        tax = 2800;
      } else if (ccType <= 160) {
        tax = 4500;
      } else if (ccType <= 250) {
        tax = 5500;
      } else if (ccType <= 400) {
        tax = 9000;
      } else if (ccType <= 650) {
        tax = 20000;
      } else {
        tax = 30000;
      }
    } else if (vehicleType === "car") {
      if (ccType <= 1000) {
        tax = 21000;
      } else if (ccType <= 1500) {
        tax = 23500;
      } else if (ccType <= 2000) {
        tax = 25500;
      } else if (ccType <= 2500) {
        tax = 35500;
      } else if (ccType <= 2900) {
        tax = 41000;
      } else {
        tax = 41000 + Math.floor((ccType - 2900) / 100) * 2500;
      }
    }

    // ...
    setVehicleTax(tax);
    setLoading(true);
    fetch("https://taxcalc.onrender.com/api/finance/addVehicleTax", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("accessToken"),
      },
      body: JSON.stringify({ amount: tax }),
    })
      .then((response) => {
        setLoading(false);
        if (response.ok) {
          response.json().then((data) => {
          
            console.log(data);
          });
        } else {
          response.json().then((data) => {
            
            console.log(data.message);
          });
        }
      })
      .catch((error) => console.error(error));
  };

  return isLoading ? (
    <div style={{ marginTop: "25%", marginLeft: "50%" }}>
      <label htmlFor="tax">Loading...</label>
    </div>
  ) :(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "60vh",
        width: "100vh",
        border: "0px solid blue",
        borderRadius: "10px",
        padding: "10px",
        backgroundColor: "lightblue",
        transform: "translateY(2cm)",
        margin: "auto",
      }}
    >
      <h1
        style={{
          fontSize: "2rem",
          fontWeight: "bold",
          marginBottom: "30px",
          color: "black",
        }}
      >
        Vehicle Tax Calculator
      </h1>
      <div style={{ marginBottom: "20px" }}>
        <label style={{ marginRight: "10px", fontWeight: "bold" }}>
          Vehicle Type:
        </label>
        <select
          value={vehicleType}
          onChange={handleVehicleTypeChange}
          style={{ padding: "5px", borderRadius: "5px" }}
        >
          <option value="bike">Bike</option>
          <option value="car">Car</option>
        </select>
      </div>
      <div style={{ marginBottom: "20px" }}>
        <label style={{ marginRight: "10px", fontWeight: "bold" }}>
          CC Type:
        </label>
        <input
          type="text"
          value={ccType}
          onChange={handleCcTypeChange}
          style={{ padding: "5px", borderRadius: "5px" }}
        />
      </div>
      <button
        onClick={calculateVehicleTax}
        style={{
          padding: "15px",
          background: "#3d405b",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Calculate Tax
      </button>
      <div
        style={{
          marginTop: "20px",
          fontWeight: "bold",
        }}
      >
        Vehicle Tax: {vehicleTax}
      </div>
      <div style={{ marginTop: "30px" }}>
        <button onClick={handleHomeClick}>Back</button>{" "}
      </div>
    </div>
  );
};

export default Vehicletax;
