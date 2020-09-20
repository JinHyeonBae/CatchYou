import React from "react";

function Banner(props) {
  return (
    <section
      className="banner wow fadeInUp"
      data-wow-delay="0.4s"
      style={{ backgroundImage: `url(${props.bg})` }}>
      <span className="sale-percent">Best of best</span>
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div className="caption">
              <h1 className="main-heading heading">{props.title}</h1>
              <ul className="list-unstyled breadcrumbs">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>{props.title}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <span className="year">TRENDS FOR {new Date().getFullYear()}</span>
    </section>
  );
}

export default Banner;
