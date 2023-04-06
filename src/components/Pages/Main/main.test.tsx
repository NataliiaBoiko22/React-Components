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
    fireEvent.change(searchInput, { target: { value: "Lion" } });
    fireEvent.click(getByText("Search"));
    expect(queryByText("Lion")).toBeInTheDocument();
    expect(queryByText("Monkey")).not.toBeInTheDocument();
    fireEvent.click(getByText("Back"));
    expect(queryByText("Lion")).toBeInTheDocument();
    expect(queryByText("Monkey")).toBeInTheDocument();
  });
});
