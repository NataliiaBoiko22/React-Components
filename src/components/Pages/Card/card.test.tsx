import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { describe, it } from "vitest";
import { setupStore } from "../../../redux/store";
import Card from "./Card";

const store = setupStore();

describe("Card", () => {
  it("renders Card component", () => {
    const props = {
      item: {
        id: 1,
        title: "",
        description: "",
        price: 2,
        stock: 3,
        brand: "",
        category: "",
        thumbnail: "",
        images: [""],
      },
    };
    render(
      <Provider store={store}>
        <Card item={props.item} />
      </Provider>
    );
  });
});
