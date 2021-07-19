import React from "react";

function Carousel() {
  return (
    <carousel>
      <div id="gif" class="row">
        <img
          className="gif"
          src="https://www.animatedimages.org/data/media/165/animated-football-and-soccer-image-0093.gif"
        />
        <h4>Get your updates on FootBall </h4>
      </div>
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="fb1.png"
              className="d-block w-100 car"
              alt="soccer"
              width="550"
              height="500"
            />
          </div>
          <div className="carousel-item">
            <img
              src="fb2.png"
              className="d-block w-100 car"
              alt="soccer"
              width="550"
              height="500"
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </carousel>
  );
}

export default Carousel;
