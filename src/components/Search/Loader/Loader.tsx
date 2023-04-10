import React from "react";
import "./loader.css";
import { RotatingLines } from "react-loader-spinner";

const Loader: React.FC = () => {
  return (
    <div className="loading">
      <RotatingLines
        strokeColor="#5b9a61"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </div>
  );
};
export default Loader;
