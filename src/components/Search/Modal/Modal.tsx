import React, { useEffect, useState } from "react";
import "./modal.css";
import PropTypes from "prop-types";

interface ModalProps {
  image: string;
  likes: string;
  downloads: string;
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

  return (
    <div className="overlay" onClick={onClose}>
      {isLoading && <div className="loading">Loading...</div>}
      <div
        className="modal"
        style={{ visibility: isLoading ? "hidden" : "visible" }}
      >
        <img src={image} alt="" onLoad={handleImageLoaded} />
        <div className="ImageGalleryItemInfo">
          <span className="ImageGalleryItemLikes">Likes: {likes}</span>
          <span className="ImageGalleryItemLikes">Downloads: {downloads}</span>
          <span className="ImageGalleryItemDescription">
            Name of contributor: {user}
          </span>
          <span className="ImageGalleryItemDescription">Tags: {tags}</span>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired,
  likes: PropTypes.string.isRequired,
  downloads: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};

export default Modal;
