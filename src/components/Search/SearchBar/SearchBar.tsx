import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import "./searchBar.css";
type SearchbarProps = {
  onSubmit: (search: string) => void;
  value?: string;
};

const Searchbar: React.FC<SearchbarProps> = ({ onSubmit }) => {
  const [search, setSearch] = useState("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value.toLowerCase());
  };
  useEffect(() => {
    const savedSearch = localStorage.getItem("search");
    if (savedSearch) {
      setSearch(savedSearch);
    }
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (search.trim() === "") {
      alert("Please enter your request in the input field");
      return;
    }
    localStorage.setItem("search", search);
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
