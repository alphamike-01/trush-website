import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding TRUSH LEGAL FIRM database...");

  const adminUsername = process.env.ADMIN_USERNAME || "admin";
  const rawAdminPassword = process.env.ADMIN_PASSWORD || "TrushLegalSecurePassword2026!";
  const passwordHash = await bcrypt.hash(rawAdminPassword, 10);

  const existingAdmin = await prisma.adminUser.findUnique({
    where: { username: adminUsername },
  });

  if (!existingAdmin) {
    await prisma.adminUser.create({
      data: {
        username: adminUsername,
        passwordHash,
        name: "TRUSH Legal Admin",
        role: "ADMIN",
      },
    });
    console.log(`Admin user created: ${adminUsername}`);
  } else {
    await prisma.adminUser.update({
      where: { username: adminUsername },
      data: { passwordHash },
    });
    console.log(`Admin user password updated for: ${adminUsername}`);
  }

  // Seed initial informative legal articles
  const articles = [
    {
      title: "Understanding Mutation Entries in Gujarat Revenue Records: Procedural Overview",
      slug: "understanding-mutation-entries-revenue-records",
      excerpt:
        "An overview of Village Form No. 6 (Hak Patrak), recording mutation entries for sale, inheritance, gift, or partition, and the statutory certification process.",
      content: `### What is a Mutation Entry?

In the revenue administration of Gujarat and Western India, a mutation entry (नोंध / Nondh) is a formal administrative entry made in the Record of Rights—specifically Village Form No. 6, known colloquially as the **Hak Patrak**.

Whenever an event occurs that alters the possession, title claim, or fiscal revenue liability of an agricultural parcel—such as a registered sale deed, inheritance (वारसाई / Varsai), gift, partition, or mortgage—the revenue authorities record a tentative entry in Village Form No. 6.

### The Certification Process

1. **Preliminary Entry (Kachi Nondh):** The Talati-cum-Mantri records the transaction details upon receiving intimation or an application along with certified supporting documents.
2. **Statutory Notice under Section 135-D:** Notices are issued to all interested parties, co-sharers, and individuals whose names appear in the revenue records, inviting objections within the prescribed statutory period (typically 30 days).
3. **Examination by Revenue Officer:** If no objections are raised, the competent revenue officer (such as the Circle Officer or Mamlatdar) certifies the entry.
4. **Reflecting in Village Form 7/12 & 8A:** Once certified (Paaki Nondh), the entry is transcribed into the 7/12 extract and 8A khata register.

### Disputed Mutation Entries

If an objection is submitted during the notice period, the entry is flagged as disputed (Takrari Nondh) and referred to the Mamlatdar for summary quasi-judicial inquiry under the Gujarat Land Revenue Code.

*Disclaimer: This article provides general legal information on statutory procedures and does not constitute formal legal counsel. For specific revenue entry matters, consultation with an advocate is recommended.*`,
      category: "Revenue Law",
      author: "TRUSH LEGAL FIRM",
      readTime: "5 min read",
      published: true,
    },
    {
      title: "The Critical Distinction Between Revenue Records and Substantive Civil Title Rights",
      slug: "revenue-records-vs-civil-title-rights",
      excerpt:
        "Why a 7/12 extract or mutation entry does not confer title, and why civil title ownership is governed strictly by substantive registered documents and civil court adjudications.",
      content: `### Revenue Records are Fiscal in Nature

A recurring misconception in property transactions is that holding one's name in a revenue extract (such as Village Form 7/12, 8A, or Hak Patrak) conclusively proves absolute legal ownership of immovable property.

The Supreme Court of India has reiterated in numerous landmark decisions (including *Bhimabai Mahadeo Kambekar v. Arthur Import & Export Co.* and *Sawarni v. Inder Kaur*) that:
- Entries in revenue records are maintained solely for fiscal purposes—namely, determining who is liable to pay land revenue to the State Government.
- Revenue authorities do not have the jurisdiction to adjudicate complicated questions of civil title.
- A revenue entry neither creates nor extinguishes title to immovable property.

### Where Does Civil Title Originate?

Civil title to immovable property is derived from:
1. **Valid Registered Title Deeds:** Duly stamped and registered conveyance deeds (Sale Deed, Gift Deed, Partition Deed, Release Deed) under the Registration Act, 1908.
2. **Law of Succession:** Lawful testate or intestate succession under applicable personal laws (e.g., Hindu Succession Act, 1956).
3. **Civil Court Decrees:** Declaratory judgments and partition decrees passed by competent Civil Courts under the Specific Relief Act, 1963.

### Navigating Conflicts Between Title and Revenue Entries

When a registered sale deed exists in favor of a purchaser but the revenue authorities fail to certify the mutation entry, or certify an erroneous entry favoring another party, the remedy lies in challenging the revenue entry before appellate revenue forums (SDO/Prant, Collector) or seeking declaratory injunction from the competent Civil Court.

*Disclaimer: This article is for informational purposes only. Appropriate remedies depend strictly on the facts and registered deeds of each dispute.*`,
      category: "Property Law",
      author: "TRUSH LEGAL FIRM",
      readTime: "6 min read",
      published: true,
    },
    {
      title: "Why Comprehensive Title Clearance is Critical Prior to Immovable Property Acquisition",
      slug: "comprehensive-title-clearance-before-property-acquisition",
      excerpt:
        "Examining chain of ownership, encumbrance certificates, revenue records, and statutory restrictions before completing property purchase transactions.",
      content: `### The Principle of Caveat Emptor (Buyer Beware)

In real estate transactions, the doctrine of *caveat emptor* places the legal burden on the prospective buyer to ascertain the vendor's title, authority to convey, and freedom from encumbrances.

Discovering a title defect after executing and registering a sale deed frequently results in protracted civil litigation, financial loss, or attachment of property.

### Core Components of a Rigorous Title Clearance Process

A diligent title search must encompass multiple complementary investigations:
1. **Unbroken Chain of Title (30-Year Search):** Tracing title deeds backwards for at least 30 years to verify how ownership transferred across successive owners.
2. **Sub-Registrar Encumbrance Search:** Inspecting registered index registers at the Sub-Registrar's Office to identify mortgages, court attachments, prior sales, or registered lis pendens notices.
3. **Revenue Record Verification:** Scrutinizing certified copies of Village Forms 7/12, 8A, and Village Form 6 mutation entries to ensure revenue regularity and absence of pending RTS disputes.
4. **Tenancy and Agricultural Law Restrictions:** Verifying compliance with Section 63 of the Gujarat Tenancy and Agricultural Lands Act (farmer status requirement), fragmentation laws, and ceiling regulations.
5. **Public Title Notice:** Publishing a formal notice in regional and English newspapers inviting claims, objections, or third-party encumbrances prior to final transaction execution.

*Disclaimer: General informational guide only. Always obtain a formal Title Search Report and Opinion from a legal practitioner prior to executing property agreements.*`,
      category: "Title Verification",
      author: "TRUSH LEGAL FIRM",
      readTime: "7 min read",
      published: true,
    },
    {
      title: "RTS Proceedings Explained: Contesting and Correcting Disputed Hak Patrak Entries",
      slug: "rts-proceedings-contesting-disputed-revenue-entries",
      excerpt:
        "A statutory guide to RTS cases, appeals, and revision proceedings before Mamlatdars, Prant Officers, and District Collectors in Gujarat.",
      content: `### What are RTS Proceedings?

RTS stands for **Revenue Takrari Sarta** (Revenue Dispute Proceedings). Under the Land Revenue Code and governing rules, when a mutation entry is disputed, or when an aggrieved party challenges an entry that was certified improperly, the matter is adjudicated through RTS proceedings.

### Hierarchy of Revenue Adjudication

1. **RTS Dispute Case (Mamlatdar):**
   When an objection is raised against a pending mutation entry under Section 135-D of the Land Revenue Code, the Talati refers the objection to the Mamlatdar. The Mamlatdar conducts summary hearings, examines revenue records and registered deeds, and passes an order certifying or rejecting the entry.

2. **RTS Appeal (Prant Officer / Sub-Divisional Officer):**
   Any person aggrieved by an order passed by the Mamlatdar may prefer a statutory appeal before the Sub-Divisional Officer (Prant Officer / Deputy Collector) within the prescribed limitation period (typically 60 days).

3. **RTS Revision (District Collector):**
   An order passed by the Prant Officer in appeal can be subjected to revision before the District Collector. The Collector has revisional jurisdiction to examine the legality, propriety, and regularity of the subordinate revenue officer's order.

4. **Special Secretary, Revenue Department (SSRD):**
   Against the order of the District Collector, a revision application can be filed before the SSRD (Appeals) at the State level, followed by writ proceedings before the High Court under Article 226/227.

*Disclaimer: Informational overview of administrative procedures. Statutory limitation periods and procedural rules must be evaluated for individual matters.*`,
      category: "Land Disputes",
      author: "TRUSH LEGAL FIRM",
      readTime: "6 min read",
      published: true,
    },
    {
      title: "Essential Legal Documents in Property Conveyance: What Every Buyer and Seller Must Know",
      slug: "essential-legal-documents-property-conveyance",
      excerpt:
        "From Agreements to Sell and Sale Deeds to Powers of Attorney and Release Deeds: Understanding the legal consequences of conveyancing instruments.",
      content: `### Distinguishing the Key Instruments

Drafting precision in property documentation is the bedrock of secure real estate transactions. Ambiguity or improper drafting can lead to unmarketable titles and tax liabilities.

#### 1. Agreement to Sell (Banakhat)
An Agreement to Sell establishes the mutual terms, covenants, consideration, payment schedules, and conditions precedent between buyer and seller.
*Key Legal Aspect:* An agreement to sell does not, by itself, convey ownership or create an interest in the immovable property (Section 54, Transfer of Property Act, 1882). It creates an actionable contractual right to enforce specific performance.

#### 2. Conveyance / Sale Deed (Dastavej)
The Sale Deed is the substantive legal instrument that transfers absolute title, rights, and interest from the seller to the buyer upon payment of consideration.
*Key Legal Aspect:* It must be duly stamped as per State Stamp Act rates and registered under Section 17 of the Registration Act, 1908.

#### 3. Partition Deed vs. Family Settlement
When ancestral or joint family property is divided among co-parceners, a formal registered Partition Deed demarcates specific physical shares, metes, and bounds.

#### 4. Release Deed (Hak Choksi / Chhut Dastavej)
Executed when a co-owner or legal heir voluntarily relinquishes their undivided share in favor of another co-owner.

#### 5. Power of Attorney (Mukhtyarnama)
Authorizes an agent to perform specific acts on behalf of the principal. Under current statutory rules, powers of attorney conferring power to sell immovable property attract ad-valorem stamp duty and mandatory registration.

*Disclaimer: General informational document. Conveyance deeds must be drafted according to specific facts and registered under applicable stamp regulations.*`,
      category: "Legal Documentation",
      author: "TRUSH LEGAL FIRM",
      readTime: "5 min read",
      published: true,
    },
  ];

  for (const article of articles) {
    const existing = await prisma.article.findUnique({
      where: { slug: article.slug },
    });
    if (!existing) {
      await prisma.article.create({ data: article });
      console.log(`Created article: ${article.title}`);
    } else {
      await prisma.article.update({
        where: { slug: article.slug },
        data: article,
      });
      console.log(`Updated article: ${article.title}`);
    }
  }

  console.log("Database seeding completed successfully.");
}

main()
  .catch((e) => {
    console.error("Seeding error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
