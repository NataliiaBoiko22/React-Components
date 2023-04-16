import { test, expect } from "vitest";
import { render } from "@testing-library/react";
import Header from "./Header";
import { BrowserRouter } from "react-router-dom";

test("renders navigation links", () => {
  const { getAllByRole } = render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
  const links = getAllByRole("link");
  expect(links).toHaveLength(3);
  expect(links[0]).toHaveTextContent("Main");
  expect(links[0]).toHaveAttribute("href", "/main");
  expect(links[1]).toHaveTextContent("About Us");
  expect(links[1]).toHaveAttribute("href", "/");
  expect(links[2]).toHaveTextContent("Form");
  expect(links[2]).toHaveAttribute("href", "/forms");
});
