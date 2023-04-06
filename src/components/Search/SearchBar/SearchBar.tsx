import React, { useState, ChangeEvent, FormEvent } from "react";
import "./searchBar.css";
import Notiflix from "notiflix";

type SearchbarProps = {
  onSubmit: (search: string) => void;
};

const Searchbar: React.FC<SearchbarProps> = ({ onSubmit }) => {
  const [search, setSearch] = useState("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value.toLowerCase());
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (search.trim() === "") {
      Notiflix.Notify.info("Please enter your request in the input field");
      return;
    }
    onSubmit(search);
  };

  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={handleSubmit}>
        <input
          onChange={handleInputChange}
          className="SearchFormInput"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={search}
        />
        <button type="submit" className="SearchFormButton">
          &#x1F50D;
          <span className="SearchFormButtonLabel">Search</span>
        </button>
      </form>
    </header>
  );
};

export default Searchbar;
