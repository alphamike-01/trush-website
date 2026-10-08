import { describe, it, expect, beforeAll, afterAll } from "vitest";
import { prisma } from "@/lib/db";
import { ConsultationSchema } from "@/lib/validation";

describe("Consultation Enquiry Pipeline & Database Integration", () => {
  const testEnquiry = {
    name: "Vikrambhai Desai",
    mobile: "9825012345",
    email: "vikram.desai@example.com",
    matterType: "Revenue Law" as const,
    description: "Inquiry regarding Village Form 6 entry number 1420 certification before Mamlatdar.",
  };

  it("validates and creates an enquiry in the database", async () => {
    // 1. Validation
    const validation = ConsultationSchema.safeParse(testEnquiry);
    expect(validation.success).toBe(true);

    if (validation.success) {
      // 2. Database Creation
      const created = await prisma.enquiry.create({
        data: {
          name: validation.data.name,
          mobile: validation.data.mobile,
          email: validation.data.email,
          matterType: validation.data.matterType,
          description: validation.data.description,
          status: "PENDING",
        },
      });

      expect(created.id).toBeDefined();
      expect(created.status).toBe("PENDING");
      expect(created.name).toBe("Vikrambhai Desai");

      // 3. Verification & Query
      const retrieved = await prisma.enquiry.findUnique({
        where: { id: created.id },
      });
      expect(retrieved).not.toBeNull();
      expect(retrieved?.matterType).toBe("Revenue Law");

      // 4. Status Update (Simulating Admin action)
      const updated = await prisma.enquiry.update({
        where: { id: created.id },
        data: { status: "UNDER_REVIEW", adminNotes: "Assigned to Adv. Akshay J. Radadiya" },
      });
      expect(updated.status).toBe("UNDER_REVIEW");
      expect(updated.adminNotes).toBe("Assigned to Adv. Akshay J. Radadiya");

      // Cleanup test record
      await prisma.enquiry.delete({ where: { id: created.id } });
    }
  });
});
