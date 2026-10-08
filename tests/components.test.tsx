import { describe, it, expect } from "vitest";
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import FAQAccordion from "@/components/FAQAccordion";
import LegalDisclaimer from "@/components/LegalDisclaimer";
import AttorneysSection from "@/components/AttorneysSection";
import WorkflowVisualizer from "@/components/WorkflowVisualizer";

describe("Component Tests", () => {
  it("renders AttorneysSection with Adv. Akshay J. Radadiya & Adv. Dhruvik A. Gabani", () => {
    render(<AttorneysSection />);
    expect(screen.getByText("Adv. Akshay J. Radadiya")).toBeInTheDocument();
    expect(screen.getByText("Adv. Dhruvik A. Gabani")).toBeInTheDocument();
  });

  it("renders LegalDisclaimer with client text", () => {
    render(<LegalDisclaimer />);
    expect(
      screen.getByText(/The information provided on this website is for general informational purposes only/i)
    ).toBeInTheDocument();
  });

  it("renders FAQAccordion and toggles accordion items on click", () => {
    render(<FAQAccordion />);
    expect(screen.getByText("What is a mutation entry?")).toBeInTheDocument();
    expect(screen.getByText("Does a revenue entry itself establish ownership?")).toBeInTheDocument();

    const secondQuestion = screen.getByText("Does a revenue entry itself establish ownership?");
    fireEvent.click(secondQuestion);
    expect(screen.getByText(/No. It is a well-settled principle of Indian land jurisprudence/i)).toBeInTheDocument();
  });

  it("renders WorkflowVisualizer with all 5 phases", () => {
    render(<WorkflowVisualizer />);
    expect(screen.getAllByText("PROPERTY SEARCH").length).toBeGreaterThan(0);
    expect(screen.getAllByText("REVENUE RECORD EXAMINATION").length).toBeGreaterThan(0);
    expect(screen.getAllByText("DOCUMENT VERIFICATION").length).toBeGreaterThan(0);
    expect(screen.getAllByText("LEGAL ANALYSIS").length).toBeGreaterThan(0);
    expect(screen.getAllByText("OPINION").length).toBeGreaterThan(0);
  });
});
