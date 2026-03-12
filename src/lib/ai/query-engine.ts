// ──────────────────────────────────────────────────
// AI Query Engine — pure functions, no side effects.
// Independently testable; zero DOM/React dependencies.
// ──────────────────────────────────────────────────

import { KNOWLEDGE_BASE } from "./knowledge-base";

const FALLBACK =
  'I have detailed knowledge of Arjun\'s experience, tech stack, impact metrics, projects, and education. Try asking: "What are his strongest skills?", "What performance improvements has he made?", "Tell me about his cloud experience", or "How can I contact him?"';

/**
 * Score a knowledge-base entry against a lowercase query string.
 * Longer keyword matches score higher to prefer specific entries.
 */
function scoreEntry(entry: { keywords: string[] }, queryLower: string): number {
  let score = 0;
  for (const keyword of entry.keywords) {
    if (queryLower.includes(keyword.toLowerCase())) {
      score += keyword.length > 5 ? 3 : 1;
    }
  }
  return score;
}

/**
 * Pure function: maps a user question to a resume-based answer.
 * Returns null for empty input, fallback string for unmatched queries.
 */
export function queryAI(userInput: string): string | null {
  const queryLower = userInput.toLowerCase().trim();
  if (!queryLower) return null;

  let bestScore = 0;
  let bestAnswer: string | null = null;

  for (const entry of KNOWLEDGE_BASE) {
    const score = scoreEntry(entry, queryLower);
    if (score > bestScore) {
      bestScore = score;
      bestAnswer = entry.answer;
    }
  }

  return bestAnswer ?? FALLBACK;
}
