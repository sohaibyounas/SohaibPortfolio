import { z } from "zod";

/** Contact form schema — shared by client form and API route */
export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(20, "Message must be at least 20 characters"),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
