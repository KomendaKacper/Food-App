import React from "react";
import { FoodCard } from "./FoodCard";

export const Carousel = () => {
  return (
    <div className="container mt-5" style={{ height: "600px" }}>
      <div className="d-none d-lg-block">
        <div className="homepage-carousel-title text-center">
          <h3>Which food are you looking for?</h3>
        </div>

        <div
          id="carouselExampleControls"
          className="carousel slide mt-5"
          data-bs-interval="true"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="d-flex justify-content-center">
                <div className="d-flex flex-row flex-nowrap">
                  <FoodCard name="pizza" />
                  <FoodCard name="spaghetti" />
                  <FoodCard name="burger" />
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="d-flex justify-content-center">
                <div className="d-flex flex-row flex-nowrap">
                  <FoodCard name="fish" />
                  <FoodCard name="sushi" />
                  <FoodCard name="chineese" />
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="d-flex justify-content-center">
                <div className="d-flex flex-row flex-nowrap">
                  <FoodCard name="burrito" />
                  <FoodCard name="taco" />
                  <FoodCard name="steak" />
                </div>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </a>
        </div>
      </div>

      {/* Mobile view */}
      <div className="d-lg-none mt-3">
        <div className="container d-flex justify-content-center">
          <div className="row">
            <FoodCard name="Search food" />
          </div>
        </div>
      </div>
    </div>
  );
};
