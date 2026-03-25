/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Your Health Comes First
          </h1>
          <p className="primary-text">
          Natural and Ayurvedic home remedies promote good health and provide effective support for overall well-being. They offer safe and chemical-free solutions for minor ailments, helping the body heal naturally. By using traditional and Ayurvedic methods, these remedies enhance immunity and improve long-term health.
          </p>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;