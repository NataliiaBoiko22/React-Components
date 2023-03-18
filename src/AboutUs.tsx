import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import React from "react";
import "./aboutUs.css";
function AboutUsPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };
  return (
    <div className="wrapper">
      <h1>Hello</h1>

      <h2>Explore the Animal Kingdom</h2>
      <div className="main">
        <div className="description">
          <p className="description-p">
            Discover fascinating facts about all kinds of animals, from the
            smallest insects to the largest mammals. Browse our collection of
            articles, photos, and videos to learn more about the world`s amazing
            creatures.
            <br /> So far, our collection is not very large, since this small
            site was developed as part of an assignment in RSShcool!
          </p>
          <a href="#" className="btn" onClick={handleClick}>
            Get Started
          </a>
        </div>
        <img
          className="img"
          alt="Welcome image"
          src="https://source.unsplash.com/800x600/?tiger"></img>
      </div>
    </div>
  );
}

export default AboutUsPage;
