import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";
export default class GetConnected extends Component {
  render() {
    return (
      <div className="container mt-5">
        <div className="getConnectedComponentRow1">
          <h2>Get Connected With Us</h2>
          <p>in any you want to</p>
        </div>
        <div className="getConnectedComponentRow2 row mt-3">
          <div className="col-12 col-lg-4 col-md-4 getConnectedColmn">
            <ScrollAnimation animateIn="fadeInDown">
              <div className="getConnectedRow2Col getConnectedRow2Col1">
                <i class="fas fa-car"></i>
              </div>
              <h3 className="getConnectedContentHeading mt-3">Customers</h3>
              <p className="getConnectedContentPara">
                It is a long established fact that a reader will be distracted
                by the readable content of a page
              </p>
            </ScrollAnimation>
          </div>
          <div className="col-12 col-lg-4 col-md-4 getConnectedColmn">
            <ScrollAnimation animateIn="fadeInUp">
              <div className="getConnectedRow2Col getConnectedRow2Col2">
                <i class="fas fa-car"></i>
              </div>
              <h3 className="getConnectedContentHeading mt-3">Restaurants</h3>
              <p className="getConnectedContentPara">
                It is a long established fact that a reader will be distracted
                by the readable content of a page
              </p>
            </ScrollAnimation>
          </div>
          <div className="col-12 col-lg-4 col-md-4 getConnectedColmn">
            <ScrollAnimation animateIn="fadeInDown">
              <div className="getConnectedRow2Col getConnectedRow2Col3">
                <i class="fas fa-car"></i>
              </div>
              <h3 className="getConnectedContentHeading mt-3">Drivers</h3>
              <p className="getConnectedContentPara">
                It is a long established fact that a reader will be distracted
                by the readable content of a page
              </p>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    );
  }
}
