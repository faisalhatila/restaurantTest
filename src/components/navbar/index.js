import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  state = {
    mobileNav: false,
    currentPage: "/",
  };
  handleSearchIconClick = () => {
    document.getElementById("mobileNavHeader1").classList.add("d-none");
    document.getElementById("mobileNavHeader2").classList.add("d-none");
    document.getElementById("searchBarContainer").classList.remove("d-none");
  };
  handleCloseIconClick = () => {
    document.getElementById("mobileNavHeader1").classList.remove("d-none");
    document.getElementById("mobileNavHeader2").classList.remove("d-none");
    document.getElementById("searchBarContainer").classList.add("d-none");
  };
  handleClick = () => {
    if (!this.state.mobileNav) {
      this.setState({
        mobileNav: true,
      });
      document.body.classList.add("mobile-nav-active");
      document.getElementById("mobile-body-overlay").classList.remove("d-none");
      document.getElementById("mobile-body-overlay").classList.add("d-block");
      document.getElementById("toggleButton").classList.remove("fa-bars");
      document.getElementById("toggleButton").classList.add("fa-times");
    } else {
      this.setState({
        mobileNav: false,
      });
      document.body.classList.remove("mobile-nav-active");
      document.getElementById("mobile-body-overlay").classList.add("d-none");
      document
        .getElementById("mobile-body-overlay")
        .classList.remove("d-block");
      document.getElementById("toggleButton").classList.add("fa-bars");
      document.getElementById("toggleButton").classList.remove("fa-times");
    }
  };
  render() {
    return (
      <div className="container navbarThirdRowContainer">
        <div
          id="navBarThirdRow"
          className="align-items-center container navbarThirdRow row justify-content-between"
        >
          <div
            id="mobileNavHeader1"
            className="navbarThirdRowCol1 col-6 col-lg-2 pl-lg-0"
          >
            <h3>snaxa</h3>
          </div>
          <div id="mobileNavHeader2" className="col-6 d-lg-none p-0">
            <div className="row justify-content-end pr-2 align-items-center">
              <img
                src="assets/img/icons/search2.png"
                id="mobileNavHeader3"
                className="d-lg-none"
                onClick={this.handleSearchIconClick}
                style={{ maxWidth: "25px", transform: "translate(-1px, 1px)" }}
              />
              <Link
                id="mobileNavHeader2"
                to="/cart"
                className="pl-2 redFont d-lg-none"
                style={{ transform: "translateX(-5px)" }}
              >
                <i
                  class="fas fa-cart-plus pl-2 redFont"
                  style={{ fontSize: "25px" }}
                />
              </Link>
              <button
                type="button"
                onClick={this.handleClick}
                id="mobile-nav-toggle"
                style={{ border: "none", background: "transparent" }}
              >
                <i
                  id="toggleButton"
                  className="fa fa-bars"
                  aria-hidden="true"
                  style={{
                    color: "#000",
                    fontSize: "25px",
                    transform: "translateY(2px)",
                  }}
                />
              </button>
            </div>
          </div>
          <div id="searchBarContainer" className="container d-none d-lg-none">
            <div className="d-flex searchBarDiv justify-content-between align-items-center">
              <input type="text" placeholder="Search" />
              <i class="fas fa-times" onClick={this.handleCloseIconClick}></i>
            </div>
          </div>
          <div className="navbarThirdRowCol2">
            <div
              id="mobile-body-overlay"
              className="d-none"
              style={{
                width: "100%",
                height: "100%",
                zIndex: "997",
                top: 0,
                left: 0,
                position: "fixed",
                background: "rgba(0, 0, 0, 0.7)",
              }}
            />
            <nav id="nav-menu-container">
              <ul class="nav-menu">
                <li class="menu-active womenTab">
                  <a href="#intro">Restaurants</a>
                  {/* <i class="dorpDownActive fas fa-chevron-down" /> */}
                </li>
                <li className="menTab">
                  <a href="#about">My Orders</a>
                  {/* <i class="fas fa-chevron-down" /> */}
                </li>
                <li>
                  <a href="#services">Ramadan Deals</a>
                  {/* <i class="fas fa-chevron-down" /> */}
                </li>
                <li>
                  <a href="#portfolio">Offers</a>
                  {/* <i class="fas fa-chevron-down" /> */}
                </li>
                <li>
                  <a href="#team">Become A Partner</a>
                  {/* <i class="fas fa-chevron-down" /> */}
                </li>
              </ul>
            </nav>
            <nav id="mobile-nav">
              <ul className="" style={{ touchAction: "pan-y" }}>
                <li>
                  <a href="#">Restaurants</a>
                </li>
                <li>
                  <a href="#">My Orders</a>
                </li>
                <li>
                  <a href="#">Ramadan Deals</a>
                </li>
                <li>
                  <a href="#">Offers</a>
                </li>
                <li>
                  <a href="#">Become A Partner</a>
                </li>
                {/* <li>
                  <Link to="/cart">
                    My Cart
                    <i class="fas fa-shopping-bag pl-2 redFont" />
                  </Link>
                </li> */}
              </ul>
            </nav>
          </div>
          <div className="navbarThirdRowCol3">
            <p>
              <i class="far fa-user"></i> &nbsp; |&nbsp;{" "}
              <i class="fas fa-cart-plus"></i>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
