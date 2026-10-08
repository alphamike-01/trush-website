import { z } from "zod";
import { MATTER_TYPES } from "./constants";

export const ConsultationSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Name must be at least 2 characters long." })
    .max(100, { message: "Name cannot exceed 100 characters." }),
  mobile: z
    .string()
    .trim()
    .regex(/^[6-9]\d{9}$|^(\+91[\-\s]?)?[6-9]\d{9}$/, {
      message: "Please enter a valid 10-digit mobile number.",
    }),
  email: z
    .string()
    .trim()
    .email({ message: "Please enter a valid email address." })
    .max(120, { message: "Email is too long." }),
  matterType: z.enum(MATTER_TYPES, {
    errorMap: () => ({ message: "Please select a valid matter type." }),
  }),
  description: z
    .string()
    .trim()
    .min(10, { message: "Please provide a brief description of at least 10 characters." })
    .max(3000, { message: "Description cannot exceed 3,000 characters." }),
  // Honeypot field for bot protection: must be empty
  websiteHoneypot: z.string().optional().refine((val) => !val || val === "", {
    message: "Automated submission detected.",
  }),
});

export type ConsultationFormData = z.infer<typeof ConsultationSchema>;

export const AdminLoginSchema = z.object({
  username: z.string().trim().min(3, { message: "Username must be at least 3 characters." }),
  password: z.string().min(6, { message: "Password must be at least 6 characters." }),
});

export type AdminLoginFormData = z.infer<typeof AdminLoginSchema>;

export const ArticleSchema = z.object({
  title: z.string().trim().min(5, { message: "Title must be at least 5 characters." }),
  slug: z.string().trim().min(3, { message: "Slug is required." }),
  excerpt: z.string().trim().min(10, { message: "Excerpt must be at least 10 characters." }),
  content: z.string().trim().min(50, { message: "Content must be at least 50 characters." }),
  category: z.string().trim().min(2, { message: "Category is required." }),
  readTime: z.string().trim().default("4 min read"),
  published: z.boolean().default(true),
});

export type ArticleFormData = z.infer<typeof ArticleSchema>;
