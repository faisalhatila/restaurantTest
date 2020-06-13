import React, { Component } from "react";
import { Link } from "react-router-dom";
import { GetConnected } from "../../components";

class HomeContainer extends Component {
  state = {};
  render() {
    return (
      <div className="home-container">
        <GetConnected />
      </div>
    );
  }
}

export default HomeContainer;
