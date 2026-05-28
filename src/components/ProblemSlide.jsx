// ─────────────────────────────────────────────────────────────
// ProblemSlide — renders a single problem inside the carousel
//
// Props:
//   s             — the problem object from the data file
//   showAnswer    — bool, whether to show the answer
//   showWorking   — bool, whether to show the full working
//   onReveal()    — called when student taps "reveal answer"
//   onWorking()   — called when student taps "show working"
//
// Design decisions:
//   1. Hint is ALWAYS visible — never hidden by revealing answer.
//      In Version 1 the answer box pushed the hint off screen.
//      Fixed by using flexShrink:0 on all fixed sections.
//   2. Working has maxHeight + scroll so long solutions
//      (like the Golden Ratio 4-part proof) don't overflow.
//   3. Progress dots at the bottom show position in the day.
// ─────────────────────────────────────────────────────────────

import KTex from "./KTex";
import { P, ACCENT, BRAND, TIER } from "./tokens";

function Rule() {
  return (
    <div style={{
      height: 1, background: P.border,
      opacity: 0.5, margin: "7px 0", flexShrink: 0,
    }} />
  );
}

export default function ProblemSlide({
  s,
  showAnswer,
  showWorking,
  onReveal,
  onWorking,
}) {
  const m = TIER[s.tier];

  return (
    <div style={{
      width: "100%", height: "100%",
      background: P.cardBg,
      display: "flex", flexDirection: "column",
      padding: "16px 18px 12px",
      boxSizing: "border-box",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Tier colour bar on left edge */}
      <div style={{
        position: "absolute", top: 0, left: 0,
        width: 5, height: "100%",
        background: m.color,
        borderRadius: "12px 0 0 12px",
      }} />

      {/* ── Header ── */}
      <div style={{
        display: "flex", justifyContent: "space-between",
        alignItems: "flex-start", flexShrink: 0,
      }}>
        <div>
          <div style={{
            fontFamily: "'IM Fell English', serif",
            fontSize: 10, color: P.textSub, marginBottom: 5,
          }}>
            {BRAND}
          </div>
          <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
            <span style={{
              fontFamily: "'Crimson Text', serif",
              fontSize: 10, padding: "1px 7px", borderRadius: 3,
              background: m.bg, color: m.color,
              border: `1px solid ${m.border}`, fontWeight: 600,
            }}>
              {s.tier}
            </span>
            <span style={{
              fontFamily: "'Crimson Text', serif",
              fontSize: 11, color: P.textSecond, fontStyle: "italic",
            }}>
              {s.label}
            </span>
          </div>
        </div>
        {/* Large decorative question number */}
        <div style={{
          fontFamily: "'IM Fell English', serif",
          fontSize: 40, color: P.textFaint,
          lineHeight: 1, userSelect: "none",
        }}>
          {String(s.num).padStart(2, "0")}
        </div>
      </div>

      <Rule />

      {/* ── Question — scrollable if long (e.g. multi-part Q10) ── */}
      <div style={{
        flexShrink: 1, overflowY: "auto", maxHeight: "180px",
      }}>
        {s.questionText && (
          <div style={{
            fontFamily: "'Spectral', serif",
            fontSize: 12, color: P.textPrimary,
            lineHeight: 1.5, marginBottom: 6,
          }}>
            {s.questionText}
          </div>
        )}

        {/* Multi-part labels e.g. (a), (b), (c), (d) */}
        {s.multiPart && (
          <div style={{ display: "flex", flexDirection: "column", gap: 4, marginBottom: 6 }}>
            {s.multiPart.map((p, i) => (
              <div key={i} style={{ display: "flex", gap: 7 }}>
                <span style={{
                  fontFamily: "'IM Fell English', serif",
                  fontSize: 12, color: ACCENT,
                  minWidth: 22, flexShrink: 0,
                }}>
                  {p.label}
                </span>
                <span style={{
                  fontFamily: "'Spectral', serif",
                  fontSize: 11, color: P.textSecond, lineHeight: 1.5,
                }}>
                  {p.text}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Main LaTeX expression */}
        {s.latex && (
          <div style={{
            textAlign: "center", padding: "7px 4px",
            background: P.pageBg, borderRadius: 6,
            border: `1px solid ${P.border}`,
            overflowX: "auto", marginBottom: 6,
          }}>
            <KTex tex={s.latex} display={true} />
          </div>
        )}
      </div>

      {/* ── Hint — always visible, never pushed out ── */}
      <div style={{
        flexShrink: 0,
        padding: "6px 10px",
        background: P.pageBg,
        borderLeft: `3px solid ${ACCENT}`,
        borderRadius: "0 4px 4px 0",
        marginBottom: 6,
      }}>
        <div style={{
          fontFamily: "'Crimson Text', serif",
          fontSize: 10, color: P.textSub,
          fontStyle: "italic", marginBottom: 1,
        }}>
          Hint
        </div>
        <div style={{
          fontFamily: "'Spectral', serif",
          fontSize: 11, color: P.textSecond,
        }}>
          <KTex tex={s.hint} />
        </div>
      </div>

      {/* ── Answer / Working — replaces button, never hides hint ── */}
      <div style={{ flexShrink: 0 }}>
        {showWorking ? (
          <div style={{
            padding: "8px 10px",
            background: m.bg, border: `1px solid ${m.border}`,
            borderRadius: 6,
            overflowX: "auto", overflowY: "auto",
            maxHeight: "110px",
          }}>
            <KTex tex={s.workingLatex} display={true} />
          </div>
        ) : showAnswer ? (
          <div style={{ display: "flex", gap: 6 }}>
            <div style={{
              flex: 1, padding: "8px 10px",
              background: m.bg, border: `1px solid ${m.border}`,
              borderRadius: 6, textAlign: "center", overflowX: "auto",
            }}>
              <KTex tex={s.answerLatex} />
            </div>
            <button
              onClick={onWorking}
              style={{
                padding: "8px 10px",
                background: P.pageBg, border: `1px solid ${P.border}`,
                borderRadius: 6, color: P.textMuted,
                fontFamily: "'Crimson Text', serif",
                fontSize: 11, fontStyle: "italic",
                cursor: "pointer", whiteSpace: "nowrap", flexShrink: 0,
              }}
            >
              Working →
            </button>
          </div>
        ) : (
          <button
            onClick={onReveal}
            style={{
              width: "100%", padding: "9px",
              background: P.pageBg, border: `1px solid ${P.border}`,
              borderRadius: 6, color: P.textMuted,
              fontFamily: "'Crimson Text', serif",
              fontSize: 13, fontStyle: "italic", cursor: "pointer",
            }}
          >
            Tap to reveal answer
          </button>
        )}

        {/* Progress dots */}
        <div style={{
          display: "flex", justifyContent: "center",
          gap: 4, marginTop: 8, flexShrink: 0,
        }}>
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              style={{
                width: i === s.num - 1 ? 14 : 4,
                height: 3, borderRadius: 2,
                background: i === s.num - 1 ? ACCENT : P.border,
                transition: "width 0.3s",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
