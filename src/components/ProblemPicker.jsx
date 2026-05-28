// ─────────────────────────────────────────────────────────────
// ProblemPicker — shows all 10 problems as a grid so students
// and parents can jump directly to any question.
//
// Props:
//   day           — the full day object from data/
//   onSelect(idx) — called with 0-based index of chosen problem
//   onBack()      — called when user taps "back"
//
// Why this screen exists:
//   A parent catching up on Day 2 Q7 shouldn't have to swipe
//   through Q1–Q6 to get there. Direct access respects the
//   user's time. This is a UX decision, not just a feature.
// ─────────────────────────────────────────────────────────────

import { P, ACCENT, TIER } from "./tokens";

export default function ProblemPicker({ day, onSelect, onBack }) {
  return (
    <div style={{
      minHeight: "100vh", background: P.pageBg,
      display: "flex", flexDirection: "column", alignItems: "center",
      padding: "32px 20px 60px", boxSizing: "border-box",
    }}>
      <div style={{ width: "100%", maxWidth: 400 }}>

        {/* Back link */}
        <button
          onClick={onBack}
          style={{
            fontFamily: "'Crimson Text', serif",
            fontSize: 13, color: P.textMuted, fontStyle: "italic",
            background: "none", border: "none",
            cursor: "pointer", marginBottom: 20, padding: 0,
          }}
        >
          ← Back to days
        </button>

        <div style={{
          fontFamily: "'IM Fell English', serif",
          fontSize: 22, color: P.textPrimary, marginBottom: 4,
        }}>
          Day {day.day}
        </div>
        <div style={{
          fontFamily: "'Crimson Text', serif",
          fontSize: 14, color: P.textMuted,
          fontStyle: "italic", marginBottom: 24,
        }}>
          {day.topic}
        </div>

        <div style={{
          fontFamily: "'Crimson Text', serif",
          fontSize: 13, color: P.textSub, marginBottom: 12,
        }}>
          Jump to a problem:
        </div>

        {/* 2-column grid of problem cards */}
        <div style={{
          display: "grid", gridTemplateColumns: "1fr 1fr",
          gap: 8, marginBottom: 24,
        }}>
          {day.problems.map((prob) => {
            const tm = TIER[prob.tier];
            return (
              <button
                key={prob.num}
                onClick={() => onSelect(prob.num - 1)}
                style={{
                  padding: "14px 12px",
                  background: P.cardBg, border: `1px solid ${P.border}`,
                  borderRadius: 8, cursor: "pointer",
                  textAlign: "left",
                  display: "flex", flexDirection: "column", gap: 4,
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{
                    fontFamily: "'IM Fell English', serif",
                    fontSize: 18, color: P.textPrimary,
                  }}>
                    Q{prob.num}
                  </span>
                  <span style={{
                    fontFamily: "'Crimson Text', serif",
                    fontSize: 9, padding: "1px 6px", borderRadius: 3,
                    background: tm.bg, color: tm.color,
                    border: `1px solid ${tm.border}`, fontWeight: 600,
                  }}>
                    {prob.tier}
                  </span>
                </div>
                <div style={{
                  fontFamily: "'Crimson Text', serif",
                  fontSize: 11, color: P.textMuted,
                  fontStyle: "italic", lineHeight: 1.3,
                }}>
                  {prob.label}
                </div>
              </button>
            );
          })}
        </div>

        {/* Start from beginning button */}
        <button
          onClick={() => onSelect(0)}
          style={{
            width: "100%", padding: "14px",
            background: ACCENT, border: "none",
            borderRadius: 8, color: "#fff",
            fontFamily: "'IM Fell English', serif",
            fontSize: 16, cursor: "pointer",
          }}
        >
          Start from the beginning →
        </button>
      </div>
    </div>
  );
}
