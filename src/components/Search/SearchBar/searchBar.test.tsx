import { fireEvent, render, screen } from "@testing-library/react";
import { describe, it, vi } from "vitest";
import Searchbar from "./SearchBar";

describe("Searchbar", () => {
  const onSubmitMock = vi.fn();
  beforeEach(() => {
    localStorage.clear();
    onSubmitMock.mockClear();
  });

  it("renders correctly", () => {
    render(<Searchbar onSubmit={onSubmitMock} />);
    const input = screen.getByPlaceholderText("Search images and photos");
    const button = screen.getByText("Search");
    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it("updates search state on input change", () => {
    render(<Searchbar onSubmit={onSubmitMock} />);
    const input = screen.getByPlaceholderText("Search images and photos");
    fireEvent.change(input, { target: { value: "test search" } });
    expect(input).toHaveValue("test search");
  });

  it("calls onSubmit function with search value on form submission", () => {
    render(<Searchbar onSubmit={onSubmitMock} />);
    const input = screen.getByPlaceholderText("Search images and photos");
    const button = screen.getByText("Search");
    fireEvent.change(input, { target: { value: "test search" } });
    fireEvent.submit(button);
    expect(onSubmitMock).toHaveBeenCalledWith("test search");
  });

  it("restores search value from localStorage", () => {
    localStorage.setItem("search", "test search");
    render(<Searchbar onSubmit={onSubmitMock} />);
    const input = screen.getByPlaceholderText("Search images and photos");
    expect(input).toHaveValue("test search");
  });
});
