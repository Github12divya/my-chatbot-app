import React from "react";
import ProfilePic from "../Assets/john-doe-image.png.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">
        MedicalBot is trained to handle queries about minor illnesses and provides the best home remedy suggestions. It has been tested and uses machine learning to determine accuracy, ensuring reliable and effective results.
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
        With its intelligent analysis, MedicalBot delivers precise and trustworthy health recommendations based on user queries..
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>MedicalBot</h2>
      </div>
    </div>
  );
};

export default Testimonial;