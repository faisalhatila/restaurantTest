import React, { Component } from "react";

export default class Cover extends Component {
  render() {
    return (
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
                <button className="coverDivInputFieldDivButton">Search</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
