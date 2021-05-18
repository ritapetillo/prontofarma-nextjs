import React from "react";
import ReactDOM from "react-dom";
import { render, screen } from "@testing-library/react";
import Hero from "../Hero/index";

test("hero renders correctly", () => {
  const { getByTestId } = render(<Hero />);
  getByTestId("hero__container");
});
