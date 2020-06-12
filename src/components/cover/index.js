import React, { Component } from "react";

export default class Cover extends Component {
  render() {
    return (
      <div>
        <div
          style={{
            //   backgroundImage: "url(assets/img/cover.jpg)",
            background:
              "linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(assets/img/cover.jpg)",
          }}
          className="coverDiv"
        >
          <div className="d-flex align-items-center justify-content-between">
            <div className="coverDivTextDiv">
              <h3>What do you want to EAT?</h3>
              <div className="container mt-3">
                <div className="row justify-content-center">
                  <div className="coverDivInputFieldDiv">
                    <i class="fas fa-search coveDivInputDivIcons"></i>
                    <input
                      placeholder="Try any restaurant..."
                      className="coverDivInputField"
                    />
                    <i class="fas fa-map-marker-alt coveDivInputDivIcons"></i>
                  </div>
                  <button className="coverDivInputFieldDivButton">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="coverDivLastDivParent d-none d-md-flex d-lg-flex">
          <div className="parallax_scroll coverDivLastDiv row">
            <div className="col-4 d-flex">
              <i
                class="fas fa-hand-holding"
                style={{ color: "#68E5FF", fontSize: "25px" }}
              ></i>
              <div className="d-flex flex-column">
                <h5>Over 1 Million</h5>
                <p>Orders Successfully delivered to customer</p>
              </div>
            </div>
            <div className="col-4  d-flex">
              <i
                class="fas fa-star"
                style={{ color: "#FFB300", fontSize: "20px" }}
              ></i>{" "}
              <div className="d-flex flex-column">
                <h5>4.5 Stars</h5>
                <p>Google Rating</p>
              </div>
            </div>
            <div className="col-4  d-flex">
              <i
                class="fas fa-hand-holding"
                style={{ color: "#68E5FF", fontSize: "25px" }}
              ></i>
              <div className="d-flex flex-column">
                <h5>700k Customers</h5>
                <p>Build Relationship of trust</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
