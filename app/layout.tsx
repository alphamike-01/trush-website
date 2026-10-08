import type { Metadata } from "next";
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ConsultationModalProvider } from "@/components/ConsultationModal";
import { FIRM_DETAILS } from "@/lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://trushlegal.com"),
  title: {
    default: `${FIRM_DETAILS.name} | Revenue Law & Property Advocates Ahmedabad`,
    template: `%s | ${FIRM_DETAILS.name}`,
  },
  description:
    "TRUSH LEGAL FIRM provides professional legal assistance in Revenue Law, Land Disputes, Property Law, Title Verification, and Legal Documentation in Ahmedabad, Gujarat. Advocates Adv. Akshay J. Radadiya & Adv. Dhruvik A. Gabani.",
  keywords: [
    "TRUSH LEGAL FIRM",
    "Revenue Law Ahmedabad",
    "Property Law Advocate Ahmedabad",
    "Land Disputes Gujarat",
    "Mutation Entry RTS Proceedings",
    "Title Verification Lawyer",
    "Title Clearance Certificate Ahmedabad",
    "Adv Akshay J Radadiya",
    "Adv Dhruvik A Gabani",
    "Village Form 7 12 Hak Patrak Verification",
    "Legal Documentation Sale Deed Ahmedabad",
  ],
  authors: [{ name: "TRUSH LEGAL FIRM" }],
  creator: "TRUSH LEGAL FIRM",
  publisher: "TRUSH LEGAL FIRM",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://trushlegal.com",
    title: `${FIRM_DETAILS.name} - Revenue, Land & Property Legal Assistance`,
    description:
      "Professional legal assistance in revenue law, land disputes, property title verification, and legal documentation in Ahmedabad.",
    siteName: FIRM_DETAILS.name,
  },
  twitter: {
    card: "summary_large_image",
    title: FIRM_DETAILS.name,
    description:
      "Professional legal assistance in Revenue, Land & Property Matters. Advocates Adv. Akshay J. Radadiya & Adv. Dhruvik A. Gabani.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Schema.org LegalService structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: FIRM_DETAILS.name,
    description: FIRM_DETAILS.tagline,
    url: "https://trushlegal.com",
    telephone: "",
    email: FIRM_DETAILS.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "B-320, Sun West Bank, Nr. Shiv Cinema, Ashram Road",
      addressLocality: "Ahmedabad",
      addressRegion: "Gujarat",
      postalCode: "380009",
      addressCountry: "IN",
    },
    employee: FIRM_DETAILS.lawyers.map((lawyer) => ({
      "@type": "Person",
      name: lawyer.name,
      jobTitle: lawyer.role,
    })),
    areaServed: "Gujarat, India",
    knowsAbout: [
      "Revenue Law",
      "Property Law",
      "Land Disputes",
      "Title Verification",
      "Legal Documentation",
      "Mutation Entries",
      "RTS Proceedings",
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-slate-900 antialiased selection:bg-gold-500 selection:text-white">
        <ConsultationModalProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ConsultationModalProvider>
      </body>
    </html>
  );
}
