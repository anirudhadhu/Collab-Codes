import React, { Component } from 'react';
import axios from 'axios';
import AdminPanel from './admin';
import ReactDOM from "react-dom";

const handleAdminClick = () => {
    ReactDOM.render(<AdminPanel />, document.body);
  };

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    axios.get('/api/users')
      .then(response => {
        const users = response.data;
        this.setState({
          users: users
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleDeleteUser = (id) => {
    axios.delete(`/api/users/${id}`)
      .then(response => {
        // refresh the user list
        axios.get('/api/users')
          .then(response => {
            const users = response.data;
            this.setState({
              users: users
            });
          })
          .catch(error => {
            console.log(error);
          });
      })
      .catch(error => {
        console.log(error);
      });
  }

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
            {this.state.users.map(user => (
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
        <div style={{ marginTop: "10px" }}>
        <button onClick={handleAdminClick}>Back</button>
      </div>

      </div>
    );
  }
}

export default Users;
