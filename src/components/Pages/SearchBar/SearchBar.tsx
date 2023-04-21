import { useState, FormEvent } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { searchSlice } from "../../../redux/searchSlice";
import { useDispatch, useSelector } from "react-redux";
import "./searchBar.css";
import { RootState } from "../../../redux/store";
import { changeSearchText } from "../../../redux/searchSlice";
import React from "react";
const Search = () => {
  // const dispatch = useDispatch<AppDispatch>();

  const { searchText } = useSelector((state: RootState) => state.curState);

  const { setValue } = searchSlice.actions;
  const value = useAppSelector((state) => state.curState);
  const dispatch = useAppDispatch();
  const [search, setSearchValue] = useState(value);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // if (search.trim() === "") {
    //   alert("Please enter your request in the input field");
    //   return;
    // }
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(changeSearchText(e.target.value));
    // const newSearch = e.target.value.trimStart();
    // setSearchValue(newSearch);
  };
  const handleEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      dispatch(setValue(search));
    }
  };

  return (
    <div className="Searchbar">
      <form className="SearchForm" onSubmit={handleSubmit}>
        <input
          type="text"
          className="SearchFormInput"
          autoComplete="off"
          autoFocus
          // value={search}
          placeholder="Enter your request"
          onChange={handleInputChange}
          onKeyDown={handleEnter}
          data-testid="input"
        />

        <button
          type="submit"
          name="Search"
          className="SearchFormButton"
          onClick={() => dispatch(setValue(search))}
        >
          Search
        </button>
      </form>
    </div>
  );
};
export default Search;
