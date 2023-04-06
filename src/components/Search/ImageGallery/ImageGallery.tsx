import PropTypes from "prop-types";
import "./imageGallery.css";
import ImageGalleryItem from "../../Search/ImageGalleryItem/ImageGalleryItem";

export interface ImageCard {
  id: number;
  largeImageURL: string;
  webformatURL: string;
  tags: string;
  likes: string;
  downloads: string;
  user: string;
}

interface Props {
  onShow: (
    url: string,
    likes: string,
    domnloads: string,
    user: string,
    tags: string
  ) => void;
  cards: ImageCard[];
}
const ImageGallery = ({ cards, onShow }: Props) => {
  return (
    <ul className="ImageGallery">
      {cards.map(
        ({ webformatURL, largeImageURL, id, tags, likes, downloads, user }) => (
          <ImageGalleryItem
            key={id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            onShow={(url) => onShow(url, likes, downloads, user, tags)}
            tags={tags}
            likes={likes}
            user={user}
            downloads={downloads}
          />
        )
      )}
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
      likes: PropTypes.string.isRequired,
      downloads: PropTypes.string.isRequired,
      user: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ImageGallery;
