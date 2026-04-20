import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { ContactForm } from "./ContactForm";

describe("ContactForm", () => {
  it("should show a validation message when submitted empty", () => {
    render(<ContactForm />);

    fireEvent.click(screen.getByRole("button", { name: /send message/i }));

    expect(
      screen.getByText(/please review the highlighted fields and try again/i),
    ).toBeInTheDocument();
    expect(screen.getByText(/enter your full name/i)).toBeInTheDocument();
    expect(screen.getByText(/enter a valid email address/i)).toBeInTheDocument();
  });

  it("should show a success message when the submission succeeds", async () => {
    const fetcher = vi.fn(async () => new Response(null, { status: 200 }));

    render(<ContactForm endpoint="https://formspree.io/f/test-form" fetcher={fetcher} />);

    fireEvent.change(screen.getByLabelText(/name/i), {
      target: { value: "Fadma" },
    });
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: "fadma@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/message/i), {
      target: { value: "I'd like to discuss a new build for a healthcare team." },
    });
    fireEvent.click(screen.getByRole("button", { name: /send message/i }));

    await waitFor(() => {
      expect(fetcher).toHaveBeenCalledTimes(1);
    });
    expect(
      screen.getByText(/thanks for reaching out\. your message has been sent\./i),
    ).toBeInTheDocument();
  });

  it("should show an error message when the submission fails", async () => {
    const fetcher = vi.fn(async () => new Response(null, { status: 500 }));

    render(<ContactForm endpoint="https://formspree.io/f/test-form" fetcher={fetcher} />);

    fireEvent.change(screen.getByLabelText(/name/i), {
      target: { value: "Fadma" },
    });
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: "fadma@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/message/i), {
      target: { value: "I'd like to discuss a new build for a healthcare team." },
    });
    fireEvent.click(screen.getByRole("button", { name: /send message/i }));

    await waitFor(() => {
      expect(fetcher).toHaveBeenCalledTimes(1);
    });
    expect(
      screen.getByText(
        /your message could not be sent right now\. please try again in a moment\./i,
      ),
    ).toBeInTheDocument();
  });
});
