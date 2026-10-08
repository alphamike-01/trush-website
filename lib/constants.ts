export const FIRM_DETAILS = {
  name: "TRUSH LEGAL FIRM",
  tagline: "Professional Legal Assistance in Revenue, Land & Property Matters",
  specialties: "Revenue Law • Property Law • Land Disputes • Legal Documentation",
  office: {
    line1: "B-320, Sun West Bank,",
    line2: "Nr. Shiv Cinema, Ashram Road,",
    cityStateZip: "Ahmedabad – 380009",
    fullAddress: "B-320, Sun West Bank, Nr. Shiv Cinema, Ashram Road, Ahmedabad – 380009",
  },
  email: "trushlegalf@gmail.com",
  lawyers: [
    {
      name: "Adv. Akshay J. Radadiya",
      role: "Advocate",
      designation: "Legal Practitioner",
      specialization: "Revenue Law, Land Disputes & Property Litigation",
    },
    {
      name: "Adv. Dhruvik A. Gabani",
      role: "Advocate",
      designation: "Legal Practitioner",
      specialization: "Title Verification, Revenue Records & Legal Documentation",
    },
  ],
  approachPillars: [
    {
      title: "Detailed Examination of Documents",
      description: "Thorough review of sale deeds, agreements, partition documents, revenue extracts, and relevant transactional records.",
    },
    {
      title: "Legal Research",
      description: "Application of statutory provisions under land revenue codes, tenancy laws, registration acts, and authoritative judicial precedents.",
    },
    {
      title: "Verification of Revenue Records",
      description: "Meticulous inspection of Village Forms (7/12, 8A, 6), mutation entries, hak patrak, and administrative registers.",
    },
    {
      title: "Identification of Ownership & Title Issues",
      description: "Rigorous scrutiny to identify gaps in title chain, disputed succession, encumbrances, and defective mutation entries.",
    },
    {
      title: "Proper Legal Documentation",
      description: "Drafting robust conveyances, agreements to sell, partition deeds, gift deeds, release deeds, and legally binding undertakings.",
    },
    {
      title: "Representation Before Appropriate Authorities",
      description: "Advocacy before Mamlatdar, Prant Officer, Deputy Collector, Collector, and Appellate Revenue Tribunals.",
    },
    {
      title: "Strategic Handling of Disputes",
      description: "Strategic legal measures to protect ownership rights, challenge invalid entries, and resolve contentious land conflicts.",
    },
  ],
  whyChooseUs: [
    {
      title: "Specialized Practice",
      description: "Focused exclusively on revenue, land, and property-related legal matters, bringing concentrated domain depth.",
    },
    {
      title: "Document-Based Analysis",
      description: "Important documents and records are thoroughly examined before rendering legal advice or initiating proceedings.",
    },
    {
      title: "Detailed Legal Research",
      description: "Applicable laws, rules, notifications, and judicial decisions are considered where relevant for sound legal strategy.",
    },
    {
      title: "Client-Focused Assistance",
      description: "Clients are clearly informed about the procedural legal process, statutory remedies, and realistic options.",
    },
    {
      title: "Property & Revenue Expertise",
      description: "Dedicated focus on the critical intersection between revenue records, registered property documents, and substantive civil title rights.",
    },
  ],
  disclaimer:
    "The information provided on this website is for general informational purposes only and does not constitute legal advice. Visiting this website, submitting an enquiry, or communicating through this platform does not create an advocate-client relationship. Appropriate legal remedies and forum selection depend on the specific facts, revenue records, and documents of each matter. Viewers are advised to seek formal legal counsel regarding their specific situation.",
};

export const MATTER_TYPES = [
  "Revenue Law",
  "Land Dispute",
  "Property Title",
  "Mutation Entry",
  "Legal Documentation",
  "Property Search",
  "Other",
] as const;

export type MatterType = (typeof MATTER_TYPES)[number];

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Practice Areas",
    href: "/practice-areas",
    dropdown: [
      { label: "Revenue Law", href: "/revenue-law" },
      { label: "Land & Property Disputes", href: "/land-disputes" },
      { label: "Title Verification & Search", href: "/title-verification" },
      { label: "Title Clearance", href: "/title-clearance" },
      { label: "Property Owner / Revenue Record Entry", href: "/revenue-record-entry" },
      { label: "Legal Documentation", href: "/legal-documentation" },
      { label: "Property & Revenue Record Search", href: "/property-search" },
      { label: "Banking & Financial Services", href: "/banking-services" },
      { label: "Legal Research & Opinion", href: "/legal-opinion" },
    ],
  },
  { label: "Articles", href: "/articles" },
  { label: "Contact", href: "/contact" },
];

export const FAQ_ITEMS = [
  {
    question: "What is a mutation entry?",
    answer:
      "A mutation entry (commonly recorded in revenue registers such as Village Form No. 6 / Hak Patrak) is an administrative fiscal entry made in government revenue records reflecting a change in the possession, holding, or revenue liability of land—whether occurring through a registered sale transaction, inheritance/succession, gift, partition, or order of an authority. It serves primarily for fiscal assessment and land revenue collection purposes.",
  },
  {
    question: "Does a revenue entry itself establish ownership?",
    answer:
      "No. It is a well-settled principle of Indian land jurisprudence that entries in revenue records (such as 7/12 extracts or mutation entries) are primarily maintained for fiscal purposes and the collection of land revenue. A revenue entry does not confer or extinguish substantive civil title or ownership rights. Substantive ownership rights are determined by registered title deeds and competent civil court adjudications. The intersection between revenue records and civil title requires careful legal examination of both documentary streams.",
  },
  {
    question: "Why should I conduct a title search before purchasing land?",
    answer:
      "Conducting a comprehensive title search and document verification before purchasing land or immovable property is vital to establish an unbroken chain of ownership, verify that previous registered transfers are valid, ensure that revenue records match civil documents, identify any pending RTS or revenue disputes, and check for encumbrances, family partition claims, or statutory restrictions under agricultural tenancy or land laws. Verifying these records prior to execution minimizes the risk of contentious disputes or defective title.",
  },
  {
    question: "Can a disputed revenue entry be challenged?",
    answer:
      "Yes. A disputed or erroneous mutation entry can be contested or challenged before the competent revenue authorities through appropriate statutory proceedings—such as filing objections at the certification stage before the Mamlatdar, or preferring Revenue Takrari Sarta (RTS) Appeals or Revision proceedings before the Sub-Divisional Officer (Prant Officer), Deputy Collector, or District Collector under the applicable Land Revenue Code. The appropriate forum and limitation depend on the nature of the entry and governing rules.",
  },
  {
    question: "What documents are required for property title verification?",
    answer:
      "Typical documents examined for comprehensive property title verification include: previous chain deeds (registered sale deeds, gift deeds, partition deeds, release deeds), current and historical revenue records (Village Form 7/12 extracts, 8A extracts, and certified copies of Village Form 6 mutation entries spanning 30+ years), City Survey property cards (where applicable), Non-Agricultural (NA) permissions and development approvals, Encumbrance Certificates from the Sub-Registrar's office, receipt of paid land revenue/property tax, and certified copies of any court decrees or revenue orders affecting the land.",
  },
];
