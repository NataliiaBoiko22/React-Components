import { render, screen } from "@testing-library/react";
import AboutUsPage from "./AboutUs";
import { describe, it } from "vitest";

describe("About page", () => {
  it("render About page", () => {
    render(<AboutUsPage />);
    expect(screen.getByText(/hello/i)).toBeInTheDocument();
  });
});
