import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import AboutUsPage from "./AboutUs";

describe("AboutUsPage component", () => {
  it("should render Hello ! text", () => {
    render(
      <BrowserRouter>
        <AboutUsPage />
      </BrowserRouter>
    );
    const helloText = screen.getByText(/hello/i);
    expect(helloText).toBeInTheDocument();
  });

  it("should render Explore the Photos Kingdom text", () => {
    render(
      <BrowserRouter>
        <AboutUsPage />
      </BrowserRouter>
    );
    const exploreText = screen.getByText(/explore the photos kingdom/i);
    expect(exploreText).toBeInTheDocument();
  });

  it("should render description text", () => {
    render(
      <BrowserRouter>
        <AboutUsPage />
      </BrowserRouter>
    );
    const descriptionText = screen.getByText(/website is developed as part/i);
    expect(descriptionText).toBeInTheDocument();
  });
});
