import React from "react";
import "./imageGalleryItem.css";

export interface ImageGalleryItemProps {
  webformatURL: string;
  largeImageURL: string;
  onShow: (url: string, likes: number, user: string, tags: string) => void;
  tags: string;
  likes: number;
  downloads: number;
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
    <li className="ImageGalleryItem" data-testid="imageGalleryItem">
      <div
        className="ImageGalleryItemContent"
        data-testid="imageGalleryItemContent"
      >
        <img
          className="ImageGalleryItemImage"
          onClick={() => onShow(largeImageURL, likes, user, tags)}
          src={webformatURL}
          alt={tags}
          data-testid="imageGalleryItemImage"
        />
        <div className="ImageGalleryItemInfo">
          <span
            className="ImageGalleryItemLikes"
            data-testid="imageGalleryItemLikes"
          >
            Likes &#9733; {likes}
          </span>
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
