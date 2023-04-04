import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "./Header";

describe("Header", () => {
  it("should display correct links", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    expect(screen.getByText("Main")).toHaveAttribute("href", "/main");
    expect(screen.getByText("About Us")).toHaveAttribute("href", "/");
    expect(screen.getByText("Support")).toHaveAttribute("href", "/forms");
  });
});
