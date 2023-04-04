import React from "react";
import { render } from "@testing-library/react";
import { describe, it } from "vitest";
import Input from "./Input";

describe("InputCustom", () => {
  it("renders InputCustom component", () => {
    const surname: React.RefObject<HTMLInputElement> = React.createRef();
    render(
      <Input title="Last Name:" placeholder="Enter last name" ref={surname} />
    );
  });
});
