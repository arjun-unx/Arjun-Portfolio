import { describe, it, expect } from "vitest";
import { parseMarkdown } from "@/lib/utils/parseMarkdown";

describe("parseMarkdown", () => {
  it("converts **bold** to <strong>", () => {
    expect(parseMarkdown("**hello**")).toBe("<strong>hello</strong>");
  });

  it("handles multiple bold occurrences on one line", () => {
    const result = parseMarkdown("**a** and **b**");
    expect(result).toBe("<strong>a</strong> and <strong>b</strong>");
  });

  it("converts double newline to </p><p>", () => {
    const result = parseMarkdown("line1\n\nline2");
    expect(result).toBe("line1</p><p>line2");
  });

  it("converts newline-bullet to <br />•", () => {
    const result = parseMarkdown("line1\n• item");
    expect(result).toBe("line1<br />• item");
  });

  it("returns plain text unchanged", () => {
    const plain = "no markdown here";
    expect(parseMarkdown(plain)).toBe(plain);
  });

  it("handles empty string", () => {
    expect(parseMarkdown("")).toBe("");
  });

  it("handles mixed content", () => {
    const result = parseMarkdown("**API latency:** -70%\n\n• Redis caching");
    expect(result).toContain("<strong>API latency:</strong>");
    expect(result).toContain("</p><p>");
  });
});
