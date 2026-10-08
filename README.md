# TRUSH LEGAL FIRM — Official Web Application & Consultation Portal

> **Professional Legal Assistance in Revenue, Land & Property Matters**
> Advocates: **Adv. Akshay J. Radadiya** & **Adv. Dhruvik A. Gabani**
> Office: **B-320, Sun West Bank, Nr. Shiv Cinema, Ashram Road, Ahmedabad – 380009**
> Email: **trushlegalf@gmail.com**

---

## 1. Project Overview

TRUSH LEGAL FIRM is a production-grade full-stack web application and legal case management portal designed for a specialized legal practice headquartered on Ashram Road in Ahmedabad, Gujarat. The firm specializes in:
- **Revenue Law & Village Form 6 Hak Patrak Mutation Entries**
- **Land & Property Disputes (Ownership, Possession, Boundary, Partition)**
- **Property Title Verification (30-Year Retrospective Chain of Title)**
- **Title Clearance & Public Title Notices**
- **Property Owner / Revenue Record Entries (Varsai, Purchase, Partition)**
- **Legal Documentation (Sale Deeds, Agreements to Sell, Gift Deeds, Powers of Attorney)**
- **Property & Revenue Record Search (5-Phase Due Diligence Protocol)**
- **Banking & Financial Institution Title Scrutiny**
- **Formal Written Legal Opinions**

The application provides a seamless client-facing interface, an accessible 5-step property search visualizer, a real working consultation enquiry pipeline with validation, spam protection, and database persistence, as well as a secure administrative back-office for managing client matters and publishing educational legal articles.

---

## 2. Key Features

- **Strict Client Truth & Compliance**: Strictly accurate firm positioning without fabricated qualifications, awards, or false claims. Adheres to Bar Council of India guidelines.
- **Complete Practice Area Architecture**: Dedicated deep-dive pages for Revenue Law, Land Disputes, Title Verification, Title Clearance, Revenue Record Entry, Legal Documentation, Property Search, Banking Services, and Legal Opinions.
- **Interactive 5-Phase Search Workflow**: Visual step-by-step methodology explaining `PROPERTY SEARCH → REVENUE RECORD EXAMINATION → DOCUMENT VERIFICATION → LEGAL ANALYSIS → OPINION`.
- **Working Consultation Enquiry System**:
  - Live form processing with client-side & server-side Zod validation.
  - Multi-tier anti-spam protection (honeypot fields + in-memory sliding window rate limiting).
  - SQLite/PostgreSQL persistence via Prisma ORM.
  - SMTP notification abstraction with fallback structured logging.
- **Client & Admin Portal**:
  - Secure credential authentication with `bcryptjs` and HTTP-only JWT cookies (`jose`).
  - Real-time enquiry status tracking (`PENDING`, `UNDER_REVIEW`, `CONTACTED`, `RESOLVED`, `ARCHIVED`).
  - Search and filter by client name, mobile, email, and matter type.
  - Article Knowledge Base CMS with full CRUD capabilities.
- **SEO & Performance Engineered**:
  - Semantic HTML5, accessible ARIA attributes, and visible focus rings.
  - Dynamic `sitemap.ts` and crawler-friendly `robots.ts`.
  - Schema.org `LegalService` JSON-LD structured data.
- **Automated Testing & Build Verification**: Automated unit, component, rate limiting, and schema tests via Vitest.

---

## 3. Technology Stack

| Layer | Technologies |
|---|---|
| **Frontend Framework** | Next.js 14 (App Router), React 18, TypeScript 5 |
| **Styling & UI** | Tailwind CSS 3, Lucide React icons, Responsive Glassmorphism |
| **Backend & APIs** | Next.js API Route Handlers (Node.js runtime) |
| **Database ORM** | Prisma 5 with SQLite (file:./dev.db) / Swappable to PostgreSQL |
| **Validation** | Zod (Client & Server schemas) |
| **Authentication** | JWT (`jose`), HTTP-only secure cookies, `bcryptjs` |
| **Email Interface** | Nodemailer with automatic development simulation fallback |
| **Testing** | Vitest, React Testing Library, JSDOM, Jest-DOM |

