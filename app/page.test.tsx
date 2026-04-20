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
      screen.getByRole("heading", {
        name: /empathy, recovery thinking, and technical depth\./i,
        level: 2,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: /projects built around practical problem-solving\./i,
        level: 2,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /nanochat app/i, level: 3 }),
    ).toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: /live demo/i }).length).toBe(3);
    expect(
      screen.getByRole("heading", {
        name: /reach out through a minimal contact form\./i,
        level: 2,
      }),
    ).toBeInTheDocument();
  });
});
