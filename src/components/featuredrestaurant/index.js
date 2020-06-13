import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";

export default class FeaturedRestaurant extends Component {
  state = {
    isLoading: true,
    isError: false,
    data: [],
  };
  componentDidMount = () => {
    this.getData();
  };
  generateFakeData = () =>
    new Promise((resolve, reject) => {
      const images = [
        "assets/img/res1.jpg",
        // "assets/img/res2.jpg",
        "assets/img/res3.jpg",
      ];
      const names = ["Alaska Restaurant", "Star Bucks", "Cafe 360"];
      const descs = [
        "It is a long established fact that a reader will be distracted by the readable content of a page",
        "It is a long established fact that a reader will be distracted by the readable content of a page",
        "It is a long established fact that a reader will be distracted by the readable content of a page",
      ];
      const getRandomNumberFromArray = (arr = []) =>
        arr[Math.round(Math.random() * (arr.length - 1 - 0) + 0)];
      const payload = [];
      [...Array(3)].map((d) =>
        payload.push({
          image: getRandomNumberFromArray(images),
          name: getRandomNumberFromArray(names),
          description: getRandomNumberFromArray(descs),
        })
      );
      setTimeout(() => {
        resolve(payload);
      }, 5000);
    });
  getData = async () => {
    try {
      this.setState({ isLoading: true });
      const request = await this.generateFakeData();
      this.setState({ data: request, isLoading: false });
    } catch (error) {
      this.setState({ isLoading: false, isError: error });
      console.log("Featured Restaurant -> getData -> error", error);
    }
  };
  render() {
    const { data, isError, isLoading } = this.state;
    return (
      <div style={{ backgroundColor: "#F6F6F6", marginTop: "5rem" }}>
        <div className="container pt-5 pb-5">
          <div className="featuredRestaurantFirstRow">
            <h2>Featured Restaurant</h2>
            <p>Based on rating</p>
          </div>
          {isLoading ? (
            <div className="featuredRestaurantSecRow mt-5">
              <div className="row">
                <div className="col-12 col-lg-4 col-md-4">
                  <img
                    src="assets/img/featuredRestaurant.jpg"
                    style={{
                      maxWidth: "100%",
                      filter: "blur(5px)",
                      maxHeight: "233px",
                      minWidth: "100%",
                    }}
                  />
                  <div
                    style={{
                      padding: "10px",
                      backgroundColor: "#fff",
                      filter: "blur(3px)",
                    }}
                  >
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
                    style={{
                      maxWidth: "100%",
                      filter: "blur(5px)",
                      maxHeight: "233px",
                      minWidth: "100%",
                    }}
                  />
                  <div
                    style={{
                      padding: "10px",
                      backgroundColor: "#fff",
                      filter: "blur(3px)",
                    }}
                  >
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
                    style={{
                      maxWidth: "100%",
                      filter: "blur(5px)",
                      maxHeight: "233px",
                      minWidth: "100%",
                    }}
                  />
                  <div
                    style={{
                      padding: "10px",
                      backgroundColor: "#fff",
                      filter: "blur(3px)",
                    }}
                  >
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
          ) : null}
          <ScrollAnimation animateIn="fadeInUp">
            {" "}
            <div className="featuredRestaurantSecRow mt-5">
              <div className="row">
                {!isLoading
                  ? data.map((items) => {
                      return (
                        <div className="col-12 col-lg-4 col-md-4 featuredRestaurants">
                          <div className="imageContainer">
                            <img
                              src={items.image}
                              style={{
                                // maxWidth: "100%",
                                minWidth: "100%",
                                maxHeight: "233px",
                              }}
                              className="resImage"
                            />
                            <div className="middle">
                              <div class="text">View</div>
                            </div>
                          </div>
                          <div
                            style={{
                              padding: "10px",
                              backgroundColor: "#fff",
                            }}
                          >
                            <h5 style={{ color: "#F14F55", margin: 0 }}>
                              {items.name}
                            </h5>
                            <p style={{ fontSize: "13px", margin: 0 }}>
                              {items.description}
                            </p>
                          </div>
                        </div>
                      );
                    })
                  : null}
              </div>
            </div>
          </ScrollAnimation>
          <div className="featuredRestaurantThirdRow mt-4 row justify-content-center">
            <button className="featuredRestaurantButton">View All</button>
          </div>
        </div>
      </div>
    );
  }
}
