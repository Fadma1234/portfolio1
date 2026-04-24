import { z } from "zod";

export const CONTACT_EMAIL = "fadma.belkhouraf@gmail.com";
export const FORMSPREE_ENDPOINT =
  process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ?? "";

export const contactFormSchema = z
  .object({
    email: z.string().trim().email("Enter a valid email address."),
    message: z
      .string()
      .trim()
      .min(12, "Share a bit more detail so I can better help."),
    name: z
      .string()
      .trim()
      .min(2, "Enter your full name."),
  })
  .strict();

export type ContactFormValues = z.infer<typeof contactFormSchema>;
export type ContactFormInput = z.input<typeof contactFormSchema>;

export interface ContactFormErrors {
  email?: string;
  message?: string;
  name?: string;
}

export interface ContactFormValidationResult {
  errors: ContactFormErrors;
  values?: ContactFormValues;
}

export function validateContactForm(
  input: ContactFormInput,
): ContactFormValidationResult {
  const parsedResult = contactFormSchema.safeParse(input);

  if (parsedResult.success) {
    return {
      errors: {},
      values: parsedResult.data,
    };
  }

  const fieldErrors = parsedResult.error.flatten().fieldErrors;

  return {
    errors: {
      email: fieldErrors.email?.[0],
      message: fieldErrors.message?.[0],
      name: fieldErrors.name?.[0],
    },
  };
}
