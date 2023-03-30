import { render } from "@testing-library/react";
import { describe, it } from "vitest";
import FormPage from "./FormPage";

describe("form-page", () => {
  it("render form page", () => {
    render(<FormPage />);
  });
});
