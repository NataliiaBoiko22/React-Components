import { render } from "@testing-library/react";
import React from "react";
import { describe, it } from "vitest";
import Select from "./Select";

describe("SelectCustom", () => {
  it("renders SelectCustom component", () => {
    const duration: React.RefObject<HTMLSelectElement> = React.createRef();
    const durationError = "str";
    render(<Select ref={duration} errorMess={durationError} />);
  });
});
