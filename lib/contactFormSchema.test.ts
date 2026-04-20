import { describe, expect, it } from "vitest";

import { validateContactForm } from "./contactFormSchema";

describe("validateContactForm", () => {
  it("should return parsed values when the submitted fields are valid", () => {
    const result = validateContactForm({
      email: "fadma@example.com",
      message: "I would like to discuss a healthcare-focused product build.",
      name: "Fadma Belkhouraf",
    });

    expect(result.errors).toEqual({});
    expect(result.values).toEqual({
      email: "fadma@example.com",
      message: "I would like to discuss a healthcare-focused product build.",
      name: "Fadma Belkhouraf",
    });
  });

  it("should return field errors when the submitted fields are invalid", () => {
    const result = validateContactForm({
      email: "invalid-email",
      message: "Too short",
      name: "F",
    });

    expect(result.errors).toEqual({
      email: "Enter a valid email address.",
      message: "Share a bit more detail so I can better help.",
      name: "Enter your full name.",
    });
  });
});
