import React, { useState, useEffect } from "react";
import "./main.css";
import Searchbar from "../../Search/SearchBar/SearchBar";
import Loader from "../../Search/Loader/Loader";
import fetchImage from "../../../Api/Api";
import Button from "../../Search/Button/Button";
import ImageGallery, {
  ImageCard,
} from "../../Search/ImageGallery/ImageGallery";
import Modal from "../../Search/Modal/Modal";

const App: React.FC = () => {
  const [search, setSearch] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [cards, setCards] = useState<ImageCard[]>([]);
  const [, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [largeImageURL, setLargeImageURL] = useState<string>("");
  const [likes, setLikes] = useState<string>("");
  const [downloads, setDownloads] = useState<string>("");
  const [user, setUser] = useState<string>("");
  const [tags, setTags] = useState<string>("");

  useEffect(() => {
    if (search !== "") {
      setIsLoading(true);
      setCards([]);
      setPage(1);
      localStorage.setItem("searchValue", search);
      fetchSearch(search, 1)
        .then((res) => setCards(res))
        .catch((err) => setError(err))
        .finally(() => setIsLoading(false));
    } else {
      const savedSearchValue = localStorage.getItem("searchValue");
      if (savedSearchValue) {
        setSearch(savedSearchValue);
      }
    }
  }, [search]);

  const fetchSearch = async (
    value: string,
    page: number
  ): Promise<ImageCard[]> => {
    try {
      const res = await fetchImage(value, page);
      return res;
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err);
      }
      return [];
    }
  };

  const clickButton = () => {
    setIsLoading(true);
    setPage(page + 1);

    fetchSearch(search, page + 1)
      .then((res) => setCards([...cards, ...res]))
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  };
  const modalShow = (
    url: string,
    likes: string,
    downloads: string,
    user: string,
    tags: string
  ) => {
    setShowModal(true);
    setLargeImageURL(url);
    setLikes(likes);
    setDownloads(downloads);
    setUser(user);
    setTags(tags);
  };

  const modalClose = () => {
    setShowModal(false);
    setLargeImageURL("");
    setLikes("");
    setDownloads("");
    setUser("");
    setTags("");
  };

  return (
    <div className="App">
      <Searchbar onSubmit={setSearch} />
      {cards.length > 0 && <ImageGallery cards={cards} onShow={modalShow} />}
      {isLoading && <Loader />}
      {cards.length > 0 && !isLoading && <Button onClick={clickButton} />}
      {showModal && (
        <Modal
          onClose={modalClose}
          image={largeImageURL}
          likes={likes}
          downloads={downloads}
          user={user}
          tags={tags}
        />
      )}
    </div>
  );
};

export default App;
