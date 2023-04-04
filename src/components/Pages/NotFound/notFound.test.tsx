import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NotFoundPage from "./NotFound";
import { createMemoryHistory } from "history";
test("navigates to main page when back button is clicked", () => {
  const history = createMemoryHistory();
  render(
    <MemoryRouter>
      <NotFoundPage />
    </MemoryRouter>
  );
  const backButton = screen.getByRole("button", { name: "Back" });
  fireEvent.click(backButton);

  expect(history.location.pathname).toEqual("/");
});
