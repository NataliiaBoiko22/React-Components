import { RefCallback } from "react";
import { UseFormRegister } from "react-hook-form";
import { render } from "@testing-library/react";
import { describe, it } from "vitest";
import Select from "./Select";

interface IFormInput {
  support: string;
}

describe("Select", () => {
  it("renders Select component", () => {
    const supportRefCallback: RefCallback<HTMLSelectElement> = (element) => {
      supportRef.current = element;
    };
    const supportRef = { current: null as HTMLSelectElement | null };

    const register: ReturnType<UseFormRegister<IFormInput>> = {
      onChange: () => Promise.resolve(true),
      onBlur: () => Promise.resolve(true),
      name: "support",
      ref: supportRefCallback,
    };

    render(<Select {...register} />);
  });
});
