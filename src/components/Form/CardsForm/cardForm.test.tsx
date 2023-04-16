import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { describe, it } from "vitest";
import CardsForm from "./CardsForm";
import { setupStore } from "../../../redux/store";

const store = setupStore();
describe("Users", () => {
  it("renders Users component", () => {
    render(
      <Provider store={store}>
        <CardsForm />
      </Provider>
    );
  });
});
