import { describe, it, expect } from "vitest";
import { queryAI } from "@/lib/ai/query-engine";

describe("queryAI", () => {
  it("returns null for empty string", () => {
    expect(queryAI("")).toBeNull();
  });

  it("returns null for whitespace-only input", () => {
    expect(queryAI("   ")).toBeNull();
  });

  it("matches performance keywords and returns performance answer", () => {
    const result = queryAI("performance improvements");
    expect(result).not.toBeNull();
    expect(result).toContain("400ms");
    expect(result).toContain("120ms");
  });

  it("matches cloud keywords", () => {
    const result = queryAI("AWS cloud experience");
    expect(result).not.toBeNull();
    expect(result).toContain("AWS");
  });

  it("returns fallback for completely unmatched input", () => {
    // Deliberately nonsense - no substring matches any KB keyword
    const result = queryAI("lorem ipsum dolor amet numquam");
    expect(result).not.toBeNull();
    // Fallback message uniquely begins with "I have detailed knowledge"
    expect(result).toContain("I have detailed knowledge");
  });

  it('handles "who is arjun" type query', () => {
    const result = queryAI("tell me about arjun");
    expect(result).not.toBeNull();
    expect(result?.toLowerCase()).toContain("arjun");
  });

  it("longer keywords score higher (spring boot > node)", () => {
    const result = queryAI("spring boot backend");
    expect(result).not.toBeNull();
    expect(result?.toLowerCase()).toContain("spring boot");
  });

  it("does not mutate the knowledge base on repeated calls", () => {
    const r1 = queryAI("performance");
    const r2 = queryAI("performance");
    expect(r1).toBe(r2);
  });

  it("is case-insensitive", () => {
    const lower = queryAI("aws lambda");
    const upper = queryAI("AWS LAMBDA");
    expect(lower).toBe(upper);
  });
});
