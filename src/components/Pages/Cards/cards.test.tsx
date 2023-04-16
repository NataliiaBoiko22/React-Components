import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Cards from "./Cards";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { setupStore } from "../../../redux/store";
const store = setupStore();
describe("Cards component", () => {
  it("renders loading state correctly", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Cards />
        </BrowserRouter>
      </Provider>
    );
    const loadingElement = screen.getByText("Loading...");
    expect(loadingElement).toBeInTheDocument();
  });
});