---

## 4. Architecture

```
[ User Browser ]
       │
       ▼
[ Next.js 14 App Router ]
  ├── Client Components (Forms, Modals, Accordions, Visualizer)
  ├── Server Components (SEO Metadata, Dynamic Articles, Layouts)
  └── API Route Handlers
        ├── POST /api/enquiries (Validation, Honeypot, Rate Limit)
        ├── GET /api/enquiries (Admin Session Protected)
        ├── PATCH /api/enquiries/[id] (Status & Notes)
        ├── POST /api/auth/login (JWT Generation & Cookie)
        └── CRUD /api/articles (Public Read / Admin Write)
             │
             ├──► [ SQLite / PostgreSQL Database via Prisma ]
             └──► [ SMTP Email Gateway / Structured Logger ]
```

---

## 5. Folder Structure

```
trush-legal-firm/
├── app/
│   ├── about/page.tsx                     # About firm, lawyers & approach
│   ├── practice-areas/page.tsx             # 8-discipline overview
│   ├── revenue-law/page.tsx                # Mutation, RTS, Collector matters
│   ├── land-disputes/page.tsx              # Land disputes & civil title distinction
│   ├── title-verification/page.tsx         # 30-year chain & buyer CTA
│   ├── title-clearance/page.tsx            # Title clearance & public notices
│   ├── revenue-record-entry/page.tsx       # Varsai, Hak Patrak, corrections
│   ├── legal-documentation/page.tsx        # Sale deeds, Banakhat, POAs
│   ├── property-search/page.tsx            # 5-phase workflow visualizer
│   ├── banking-services/page.tsx           # Institutional lender vetting
│   ├── legal-opinion/page.tsx              # Formal written opinions
│   ├── articles/
│   │   ├── page.tsx                        # Knowledge center & category filters
│   │   └── [slug]/page.tsx                 # Full article view & disclaimer
│   ├── contact/page.tsx                    # Office location, lawyers, form
│   ├── disclaimer/page.tsx                 # Regulatory terms of access
│   ├── admin/
│   │   ├── login/page.tsx                  # Secure admin login
│   │   ├── dashboard/page.tsx              # Analytics & quick actions
│   │   ├── enquiries/page.tsx              # Enquiry management & notes
│   │   └── articles/page.tsx               # Article CMS CRUD
│   ├── api/
│   │   ├── enquiries/route.ts
│   │   ├── enquiries/[id]/route.ts
│   │   ├── auth/login/route.ts
│   │   ├── auth/logout/route.ts
│   │   ├── auth/me/route.ts
│   │   └── articles/
│   ├── sitemap.ts                          # Dynamic XML sitemap
│   ├── robots.ts                           # Crawler rules
│   ├── not-found.tsx                       # Custom 404 page
│   ├── error.tsx                           # Application error boundary
│   ├── loading.tsx                         # Loading spinner
│   └── layout.tsx                          # Root layout, Navbar, Footer, JSON-LD
├── components/
│   ├── Navbar.tsx                          # Responsive header with CTA
│   ├── Footer.tsx                          # Detailed footer with disclaimer
│   ├── ConsultationForm.tsx                # Real validated enquiry form
│   ├── ConsultationModal.tsx               # Global "Consult a Lawyer" popup
│   ├── FAQAccordion.tsx                    # Accessible FAQ accordion
│   ├── WorkflowVisualizer.tsx              # 5-step search workflow visualizer
│   ├── AttorneysSection.tsx                # Strictly accurate lawyer profiles
│   ├── PracticeCard.tsx                    # Reusable practice card
│   └── LegalDisclaimer.tsx                 # Prominent disclaimer component
├── lib/
│   ├── constants.ts                        # Firm details, addresses, lawyers
│   ├── db.ts                               # Prisma client singleton
│   ├── validation.ts                       # Zod schemas
│   ├── auth.ts                             # JWT and password hashing
│   ├── rate-limit.ts                       # In-memory IP rate limiter
│   └── email.ts                            # Email transport with simulation
├── prisma/
│   ├── schema.prisma                       # Models: Enquiry, Article, AdminUser
│   └── seed.ts                             # Seeding script for admin & articles
├── styles/globals.css                      # Tailwind directives & legal theme
├── tests/
│   ├── setup.ts
│   ├── constants.test.ts
│   ├── validation.test.ts
│   ├── rate-limit.test.ts
│   └── components.test.tsx
├── .env.example
├── package.json
├── tsconfig.json
└── README.md
```

