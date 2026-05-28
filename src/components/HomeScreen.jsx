// ─────────────────────────────────────────────────────────────
// HomeScreen — the landing page where parents and students
// choose which day to open.
//
// Props:
//   onSelectDay(dayNumber) — called when a day card is tapped
//
// Design decision:
//   Locked future days are shown as greyed-out cards rather
//   than hidden. This communicates the roadmap and creates
//   anticipation ("Day 3 coming soon").
// ─────────────────────────────────────────────────────────────

import { DAYS } from "../data/index";
import { P, ACCENT, BRAND } from "./tokens";

const TOTAL_DAYS = 7;

export default function HomeScreen({ onSelectDay }) {
  const lockedDays = Array.from(
    { length: TOTAL_DAYS - DAYS.length },
    (_, i) => DAYS.length + i + 1
  );

  return (
    <div style={{
      minHeight: "100vh", background: P.pageBg,
      display: "flex", flexDirection: "column", alignItems: "center",
      padding: "40px 20px 60px", boxSizing: "border-box",
    }}>
      <div style={{ fontFamily: "'IM Fell English', serif", fontSize: 13, color: ACCENT, marginBottom: 3 }}>
        {BRAND}
      </div>
      <div style={{ fontFamily: "'Crimson Text', serif", fontSize: 13, color: P.textMuted, fontStyle: "italic", marginBottom: 32 }}>
        IB Mathematics AA HL · Daily Problem Series
      </div>

      <div style={{ width: "100%", maxWidth: 400 }}>
        <div style={{ fontFamily: "'IM Fell English', serif", fontSize: 22, color: P.textPrimary, marginBottom: 6 }}>
          Choose a Day
        </div>
        <div style={{ fontFamily: "'Crimson Text', serif", fontSize: 13, color: P.textMuted, fontStyle: "italic", marginBottom: 24 }}>
          Each day builds on the last. Tap a day to begin or catch up.
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {/* Live days */}
          {DAYS.map((d) => (
            <button
              key={d.day}
              onClick={() => onSelectDay(d.day)}
              style={{
                width: "100%", padding: "18px 20px",
                background: P.cardBg, border: `1px solid ${P.border}`,
                borderRadius: 10, cursor: "pointer", textAlign: "left",
                display: "flex", alignItems: "center", gap: 16,
                boxShadow: "0 1px 4px rgba(80,50,20,0.07)",
              }}
            >
              <div style={{
                width: 44, height: 44, borderRadius: 8,
                background: d.color, display: "flex",
                alignItems: "center", justifyContent: "center", flexShrink: 0,
              }}>
                <span style={{ fontFamily: "'IM Fell English', serif", fontSize: 20, color: "#fff", fontWeight: 700 }}>
                  {d.day}
                </span>
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontFamily: "'IM Fell English', serif", fontSize: 15, color: P.textPrimary, marginBottom: 3 }}>
                  {d.topic}
                </div>
                <div style={{ fontFamily: "'Crimson Text', serif", fontSize: 12, color: P.textMuted, fontStyle: "italic" }}>
                  {d.module} · {d.problems.length} problems
                </div>
              </div>
              <div style={{ fontFamily: "'Crimson Text', serif", fontSize: 18, color: P.textFaint }}>→</div>
            </button>
          ))}

          {/* Locked future days */}
          {lockedDays.map((n) => (
            <div
              key={n}
              style={{
                width: "100%", padding: "18px 20px",
                background: P.cardBg, border: `1px solid ${P.border}`,
                borderRadius: 10, display: "flex", alignItems: "center",
                gap: 16, opacity: 0.4, boxSizing: "border-box",
              }}
            >
              <div style={{
                width: 44, height: 44, borderRadius: 8,
                background: P.border, display: "flex",
                alignItems: "center", justifyContent: "center", flexShrink: 0,
              }}>
                <span style={{ fontFamily: "'IM Fell English', serif", fontSize: 20, color: P.textFaint }}>
                  {n}
                </span>
              </div>
              <div>
                <div style={{ fontFamily: "'IM Fell English', serif", fontSize: 15, color: P.textMuted }}>
                  Coming soon
                </div>
                <div style={{ fontFamily: "'Crimson Text', serif", fontSize: 12, color: P.textFaint, fontStyle: "italic" }}>
                  Day {n} · Advanced Algebraic Manipulation
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
