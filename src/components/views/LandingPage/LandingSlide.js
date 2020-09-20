import React from "react";

function LandingSlide(props) {
  return (
    <div className="slide">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div className="beans-slider">
              <div className="border">
                <h1 className="slider-heading">Design Beyond Time</h1>
                <div className="img-holder">
                  <img src={props.bg} alt="image description" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingSlide;
