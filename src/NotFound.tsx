import React from "react";
import "./notFound.css";
import { useNavigate } from "react-router-dom";

function NotFoundPage() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/main");
  };
  return (
    <div className="message">
      <button className="back-button" onClick={handleBack}>
        Back
      </button>
      <span>
        Unfortunately, your request did not return any results. Go to Main!
      </span>
      <p className="notfound">404 Page Not Found</p>
    </div>
  );
}

export default NotFoundPage;
