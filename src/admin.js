import React, { Component } from "react";
import Users from "./Users";
import ReactDOM from "react-dom";
import LoginForm from "./Login";

const handleUserClick = () => {
  ReactDOM.render(<Users />, document.body);
};

const handleLoginClick = () => {
  ReactDOM.render(<LoginForm />, document.body);
};

class AdminPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      incomeTax: 0,
      salesTax: 0,
      vat: 0,
      vehicleTax: 0,
    };
  }

  componentDidMount() {
    fetch("https://taxcalc.onrender.com/api/admin/totals", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("accessToken"),
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({
          incomeTax: data.totalIncomeNumber,
          salesTax: data.totalSalesNumber,
          vat: data.totalValueAddedTaxNumber,
          vehicleTax: data.totalVehicleTaxNumber,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      
      <div className="container">
        <div style={{ marginBottom: "100px", marginLeft: "1300px" }}>
        <button onClick={handleLoginClick}>Sign Out</button>{" "}
      </div>
      <h1
      >
        Admin Pannel
      </h1>
        
        <table>
          <thead>
            <tr>
              <th>Tax Type</th>
              <th>Number</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Income Tax</td>
              <td>{this.state.incomeTax}</td>
            </tr>
            <tr>
              <td>Sales Tax</td>
              <td>{this.state.salesTax}</td>
            </tr>
            <tr>
              <td>VAT</td>
              <td>{this.state.vat}</td>
            </tr>
            <tr>
              <td>Vehicle Tax</td>
              <td>{this.state.vehicleTax}</td>
            </tr>
          </tbody>
        </table>
        

        <div style={{ marginBottom: "200px", marginLeft: "500px" }}>
        <button onClick={handleUserClick}>Number of users</button>
      </div>
      
        {/* <button onClick={handleUserClick}>Number of users</button> */}

        {/* <div style={{ marginTop: "10px" }}>
          <button onClick={handleLoginClick}>Sign Out</button>
        </div> */}
      </div>
    );
  }
}

export default AdminPanel;
