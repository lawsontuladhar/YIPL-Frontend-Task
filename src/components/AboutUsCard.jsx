import React from "react";

function AboutUsCard(props) {
  return (
    <div className="about-us-card">
      <img
        src={`../../assets/images/${props.image}`}
        alt="about-us-image"
        className="about-us-image"
      />
      <p className="logo-title">{props.title}</p>
    </div>
  );
}

export default AboutUsCard;
