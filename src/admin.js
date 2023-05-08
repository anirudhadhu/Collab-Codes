import React, { Component } from 'react';
import axios from 'axios';
import Users from './Users';
import ReactDOM from 'react-dom';
import LoginForm from './Login';


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
      vehicleTax: 0
    };
  }

  componentDidMount(){
      axios.get('/api/taxinfo')
        .then(response => {
            const data = response.data;
            this.setState({
                incomeTax: data.incomeTax,
                salesTax: data.salesTax,
                vat: data.vat,
                vehicleTax: data.vehicleTax
            });
        })
        .catch(error => {
            console.log(error);
        });
  }

  render() {
    return (
      <div className="container">
        <h1>Admin Panel</h1>
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
        <button onClick={handleUserClick}>Number of users</button>

        <div style={{ marginTop: "10px" }}>
        <button onClick={handleLoginClick}>Sign Out</button>
      </div>
      </div>
      
    );
  }
}

export default AdminPanel;
