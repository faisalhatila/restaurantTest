import React, { Component } from "react";

export default class FeaturedRestaurant extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "#F6F6F6", marginTop: "5rem" }}>
        <div className="container pt-5 pb-5">
          <div className="featuredRestaurantFirstRow">
            <h2>Featured Restaurant</h2>
            <p>Based on rating</p>
          </div>
          <div className="featuredRestaurantSecRow">
            <div className="row">
              <div className="col-12 col-lg-4 col-md-4">
                <img
                  src="assets/img/featuredRestaurant.jpg"
                  style={{ maxWidth: "100%" }}
                />
                <div style={{ padding: "10px", backgroundColor: "#fff" }}>
                  <h5 style={{ color: "#F14F55", margin: 0 }}>
                    Alaska Restaurant
                  </h5>
                  <p style={{ fontSize: "13px", margin: 0 }}>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page
                  </p>
                </div>
              </div>
              <div className="col-12 col-lg-4 col-md-4">
                <img
                  src="assets/img/featuredRestaurant.jpg"
                  style={{ maxWidth: "100%" }}
                />
                <div style={{ padding: "10px", backgroundColor: "#fff" }}>
                  <h5 style={{ color: "#F14F55", margin: 0 }}>
                    Alaska Restaurant
                  </h5>
                  <p style={{ fontSize: "13px", margin: 0 }}>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page
                  </p>
                </div>
              </div>
              <div className="col-12 col-lg-4 col-md-4">
                <img
                  src="assets/img/featuredRestaurant.jpg"
                  style={{ maxWidth: "100%" }}
                />
                <div style={{ padding: "10px", backgroundColor: "#fff" }}>
                  <h5 style={{ color: "#F14F55", margin: 0 }}>
                    Alaska Restaurant
                  </h5>
                  <p style={{ fontSize: "13px", margin: 0 }}>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="featuredRestaurantThirdRow mt-4 row justify-content-center">
            <button className="featuredRestaurantButton">View All</button>
          </div>
        </div>
      </div>
    );
  }
}
