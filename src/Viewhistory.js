import React, { useState, useEffect } from "react";
import Homepage from "./homepage";
import ReactDOM from "react-dom";

const ViewHistory = () => {
  const handleHomeClick = () => {
    ReactDOM.render(<Homepage />, document.body);
  };
  const [history, setHistory] = useState([]);

  useEffect(() => {
    fetch("https://taxcalc.onrender.com/api/finance/allTaxes", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          // Convert the response object to an array of items
          const items = Object.entries(data).map(([key, value]) => ({
            id: value._id,
            tax: key,
            rate: value.amount,
          }));
          setHistory(items);
        });
      } else {
        console.error("Error fetching history");
      }
    });
  }, []);

  const handleDelete = (id, key) => {
    switch (key) {
      case "incomeTax":
        fetch(`https://taxcalc.onrender.com/api/finance/deleteIncome/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }).then((response) => {
          if (response.ok) {
            console.log("Income tax deleted");
          } else {
            console.error("Error deleting income tax");
          }
        });

        break;
      case "salesTax":
        fetch(`https://taxcalc.onrender.com/api/finance/deleteSales/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }).then((response) => {
          if (response.ok) {
            console.log("Sales tax deleted");
          } else {
            console.error("Error deleting income tax");
          }
        });
        break;
      case "vehicleTax":
        fetch(
          `https://taxcalc.onrender.com/api/finance/deleteVehicleTax/${id}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          }
        ).then((response) => {
          if (response.ok) {
            console.log("Vehicle tax deleted");
          } else {
            console.error("Error deleting income tax");
          }
        });
        break;
      case "valueAddedTax":
        fetch(
          `https://taxcalc.onrender.com/api/finance/deleteValueAddedTax/${id}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          }
        ).then((response) => {
          if (response.ok) {
            console.log("Value added tax deleted");
          } else {
            console.error("Error deleting income tax");
          }
        });
        break;
      default:
        break;
    }

    const updatedHistory = history.filter((item) => item.id !== id);
    setHistory(updatedHistory);
  };

  return (
    <div>
      <h2>View History</h2>
      <table>
        <thead>
          <tr>
            <th>Tax</th>
            <th>Rate</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {history.map((item) => (
            <tr key={item.id}>
              <td>{item.tax}</td>
              <td>{item.rate}</td>
              <td>
                <button onClick={() => handleDelete(item.id, item.tax)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ marginTop: "30px", textAlign: "center" }}>
        <button onClick={handleHomeClick}>Back</button>
      </div>
    </div>
  );
};

export default ViewHistory;
