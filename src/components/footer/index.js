import React from "react";

const Footer = (props) => {
  return (
    <div className="pt-5 footerMainParent">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-4 col-md-4 footerCol1">
            <h2>snaxa</h2>
            <div className="d-flex">
              <i class="fab fa-facebook pr-2"></i>
              <i class="fab fa-twitter pr-2"></i>
              <i class="fab fa-instagram pr-2"></i>
              <i class="fab fa-pinterest pr-2"></i>
            </div>
          </div>
          <div className="col-12 col-lg-4 col-md-4 footerCol2">
            <h5>Estd. 2019</h5>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page
            </p>
            <div className="d-flex mt-4 align-items-center">
              <i class="fas fa-phone-alt pr-3"></i>
              <p>021-1234567</p>
            </div>
            <div className="d-flex mt-4 align-items-center">
              <i class="fas fa-envelope-open-text pr-3"></i>
              <p>info@snaxa.com.</p>
            </div>
          </div>
          <div className="col-12 col-lg-4 col-md-4 footerCol3">
            <div className="d-flex align-items-center">
              <i class="fas fa-envelope-square pr-3"></i>
              <p>Stay up to date on the latest from snaxa</p>
            </div>
            <div className="d-flex mt-4 align-items-center">
              <input
                type="text"
                placeholder="Enter your email address"
                className="subscribeInputField"
              />
            </div>
            <div className="subscribeButtonDiv mt-3 d-flex justify-content-center">
              <button className="subscribeButton">Send</button>
            </div>
          </div>
        </div>
        <div className="footerSecRow mt-4">
          <ul className="footerNav pt-3">
            <li>Home</li>
            <li>Restaurants</li>
            <li>My Orders</li>
            <li>Ramadan Deals</li>
            <li>Offers</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
