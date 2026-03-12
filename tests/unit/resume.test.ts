import { describe, it, expect } from "vitest";
import { RESUME } from "@/lib/resume";

describe("RESUME data", () => {
  it("has a name", () => {
    expect(RESUME.name).toBeTruthy();
  });

  it("has valid contact info", () => {
    expect(RESUME.contact.email).toContain("@");
    expect(RESUME.contact.github).toContain("github.com");
    expect(RESUME.contact.linkedin).toContain("linkedin.com");
  });

  it("has at least 2 experience entries", () => {
    expect(RESUME.experience.length).toBeGreaterThanOrEqual(2);
  });

  it("each experience entry has required fields", () => {
    for (const exp of RESUME.experience) {
      expect(exp.company).toBeTruthy();
      expect(exp.title).toBeTruthy();
      expect(exp.highlights.length).toBeGreaterThan(0);
      expect(exp.technologies.length).toBeGreaterThan(0);
    }
  });

  it("has skill categories with items", () => {
    expect(RESUME.skillCategories.length).toBeGreaterThan(0);
    for (const cat of RESUME.skillCategories) {
      expect(cat.items.length).toBeGreaterThan(0);
      for (const item of cat.items) {
        expect(item.level).toBeGreaterThanOrEqual(0);
        expect(item.level).toBeLessThanOrEqual(100);
      }
    }
  });

  it("has at least 1 project", () => {
    expect(RESUME.projects.length).toBeGreaterThanOrEqual(1);
  });

  it("has valid CGPA in education", () => {
    expect(RESUME.education.cgpa).toContain("/");
  });

  it("metrics are non-empty strings", () => {
    for (const [, val] of Object.entries(RESUME.metrics)) {
      expect(typeof val).toBe("string");
      expect(val.length).toBeGreaterThan(0);
    }
  });
});
