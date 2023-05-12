import React, { useState } from "react";
import ReactDOM from "react-dom";
import Homepage from "./homepage";

const Salestax = () => {
  const [price, setPrice] = useState();
  const [taxRate, setTaxRate] = useState();
  const [tax, setTax] = useState();
  const [isLoading, setLoading] = useState(false);

  const calculateTax = () => {
    const calculatedTax = (price * taxRate) / 100;
    setTax(calculatedTax);
    setLoading(true);
    fetch("https://taxcalc.onrender.com/api/finance/addSales", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("accessToken"),
      },
      body: JSON.stringify({ amount: calculatedTax }),
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

  const handleHomeClick = () => {
    ReactDOM.render(<Homepage />, document.body);
  };

  return isLoading ? (
    <div style={{ marginTop: "25%", marginLeft: "50%" }}>
      <label htmlFor="tax">Loading...</label>
    </div>
  ) : (
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
        Sales Tax Calculator
      </h1>

      <div style={{ marginBottom: "20px" }}>
        <label style={{ marginRight: "10px", fontWeight: "bold" }}>
          Price:
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            style={{ padding: "5px", borderRadius: "5px" }}
          />
        </label>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <label style={{ marginRight: "10px", fontWeight: "bold" }}>
          Tax Rate:
          <input
            type="text"
            value={taxRate}
            onChange={(e) => setTaxRate(e.target.value)}
            style={{ padding: "5px", borderRadius: "5px" }}
          />
        </label>
      </div>

      <button
        onClick={calculateTax}
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

      <p>Tax: {tax}</p>

      <div style={{ marginTop: "10px" }}>
        <button onClick={handleHomeClick}>Back</button>
      </div>
    </div>
  );
};

export default Salestax;
