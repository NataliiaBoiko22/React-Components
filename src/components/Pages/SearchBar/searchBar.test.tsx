import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { describe, it, Mock, vi } from "vitest";
import { setupStore } from "../../../redux/store";
import { useAppSelector, useAppDispatch } from "../../../redux/hooks";
import Search from "./SearchBar";
import { searchSlice } from "../../../redux/searchSlice";

const store = setupStore();
vi.mock("../../../redux/hooks.ts");
describe("Search", () => {
  const { setValue } = searchSlice.actions;
  beforeEach(() => {
    (useAppSelector as Mock).mockReturnValue("");
  });
  const mockDispatch = vi.fn();
  (useAppDispatch as Mock).mockReturnValue(mockDispatch);

  it("should render correctly", () => {
    render(
      <Provider store={store}>
        <Search />
      </Provider>
    );
    const input = screen.getByTestId("input");
    const button = screen.getByRole("button", { name: "Search" });
    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
  it("should call onSearch function on button click", () => {
    render(
      <Provider store={store}>
        <Search />
      </Provider>
    );
    const button = screen.getByRole("button", { name: "Search" });
    const input = screen.getByTestId("input");
    fireEvent.change(input, { target: { value: "value" } });
    fireEvent.click(button);
    expect(mockDispatch).toHaveBeenCalledWith(setValue("value"));
  });
  it("should update searchValue state", () => {
    render(
      <Provider store={store}>
        <Search />
      </Provider>
    );
    const input = screen.getByTestId("input");
    fireEvent.change(input, { target: { value: "value" } });
    expect(input).toHaveValue("value");
  });

  it("should call onSearch function on enter press", () => {
    render(
      <Provider store={store}>
        <Search />
      </Provider>
    );
    const input = screen.getByTestId("input");
    fireEvent.change(input, { target: { value: "value" } });
    fireEvent.keyDown(input, { key: "Enter" });
    expect(mockDispatch).toHaveBeenCalledWith(setValue("value"));
  });
});
