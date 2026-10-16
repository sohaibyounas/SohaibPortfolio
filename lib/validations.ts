import { z } from "zod";

/** Contact form schema — shared by client form and API route */
export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name is too long"),
  email: z.string().trim().email("Please enter a valid email address").max(200),
  message: z
    .string()
    .trim()
    .min(20, "Message must be at least 20 characters")
    .max(5000, "Message is too long (max 5000 characters)"),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
