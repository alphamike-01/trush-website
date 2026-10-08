import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { AdminLoginSchema } from "@/lib/validation";
import { comparePassword, signAdminToken, COOKIE_NAME } from "@/lib/auth";
import { checkRateLimit } from "@/lib/rate-limit";

export async function POST(req: NextRequest) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "127.0.0.1";

    const rateLimit = checkRateLimit(`login_${ip}`, 5, 5 * 60 * 1000);
    if (!rateLimit.success) {
      return NextResponse.json(
        { error: "Too many login attempts. Please wait 5 minutes before trying again." },
        { status: 429 }
      );
    }

    const body = await req.json();
    const result = AdminLoginSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { error: "Invalid username or password format." },
        { status: 400 }
      );
    }

    const { username, password } = result.data;
    const adminUser = await prisma.adminUser.findUnique({
      where: { username },
    });

    if (!adminUser) {
      return NextResponse.json(
        { error: "Invalid username or password." },
        { status: 401 }
      );
    }

    const isMatch = await comparePassword(password, adminUser.passwordHash);
    if (!isMatch) {
      return NextResponse.json(
        { error: "Invalid username or password." },
        { status: 401 }
      );
    }

    const token = await signAdminToken({
      id: adminUser.id,
      username: adminUser.username,
      role: adminUser.role,
    });

    const response = NextResponse.json({
      success: true,
      message: "Authentication successful",
      user: {
        username: adminUser.username,
        name: adminUser.name,
        role: adminUser.role,
      },
    });

    response.cookies.set({
      name: COOKIE_NAME,
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 24 * 60 * 60, // 24 hours
    });

    return response;
  } catch (error) {
    console.error("Login API error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred during authentication." },
      { status: 500 }
    );
  }
}
