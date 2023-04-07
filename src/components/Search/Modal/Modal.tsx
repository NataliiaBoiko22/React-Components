import React, { useEffect, useState } from "react";
import "./modal.css";
import PropTypes from "prop-types";

interface ModalProps {
  image: string;
  likes: number;
  downloads: number;
  user: string;
  tags: string;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({
  image,
  likes,
  downloads,
  user,
  tags,
  onClose,
}) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoaded = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="overlay" onClick={handleOverlayClick} data-testid="overlay">
      {isLoading && <div className="loading">Loading...</div>}
      <div
        className="modal"
        style={{ visibility: isLoading ? "hidden" : "visible" }}
        data-testid="modal"
      >
        <button className="close" onClick={onClose} data-testid="close">
          &#10005;
        </button>
        <img src={image} alt="test-image.jpg" onLoad={handleImageLoaded} />
        <div className="ImageGalleryItemInfo">
          <span className="ImageGalleryItemLikes">
            <strong>Likes: </strong> {likes}
          </span>
          <span className="ImageGalleryItemLikes">
            <strong>Downloads: </strong>
            {downloads}
          </span>
          <span className="ImageGalleryItemDescription">
            <strong>Name of contributor: </strong>
            {user}
          </span>
          <span className="ImageGalleryItemDescription">
            <strong>Tags: </strong> {tags}
          </span>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  downloads: PropTypes.number.isRequired,
  user: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};

export default Modal;
