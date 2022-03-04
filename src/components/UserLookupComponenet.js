import React from "react";
import { Component } from "react";
import UserService from "../services/UserService";

export default class UserLookup extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "", users: null };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount = async () => {};

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("Returned Results For: " + this.state.value);
    console.log(this.state.value);
    console.log(
      UserService.searchByLastName(this.state.value).then((val) => {
        this.setState({
          users: val.data,
        });
      })
    );
    event.preventDefault();
  }

  conditionalRenderOfReslts = () => {
    if (this.state.users == null) {
      return <div></div>;
    } else {
      return (
        <div style = {{flexDirection: "column", display: 'flex'}}>
            <text style = {{flex: 1}}>ID: {this.state.users[0].id}</text>
          <text style = {{flex: 1}}>FirstName: {this.state.users[0].firstName}</text>
          <text style = {{flex: 1}}>LastName: {this.state.users[0].lastName}</text>
          <text style = {{flex: 1}}>Email: {this.state.users[0].email}</text>
        </div>
      );
    }
  };

  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          flexDirection: 'column'
        }}
      >
        <div style = {{flex: 1}}>
          <form onSubmit={this.handleSubmit}>
            <label>
              Search By Last Name:
              <input
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
              />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
        <div>
        {this.conditionalRenderOfReslts()}
        </div>
      </div>
    );
  }
}
