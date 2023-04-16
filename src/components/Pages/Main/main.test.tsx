import { render, screen } from "@testing-library/react";
import Main from "./Main";
import { Provider } from "react-redux";
import { setupStore } from "../../../redux/store";
const store = setupStore();
describe("Main component", () => {
  test("renders Cards component", () => {
    render(
      <Provider store={store}>
        <Main />
      </Provider>
    );
    const cardsElement = screen.getByTestId("home-section");
    expect(cardsElement).toBeInTheDocument();
  });
});
