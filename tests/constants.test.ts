import { describe, it, expect } from "vitest";
import { FIRM_DETAILS, MATTER_TYPES, FAQ_ITEMS } from "@/lib/constants";

describe("Client Information & Requirements Integrity", () => {
  it("strictly preserves client lawyers without invention", () => {
    expect(FIRM_DETAILS.lawyers).toHaveLength(2);
    expect(FIRM_DETAILS.lawyers[0].name).toBe("Adv. Akshay J. Radadiya");
    expect(FIRM_DETAILS.lawyers[1].name).toBe("Adv. Dhruvik A. Gabani");
  });

  it("strictly preserves client office address", () => {
    expect(FIRM_DETAILS.office.line1).toContain("B-320, Sun West Bank");
    expect(FIRM_DETAILS.office.line2).toContain("Ashram Road");
    expect(FIRM_DETAILS.office.cityStateZip).toContain("Ahmedabad – 380009");
  });

  it("strictly preserves client contact email", () => {
    expect(FIRM_DETAILS.email).toBe("trushlegalf@gmail.com");
  });

  it("contains all 7 client-specified matter options", () => {
    const requiredMatters = [
      "Revenue Law",
      "Land Dispute",
      "Property Title",
      "Mutation Entry",
      "Legal Documentation",
      "Property Search",
      "Other",
    ];
    for (const matter of requiredMatters) {
      expect(MATTER_TYPES).toContain(matter);
    }
  });

  it("contains all 5 client-supplied FAQs", () => {
    expect(FAQ_ITEMS).toHaveLength(5);
    const questions = FAQ_ITEMS.map((f) => f.question);
    expect(questions).toContain("What is a mutation entry?");
    expect(questions).toContain("Does a revenue entry itself establish ownership?");
    expect(questions).toContain("Why should I conduct a title search before purchasing land?");
    expect(questions).toContain("Can a disputed revenue entry be challenged?");
    expect(questions).toContain("What documents are required for property title verification?");
  });
});
