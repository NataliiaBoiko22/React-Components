import { render, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Main from "./Main";

describe("Main component", () => {
  test("search button filters animals correctly", () => {
    const { getByPlaceholderText, getByText, queryByText } = render(
      <MemoryRouter>
        <Main />
      </MemoryRouter>
    );
    const searchInput = getByPlaceholderText("Search by animal name");

    // Type in the search input and click the search button
    fireEvent.change(searchInput, { target: { value: "Lion" } });
    fireEvent.click(getByText("Search"));

    // Check that only the "Dog" animal is displayed
    expect(queryByText("Lion")).toBeInTheDocument();
    expect(queryByText("Monkey")).not.toBeInTheDocument();

    // Click the back button and check that all animals are displayed again
    fireEvent.click(getByText("Back"));
    expect(queryByText("Lion")).toBeInTheDocument();
    expect(queryByText("Monkey")).toBeInTheDocument();
  });
});
