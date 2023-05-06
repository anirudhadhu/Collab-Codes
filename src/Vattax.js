import React, { useState } from "react";
import ReactDOM from "react-dom";
import Homepage from "./homepage";

const VatTaxCalculator = () => {
  const [price, setPrice] = useState(0);
  const [vatRate, setVatRate] = useState(13);

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleVatRateChange = (event) => {
    setVatRate(event.target.value);
  };
  const handleHomeClick = () => {
    ReactDOM.render(<Homepage />, document.body);
  };

  const calculateVatTax = () => {
    const vatTax = price * vatRate;
    return vatTax.toFixed(2);
  };

  return (
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
        Vat Tax Calculator
      </h1>

      <div style={{ marginBottom: "20px" }}>
        <label style={{ marginRight: "10px", fontWeight: "bold" }}>
          Price (excluding VAT):
          <input
            type="number"
            value={price}
            onChange={handlePriceChange}
            style={{ padding: "5px", borderRadius: "5px" }}
          />
        </label>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <label style={{ marginRight: "10px", fontWeight: "bold" }}>
          VAT Rate:
          <input
            type="number"
            step="0.01"
            value={vatRate}
            onChange={handleVatRateChange}
            style={{ padding: "5px", borderRadius: "5px" }}
          />
        </label>
      </div>
      <div>
        <button onClick={calculateVatTax} style={{
          padding: "15px",
          background: "#3d405b",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}>Calculate Vat Tax</button>
        <div
        style={{
          marginTop: "20px",
          fontWeight: "bold",
        }}
      >
       {price > 0 && <div>VAT Tax: NPR {calculateVatTax()}</div>}
      </div>
      </div>
      <div>
        <div style={{ marginTop: "30px" }}>
          <button onClick={handleHomeClick} >Back</button>{" "}
        </div>
      </div>
    </div>
  );
};

export default VatTaxCalculator;
