import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { ConsultationSchema } from "@/lib/validation";
import { checkRateLimit } from "@/lib/rate-limit";
import { sendEnquiryNotificationEmail } from "@/lib/email";
import { getAdminSessionFromCookies } from "@/lib/auth";

export async function POST(req: NextRequest) {
  try {
    // 1. Client IP rate limiting (10 submissions per 10 minutes per IP)
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "127.0.0.1";

    const rateLimit = checkRateLimit(`enquiry_${ip}`, 10, 10 * 60 * 1000);
    if (!rateLimit.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Too many enquiries submitted from this network. Please wait a few minutes before trying again.",
        },
        { status: 429 }
      );
    }

    // 2. Parse body
    const body = await req.json();

    // 3. Validate with Zod
    const validationResult = ConsultationSchema.safeParse(body);
    if (!validationResult.success) {
      const firstError = validationResult.error.errors[0]?.message || "Invalid input data.";
      return NextResponse.json(
        {
          success: false,
          error: firstError,
          errors: validationResult.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const { name, mobile, email, matterType, description, websiteHoneypot } =
      validationResult.data;

    // 4. Honeypot check (anti-bot)
    if (websiteHoneypot) {
      // Silently return ok or reject
      return NextResponse.json(
        { success: true, message: "Enquiry received." },
        { status: 200 }
      );
    }

    // 5. Store in database
    const enquiry = await prisma.enquiry.create({
      data: {
        name,
        mobile,
        email,
        matterType,
        description,
        ipAddress: ip,
        status: "PENDING",
      },
    });

    // 6. Asynchronous email notification dispatch
    try {
      await sendEnquiryNotificationEmail({
        name,
        mobile,
        email,
        matterType,
        description,
        enquiryId: enquiry.id,
      });
    } catch (emailErr) {
      console.error("Non-blocking email dispatch notification error:", emailErr);
    }

    return NextResponse.json(
      {
        success: true,
        message: "Your enquiry has been received successfully. A legal representative will review your matter and contact you shortly.",
        enquiryId: enquiry.id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Enquiry submission API error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "An internal server error occurred while processing your enquiry. Please try again or reach out to trushlegalf@gmail.com directly.",
      },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    const session = await getAdminSessionFromCookies();
    if (!session) {
      return NextResponse.json({ error: "Unauthorized access" }, { status: 401 });
    }

    const searchParams = req.nextUrl.searchParams;
    const status = searchParams.get("status");
    const matterType = searchParams.get("matterType");

    const whereClause: { status?: string; matterType?: string } = {};
    if (status && status !== "ALL") whereClause.status = status;
    if (matterType && matterType !== "ALL") whereClause.matterType = matterType;

    const enquiries = await prisma.enquiry.findMany({
      where: whereClause,
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({ success: true, enquiries });
  } catch (error) {
    console.error("Admin enquiries fetch error:", error);
    return NextResponse.json({ error: "Failed to fetch enquiries" }, { status: 500 });
  }
}
