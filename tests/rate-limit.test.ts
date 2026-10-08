import { describe, it, expect } from "vitest";
import { checkRateLimit } from "@/lib/rate-limit";

describe("In-Memory Rate Limiting", () => {
  it("allows requests within configured threshold", () => {
    const ip = "test_ip_allowed_" + Math.random();
    const result1 = checkRateLimit(ip, 3, 10000);
    expect(result1.success).toBe(true);
    expect(result1.remaining).toBe(2);

    const result2 = checkRateLimit(ip, 3, 10000);
    expect(result2.success).toBe(true);
    expect(result2.remaining).toBe(1);

    const result3 = checkRateLimit(ip, 3, 10000);
    expect(result3.success).toBe(true);
    expect(result3.remaining).toBe(0);
  });

  it("blocks requests that exceed limit", () => {
    const ip = "test_ip_blocked_" + Math.random();
    checkRateLimit(ip, 2, 10000);
    checkRateLimit(ip, 2, 10000);

    const blockedResult = checkRateLimit(ip, 2, 10000);
    expect(blockedResult.success).toBe(false);
    expect(blockedResult.remaining).toBe(0);
  });
});
