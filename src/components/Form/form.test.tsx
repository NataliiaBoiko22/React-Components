import { act, fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { describe, it, vi } from "vitest";
import Form from "./Form";
import { setupStore } from "../../redux/store";

const store = setupStore();

describe("Form", () => {
  it("renders Form component", () => {
    render(
      <Provider store={store}>
        <Form />
      </Provider>
    );
  });
  it("test form in FomComponent", async () => {
    render(
      <Provider store={store}>
        <Form />
      </Provider>
    );
    globalThis.URL.createObjectURL = vi.fn();

    await act(async () => {
      fireEvent.change(screen.getAllByRole("textbox")[0], {
        target: { value: "" },
      });
      fireEvent.change(screen.getAllByRole("textbox")[1], {
        target: { value: "" },
      });

      fireEvent.change(screen.getByRole("combobox"), {
        target: { value: "" },
      });
      fireEvent.click(screen.getAllByRole("radio")[0]);
      fireEvent.click(screen.getByRole("checkbox"));
      fireEvent.click(screen.getByRole("button", { name: "Submit" }));
    });
  });

  it("shows error message for required fields when submitting empty form", async () => {
    render(
      <Provider store={store}>
        <Form />
      </Provider>
    );
    const submitButton = screen.getByRole("button", { name: /submit/i });
    fireEvent.click(submitButton);

    const requiredFields = await screen.findAllByText(/required field/i, {
      selector: "span",
    });
    expect(requiredFields).toHaveLength(6);
    requiredFields.forEach((field) => {
      expect(field).toBeInTheDocument();
    });
  });
});
