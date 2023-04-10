import { render, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Main from "./Main";

describe("Main component", () => {
  test("search button filters animals correctly", () => {
    const { getByPlaceholderText, getByText } = render(
      <MemoryRouter>
        <Main />
      </MemoryRouter>
    );
    const searchInput = getByPlaceholderText("Search images and photos");
    fireEvent.change(searchInput, { target: { value: "Lion" } });
    fireEvent.click(getByText("Search"));
  });
});
