import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { describe, it } from "vitest";
import { IUser } from "../../types";
import CardForm from "./CardForm";
import { setupStore } from "../../../redux/store";

const store = setupStore();
describe("User", () => {
  it("renders Card component", () => {
    const user: IUser = {
      name: "string",
      surname: "string",
      birthday: "1000-03-15",
      support: "Money",
      duration: "One time",
      file: undefined,
    };
    render(
      <Provider store={store}>
        <CardForm user={user} key={1} />
      </Provider>
    );
  });
});
