import React from "react";
import "./imageGalleryItem.css";

interface ImageGalleryItemProps {
  webformatURL: string;
  largeImageURL: string;
  onShow: (url: string) => void;
  tags: string;
}

const ImageGalleryItem: React.FC<ImageGalleryItemProps> = ({
  webformatURL,
  largeImageURL,
  onShow,
  tags,
}) => {
  return (
    <li className="galleryItem">
      <img
        className="ImageGalleryItemImage"
        onClick={() => onShow(largeImageURL)}
        src={webformatURL}
        alt={tags}
      />
    </li>
  );
};

export default ImageGalleryItem;
