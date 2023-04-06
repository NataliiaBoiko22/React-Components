import React from "react";
import "./imageGalleryItem.css";

interface ImageGalleryItemProps {
  webformatURL: string;
  largeImageURL: string;
  onShow: (url: string, likes: string, user: string, tags: string) => void;
  tags: string;
  likes: string;
  downloads: string;
  user: string;
}

const ImageGalleryItem: React.FC<ImageGalleryItemProps> = ({
  webformatURL,
  largeImageURL,
  onShow,
  tags,
  likes,
  user,
}) => {
  return (
    <li className="ImageGalleryItem">
      <div className="ImageGalleryItemContent">
        <img
          className="ImageGalleryItemImage"
          onClick={() => onShow(largeImageURL, likes, user, tags)}
          src={webformatURL}
          alt={tags}
        />
        <div className="ImageGalleryItemInfo">
          <span className="ImageGalleryItemLikes">Likes &#9733; {likes}</span>
        </div>
      </div>
      <button
        className="ImageGalleryButton"
        onClick={() => onShow(largeImageURL, likes, user, tags)}
      >
        More info
      </button>
    </li>
  );
};

export default ImageGalleryItem;
