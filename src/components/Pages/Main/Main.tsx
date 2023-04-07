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
  const [likes, setLikes] = useState<number>(0);
  const [downloads, setDownloads] = useState<number>(0);
  const [user, setUser] = useState<string>("");
  const [tags, setTags] = useState<string>("");
  const [showNoResults, setShowNoResults] = useState<boolean>(false);

  useEffect(() => {
    if (search !== "") {
      setIsLoading(true);
      setCards([]);
      setPage(1);
      fetchSearch(search, 1)
        .then((res) => setCards(res))
        .catch((err) => setError(err))
        .finally(() => setIsLoading(false));
    } else {
      const savedSearchValue = localStorage.getItem("search");
      if (savedSearchValue) {
        setSearch(savedSearchValue);
      }
    }
  }, [search]);

  useEffect(() => {
    setIsLoading(true);
    setCards([]);
    setPage(1);
    fetchImage("", 1)
      .then((res) => setCards(res))
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  }, []);

  const fetchSearch = async (
    value: string,
    page: number
  ): Promise<ImageCard[]> => {
    try {
      const res = await fetchImage(value, page);
      setShowNoResults(res.length === 0);
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
    likes: number,
    downloads: number,
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
    setLikes(0);
    setDownloads(0);
    setUser("");
    setTags("");
  };

  return (
    <div className="App">
      <Searchbar onSubmit={setSearch} value={search} />
      {cards.length > 0 && <ImageGallery cards={cards} onShow={modalShow} />}
      {isLoading && <Loader />}
      {showNoResults && (
        <p className="message"> We did not find anything for your request. </p>
      )}
      {cards.length > 0 && !isLoading && !showNoResults && (
        <Button onClick={clickButton} />
      )}
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
