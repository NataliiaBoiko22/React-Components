import React from "react";
import "./button.css";

interface ButtonProps {
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <button type="button" onClick={onClick} className="Button">
      Load more
    </button>
  );
};

export default Button;