---

## 6. Installation & Local Development

### Prerequisites
- Node.js (v18.17+ or v20+ recommended)
- npm (v9+)

### Steps
1. **Clone or navigate to the project directory**:
   ```bash
   cd trush-legal-firm
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   ```bash
   cp .env.example .env
   ```

4. **Synchronize Database & Seed Initial Records**:
   ```bash
   npx prisma db push
   npx tsx prisma/seed.ts
   ```

5. **Start Development Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 7. Environment Variables

| Variable | Description | Default / Example |
|---|---|---|
| `DATABASE_URL` | SQLite path or PostgreSQL connection string | `file:./dev.db` |
| `JWT_SECRET` | Secret key for signing admin authentication tokens | Random 32+ characters |
| `ADMIN_USERNAME` | Default admin username | `admin` |
| `ADMIN_PASSWORD` | Default admin password | `TrushLegalSecurePassword2026!` |
| `SMTP_HOST` | Optional SMTP host for live email delivery | `smtp.gmail.com` |
| `SMTP_PORT` | SMTP port | `587` |
| `SMTP_USER` | SMTP username | `user@example.com` |
| `SMTP_PASS` | SMTP application password | `secret` |
| `SMTP_FROM` | Sender address | `trushlegalf@gmail.com` |
| `NOTIFICATION_EMAIL` | Enquiry notification recipient | `trushlegalf@gmail.com` |
| `NEXT_PUBLIC_SITE_URL` | Canonical public URL for sitemap | `https://trushlegal.com` |

---

## 8. Database Models

- **`Enquiry`**: Stores client name, 10-digit mobile number, email, matter type, detailed description, status, advocate notes, and client IP.
- **`Article`**: Stores educational legal articles with title, slug, category, excerpt, full markdown content, read time, and publication status.
- **`AdminUser`**: Stores administrative credentials with secure `bcrypt` password hashes and roles.

---

## 9. Testing & Quality Verification

Run the automated test suite with:
```bash
npm test
```
Run linter:
```bash
npm run lint
```
Run production build:
```bash
npm run build
```

---

## 10. Deployment

### Deploying to Vercel
1. Push repository to GitHub or GitLab.
2. Import project into [Vercel](https://vercel.com).
3. If using persistent external storage, configure `DATABASE_URL` to a hosted PostgreSQL instance (e.g. Supabase, Neon, Railway) and update `provider = "postgresql"` in `prisma/schema.prisma`.
4. Set `JWT_SECRET` and `NEXT_PUBLIC_SITE_URL` in Vercel Environment Variables.
5. Deploy.

### Self-Hosted Docker or Node.js Server
```bash
npm run build
npm run start
```

---

## 11. Security Architecture

- **No Hardcoded Secrets**: All authentication keys and sensitive values use environment variables.
- **Password Protection**: Passwords hashed with `bcryptjs` (salt rounds: 10).
- **Anti-Bot Defense**: Form submissions include a hidden honeypot field.
- **Rate Limiting**: Sliding window rate limiting on enquiry submissions and authentication attempts.
- **Injection Safety**: Parameterized database queries via Prisma ORM prevent SQL injection.
- **XSS Protection**: React automatic escaping of user inputs and parameterized routes.
- **CSRF & Cookie Hardening**: HTTP-only, SameSite=Lax session cookies.

---

## 12. Maintenance & Support

For questions regarding website maintenance or configuration, contact:
- **TRUSH LEGAL FIRM**: [trushlegalf@gmail.com](mailto:trushlegalf@gmail.com)
- **Office**: B-320, Sun West Bank, Nr. Shiv Cinema, Ashram Road, Ahmedabad – 380009
