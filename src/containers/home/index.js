import React, { Component } from "react";
import { Link } from "react-router-dom";
import { GetConnected, FeaturedRestaurant } from "../../components";

class HomeContainer extends Component {
  state = {};
  render() {
    return (
      <div className="home-container">
        <GetConnected />
        <FeaturedRestaurant />
      </div>
    );
  }
}

export default HomeContainer;
