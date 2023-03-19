import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Main from "./Main";
describe("Main component", () => {
  test("renders search input and button", () => {
    const { getByPlaceholderText, getByText } = render(<Main />);
    const inputElement = getByPlaceholderText("Search by animal name");
    const buttonElement = getByText("Search");
    expect(inputElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });

  test("filters animals based on search term", () => {
    const { getByPlaceholderText, getByText, getAllByTestId } = render(
      <Main />
    );
    const inputElement = getByPlaceholderText("Search by animal name");
    const buttonElement = getByText("Search");
    fireEvent.change(inputElement, { target: { value: "monkey" } });
    fireEvent.click(buttonElement);
    const animalCards = getAllByTestId("animal-card");
    expect(animalCards.length).toBe(1);
  });

  test("expands animal info when 'Show more' button is clicked", () => {
    const { getAllByText } = render(<Main />);
    const showMoreButtons = getAllByText("Show more");
    fireEvent.click(showMoreButtons[0]);
    const infoElements = getAllByText(/monkey info/);
    expect(infoElements.length).toBeGreaterThan(0);
  });

  test("goes back to original list of animals when 'Back' button is clicked", () => {
    const { getByPlaceholderText, getByText, getByTestId } = render(<Main />);
    const inputElement = getByPlaceholderText("Search by animal name");
    const buttonElement = getByText("Search");
    const backButtonElement = getByText("Back");
    fireEvent.change(inputElement, { target: { value: "lion" } });
    fireEvent.click(buttonElement);
    fireEvent.click(backButtonElement);
    const animalCards = getByTestId("animal-cards");
    expect(animalCards.children.length).toBeGreaterThan(0);
  });

  test("renders the animal cards when animals list is not empty", () => {
    render(<Main />);
    const animalCards = screen.getAllByRole("main-card");
    expect(animalCards).not.toHaveLength(0);
  });
  test("filters animals by name when search button is clicked", () => {
    render(<Main />);
    const searchInput = screen.getByPlaceholderText("Search by animal name");
    const searchButton = screen.getByText("Search");

    fireEvent.change(searchInput, { target: { value: "Lion" } });
    fireEvent.click(searchButton);

    const animalCards = screen.getAllByRole("main-card");
    expect(animalCards).toHaveLength(1);
    expect(animalCards[0]).toHaveTextContent("Lion");
  });
  test("shows 404 page when no animals match search term", () => {
    render(<Main />);
    const searchInput = screen.getByPlaceholderText("Search by animal name");
    const searchButton = screen.getByText("Search");

    fireEvent.change(searchInput, { target: { value: "Nonexistent Animal" } });
    fireEvent.click(searchButton);

    const notFoundMessage = screen.getByText("404: Not Found");
    expect(notFoundMessage).toBeInTheDocument();
  });
  test("toggles animal info when 'Show more' button is clicked", () => {
    render(<Main />);
    const showMoreButton = screen.getAllByText("Show more")[0];
    const initialInfoText = screen.getByText("lorem ipsum");

    fireEvent.click(showMoreButton);

    const expandedInfoText = screen.getByText("lorem ipsum dolor sit amet");
    expect(expandedInfoText).toBeInTheDocument();
    expect(initialInfoText).not.toBeInTheDocument();

    fireEvent.click(showMoreButton);

    expect(expandedInfoText).not.toBeInTheDocument();
    expect(initialInfoText).toBeInTheDocument();
  });
  test("resets search when 'Back' button is clicked", () => {
    render(<Main />);
    const searchInput = screen.getByPlaceholderText("Search by animal name");
    const searchButton = screen.getByText("Search");
    const backButton = screen.getByText("Back");

    fireEvent.change(searchInput, { target: { value: "lion" } });
    fireEvent.click(searchButton);

    expect(screen.getAllByRole("main-card")).toHaveLength(1);

    fireEvent.click(backButton);

    expect(screen.getAllByRole("main-card")).toHaveLength(3);
    expect(searchInput).toHaveValue("");
  });
});
