import React from "react";
import "./About.css"
import CodePathGiantImage from "../../assets/giant_codepath.6952ef57.svg";

const AboutSection = () => {
  return (
    <section className="mx-auto about-section my-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <img
              src={CodePathGiantImage}
              alt="About"
              className="about-image"
            />
          </div>
          <div className="col-lg-9 d-flex flex-column justify-content-start align-items-end">
            <h2 className="about-title">About Us</h2>
            <p className="about-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              varius mauris eget mi pulvinar, non sagittis justo ultricies.
              Donec ut scelerisque metus, ac cursus mauris. Nam sit amet
              consectetur elit. Integer maximus purus et mi consectetur, non
              faucibus elit fermentum.
            </p>
            <p className="about-description">
              Vestibulum feugiat quam enim, nec fringilla dui interdum in.
              Donec elementum consectetur sem at tristique. Vivamus lobortis
              enim ut elit fermentum, nec semper mi malesuada. Mauris congue
              lobortis nibh, at aliquet nulla euismod ac.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
