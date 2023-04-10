import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";

describe("Button", () => {
  it("renders correctly", () => {
    render(<Button onClick={() => {}} />);
    const buttonElement = screen.getByText("Load more");
    expect(buttonElement).toBeInTheDocument();
  });

  it("calls onClick prop when button is clicked", () => {
    let clicked = false;
    const onClickHandler = () => {
      clicked = true;
    };
    render(<Button onClick={onClickHandler} />);
    const buttonElement = screen.getByText("Load more");
    userEvent.click(buttonElement);
    expect(clicked).toBe(true);
  });
});
