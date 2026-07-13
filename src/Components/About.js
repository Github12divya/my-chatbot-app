import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      {/* Background Image */}
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="Background" />
      </div>

      {/* Foreground Image */}
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="Health Illustration" />
      </div>

      {/* Text Content */}
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          Health Is An Important Part Of Life
        </h1>
        <p className="primary-text">
          this page provides natural home remedies for various minor illnesses.
          Consulting a doctor for every small health issue can be difficult, and
          frequent use of medications may not always be good for your health.
        </p>
        <p className="primary-text">
          Our chatbot offers helpful natural and Ayurvedic home remedies, making it
          easier to manage common ailments in a safe and effective way.
        </p>

        {/* Buttons */}
        <div className="about-buttons-container">
          

          <a
            href="https://1drv.ms/v/c/29d4595894e52f54/Ecba69XQViZHkfzFnqPwdwYBZh8WvXpqga3PrJJ5dER9mg?e=2Rkq21"
            target="_blank"
            rel="noopener noreferrer"
            className="watch-video-button"
          >
            <BsFillPlayCircleFill /> Watch Video
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
