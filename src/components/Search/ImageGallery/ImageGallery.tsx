import PropTypes from "prop-types";
import "./imageGallery.css";
import ImageGalleryItem from "../../Search/ImageGalleryItem/ImageGalleryItem";

export interface ImageCard {
  id: number;
  largeImageURL: string;
  webformatURL: string;
  tags: string;
}

interface Props {
  onShow: (url: string) => void;
  cards: ImageCard[];
}
const ImageGallery = ({ cards, onShow }: Props) => {
  return (
    <ul className="ImageGallery">
      {cards.map(({ webformatURL, largeImageURL, id, tags }) => (
        <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          onShow={onShow}
          tags={tags}
        />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  onShow: PropTypes.func.isRequired,
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  ),
};

export default ImageGallery;
