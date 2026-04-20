import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Home from "./page";

describe("Home", () => {
  it("should render the required portfolio sections when the page loads", () => {
    render(<Home />);

    expect(
      screen.getByRole("navigation", { name: /primary/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: /fadma belkhouraf/i,
        level: 1,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/i spent years helping people recover from injury/i),
    ).toBeInTheDocument();
    expect(
      screen.getByAltText(/fadma belkhouraf smiling outdoors/i),
    ).toBeInTheDocument();
    expect(
      screen.queryByRole("heading", {
        name: /empathy, recovery thinking, and technical depth\./i,
      }),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole("heading", {
        name: /projects built around practical problem-solving\./i,
      }),
    ).not.toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /nanochat app/i, level: 3 }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /shopify theme work/i, level: 3 }),
    ).toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: /live demo/i }).length).toBe(3);
    expect(
      screen.getByAltText(/nanochat project interface screenshot/i),
    ).toBeInTheDocument();
    expect(
      screen.getByAltText(/evaluation project interface screenshot/i),
    ).toBeInTheDocument();
    expect(
      screen.getByAltText(/patient tracker project screenshot/i),
    ).toBeInTheDocument();
    expect(
      screen.queryByRole("heading", {
        name: /reach out through a minimal contact form\./i,
      }),
    ).not.toBeInTheDocument();
  });
});
