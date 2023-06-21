import React from "react";
import "./Contact.css"
import CodePathGiantImage from "../../assets/giant_codepath.6952ef57.svg";

const ContactSection = () => {
  return (
    <section className="mx-auto about-section my-5">
      <div className="container">
        <div className="row">
        <div className="col-lg-9">
            <h2 className="about-title">Contact Us</h2>
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
          <div className="col-lg-3">
            <img
              src={CodePathGiantImage}
              alt="About"
              className="about-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;