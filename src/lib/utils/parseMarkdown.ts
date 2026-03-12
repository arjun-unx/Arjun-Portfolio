// ──────────────────────────────────────────────────
// parseMarkdown — lightweight inline markdown to HTML.
// Pure function, no DOM dependency. Unit-testable.
// ──────────────────────────────────────────────────

/**
 * Converts a subset of markdown to safe HTML fragments.
 * Supports: **bold**, \n\n (paragraph break), \n• (list item).
 * XSS note: input comes only from the internal knowledge base, never user input.
 */
export function parseMarkdown(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\n\n/g, "</p><p>")
    .replace(/\n•/g, "<br />•");
}
