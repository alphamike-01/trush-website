import { describe, it, expect } from "vitest";
import { ConsultationSchema, AdminLoginSchema, ArticleSchema } from "@/lib/validation";

describe("Consultation Form Validation", () => {
  const validPayload = {
    name: "Ramesh Patel",
    mobile: "9876543210",
    email: "ramesh.patel@example.com",
    matterType: "Revenue Law" as const,
    description: "Need legal guidance regarding a disputed mutation entry in Village Form 6.",
  };

  it("passes validation with completely valid input", () => {
    const result = ConsultationSchema.safeParse(validPayload);
    expect(result.success).toBe(true);
  });

  it("fails when name is missing or too short", () => {
    const result = ConsultationSchema.safeParse({ ...validPayload, name: "A" });
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.flatten().fieldErrors.name).toBeDefined();
    }
  });

  it("fails when mobile number is not 10 digits", () => {
    const result = ConsultationSchema.safeParse({ ...validPayload, mobile: "12345" });
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.flatten().fieldErrors.mobile).toBeDefined();
    }
  });

  it("accepts valid mobile with +91 country code", () => {
    const result = ConsultationSchema.safeParse({ ...validPayload, mobile: "+91 9876543210" });
    expect(result.success).toBe(true);
  });

  it("fails when email is invalid", () => {
    const result = ConsultationSchema.safeParse({ ...validPayload, email: "invalid-email" });
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.flatten().fieldErrors.email).toBeDefined();
    }
  });

  it("fails when matter type is not from approved list", () => {
    const result = ConsultationSchema.safeParse({
      ...validPayload,
      matterType: "Criminal Bail" as any,
    });
    expect(result.success).toBe(false);
  });

  it("fails when description is under 10 characters", () => {
    const result = ConsultationSchema.safeParse({ ...validPayload, description: "Short" });
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.flatten().fieldErrors.description).toBeDefined();
    }
  });

  it("detects bot spam when honeypot field is filled", () => {
    const result = ConsultationSchema.safeParse({
      ...validPayload,
      websiteHoneypot: "http://spam-link.ru",
    });
    expect(result.success).toBe(false);
  });
});

describe("Admin Login Validation", () => {
  it("passes valid login credentials", () => {
    const result = AdminLoginSchema.safeParse({ username: "admin", password: "securepassword123" });
    expect(result.success).toBe(true);
  });

  it("fails when password is too short", () => {
    const result = AdminLoginSchema.safeParse({ username: "admin", password: "123" });
    expect(result.success).toBe(false);
  });
});

describe("Article CMS Validation", () => {
  it("validates well-formed article", () => {
    const result = ArticleSchema.safeParse({
      title: "Understanding Mutation Entries in Gujarat",
      slug: "understanding-mutation-entries-gujarat",
      excerpt: "A comprehensive guide on Village Form 6 Hak Patrak entries and certification.",
      content: "This is a detailed markdown legal guide explaining the entire process...",
      category: "Revenue Law",
      readTime: "5 min read",
      published: true,
    });
    expect(result.success).toBe(true);
  });
});
