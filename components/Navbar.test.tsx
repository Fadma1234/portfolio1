import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { Navbar } from "./Navbar";

interface MockObserverInstance {
  callback: IntersectionObserverCallback;
  disconnect: ReturnType<typeof vi.fn>;
  observe: ReturnType<typeof vi.fn>;
  unobserve: ReturnType<typeof vi.fn>;
}

const observerInstances: MockObserverInstance[] = [];

class MockIntersectionObserver {
  public readonly callback: IntersectionObserverCallback;
  public readonly disconnect = vi.fn();
  public readonly observe = vi.fn();
  public readonly unobserve = vi.fn();

  public constructor(callback: IntersectionObserverCallback) {
    this.callback = callback;
    observerInstances.push(this);
  }
}

describe("Navbar", () => {
  beforeEach(() => {
    observerInstances.length = 0;
    Object.defineProperty(window, "IntersectionObserver", {
      configurable: true,
      writable: true,
      value: MockIntersectionObserver,
    });
  });

  it("should highlight the active section when a section becomes visible", () => {
    render(
      <>
        <Navbar />
        <section id="about" />
        <section id="projects" />
        <section id="contact" />
      </>,
    );

    const aboutLink = screen.getByRole("link", { name: /about/i });
    const projectsLink = screen.getByRole("link", { name: /projects/i });
    const projectsSection = document.getElementById("projects");

    expect(projectsSection).not.toBeNull();
    expect(aboutLink).not.toHaveAttribute("aria-current");
    expect(projectsLink).not.toHaveAttribute("aria-current");

    observerInstances[0]?.callback(
      [
        {
          intersectionRatio: 0.7,
          isIntersecting: true,
          target: projectsSection as Element,
        } as IntersectionObserverEntry,
      ],
      observerInstances[0] as unknown as IntersectionObserver,
    );

    expect(projectsLink).toHaveAttribute("aria-current", "page");
    expect(aboutLink).not.toHaveAttribute("aria-current");
  });
});
