import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { describe, it } from "vitest";
import FormPage from "./FormPage";
import { setupStore } from "../../../redux/store";

const store = setupStore();
describe("form-page", () => {
  it("render form page", () => {
    render(
      <Provider store={store}>
        <FormPage />
      </Provider>
    );
  });
});
