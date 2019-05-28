import React, { Component } from "react";
class Users extends Component {
  state = {
    users: [],
    newUser: {
      name: "",
      password: ""
    },
    urlApis: "http://localhost:4000/users"
  };

  componentDidMount() {
    fetch(this.state.urlApis)
      .then(users => {
        return users.json();
      })
      .then(result => {
        console.log(result);
        this.setState({ users: result });
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    return (
      <div className="container">
        <table className="table table-striped table-dark">
          <thead>
            <tr>
              <td>ID</td>
              <td>USERNAME</td>
              <td>CREATEDATE</td>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.create_date}</td>
              </tr>
            ))}
          </tbody>
        </table>
                <h2>Add new data</h2>
        <div className="form-inline">
        <label className="mb-2 mr-sm-2" htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              className="form-control mb-2 mr-sm-2"
              onChange={this.onChangeUsername}
              value={this.state.newUser.name}
            />
          <label htmlFor="password" className="mb-2 mr-sm-2">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              className="form-control mb-2 mr-sm-2"
              onChange={this.onChangePassword}
              value={this.state.newUser.password}
            />
          <button className="btn btn-success btn-md mb-2" onClick={this.postData}>
              Submit
            </button>
        </div>
        <br/>
      </div>
    );
  }

  onChangeUsername = name => {
    this.setState({
      newUser: {
        name: name.target.value,
        password: this.state.newUser.password
      }
    });
  };

  onChangePassword = pass => {
    this.setState({
      newUser: {
        name: this.state.newUser.name,
        password: pass.target.value
      }
    });
  };

  postData = () => {
    console.log(this.state.newUser);
    fetch(this.state.urlApis, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state.newUser)
    }).then(response => {
        console.log(response);
        return response.json();
    })
      .then(result => {
        console.log(result);
        this.setState({users: result});
        this.setState({newUser: {
            name:'',
            password:''
        }});
      })
      .catch(error => {
        console.log(error);
      });
  };
}

export default Users;
