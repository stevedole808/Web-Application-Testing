import { render } from "@testing-library/react";
import App from "./App";
import Dashboard from "./components/Dashboard";
import Display from "./components/Display";
import React from 'react';

test("App renders without crashing", () => {
  render(<App/>);
});

test("strikes are rendered", () => {
  const container = render(<Dashboard/>)
  container.queryByText("Strikes")
})

test("balls are rendered", () => {
  const {queryByText} = render(<Dashboard/>)
  queryByText("balls")
})
test("Hits are rendered", () => {
  const container = render(<Dashboard/>)
  container.queryByText("/HITS/i")
})

test("Display is rendered", () => {
  const {getByTestId} = render(<Display/>)
  getByTestId("Baller")
})