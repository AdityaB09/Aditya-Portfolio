import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Expertise section heading", () => {
  render(<App />);
  const headingElement = screen.getByText(/Expertise/i);
  expect(headingElement).toBeInTheDocument();
});
