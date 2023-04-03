import { render } from "@testing-library/react";
import { describe, it } from "vitest";
import CardsForm from "./CardsForm";

describe("Users", () => {
  it("renders Users component", () => {
    const props = [
      {
        name: "string",
        surname: "string",
        birthday: "1990-03-15",
        support: "Money",
        duration: "One time",
        agreement: true,
        file: undefined,
      },
      {
        name: "string",
        surname: "string",
        birthday: "1990-03-15",
        support: "Money",
        duration: "One time",
        agreement: true,
        file: undefined,
      },
    ];
    render(<CardsForm users={props} />);
  });
});
