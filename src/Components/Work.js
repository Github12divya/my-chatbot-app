import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "MedicalBot",
      text: "MedicalBot is a user-friendly chatbot that provides quick and accurate responses.",
    },
    {
      image: ChooseMeals,
      title: "Choose How Often",
      text: "Choose how often you interact with MedicalBot, a user-friendly chatbot that provides quick and accurate responses",
    },
    {
      image: DeliveryMeals,
      title: "Fast Replays",
      text: "It helps users find natural remedies and health information instantly, making healthcare more accessible",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
          When a user asks a query, the chatbot analyzes the input and provides accurate results based on the question.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;