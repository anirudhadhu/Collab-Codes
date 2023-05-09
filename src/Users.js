import React, { Component } from "react";
import axios from "axios";
import AdminPanel from "./admin";
import ReactDOM from "react-dom";

const handleAdminClick = () => {
  ReactDOM.render(<AdminPanel />, document.body);
};

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    fetch("https://taxcalc.onrender.com/api/admin/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("accessToken"),
      },
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          users: data.users.filter((user) => user.role === "user"),
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  handleDeleteUser = (id) => {
    fetch(`https://taxcalc.onrender.com/api/user/deleteUser/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("accessToken"),
      },
    })
      .then((data) => {
        console.log(data);
        this.setState({
          users: this.state.users.filter((user) => user._id !== id),
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    return (
      <div className="container">
        <h1>User List</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((user) => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <button onClick={() => this.handleDeleteUser(user._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={{ marginBottom: "100px", marginLeft: "500px" }}>
          <button onClick={handleAdminClick}>Back</button>
        </div>
      </div>
    );
  }
}

export default Users;
