// ─────────────────────────────────────────────────────────────
// CarouselView — the main carousel screen for a given day.
//
// Props:
//   day         — the full day object from data/
//   startIndex  — which problem to open first (0-based)
//   onBack()    — returns to ProblemPicker
//
// Features:
//   - Swipe left/right (mouse and touch)
//   - Prev / Next buttons
//   - Jump bar — tap any question number to go directly there
//   - Reveal answer → Show working (two-step reveal)
//   - State resets when you change problem (clean slate)
// ─────────────────────────────────────────────────────────────

import { useState } from "react";
import ProblemSlide from "./ProblemSlide";
import { P, ACCENT, TIER } from "./tokens";

export default function CarouselView({ day, startIndex, onBack }) {
  const [current,  setCurrent]  = useState(startIndex);
  const [revealed, setRevealed] = useState({});
  const [working,  setWorking]  = useState({});

  // Drag/swipe state
  const [dragStart, setDragStart] = useState(null);
  const [dragging,  setDragging]  = useState(false);
  const [dragDelta, setDragDelta] = useState(0);

  const problems = day.problems;
  const total    = problems.length;
  const prob     = problems[current];

  const goTo = (i) => {
    if (i >= 0 && i < total) setCurrent(i);
  };

  // Pointer handlers for swipe
  const handleDown = (e) => {
    setDragging(true);
    setDragStart(e.clientX ?? e.touches?.[0]?.clientX);
    setDragDelta(0);
  };
  const handleMove = (e) => {
    if (!dragging) return;
    setDragDelta((e.clientX ?? e.touches?.[0]?.clientX) - dragStart);
  };
  const handleUp = () => {
    if (!dragging) return;
    setDragging(false);
    if (dragDelta < -40) goTo(current + 1);
    else if (dragDelta > 40) goTo(current - 1);
    setDragDelta(0);
  };

  return (
    <div style={{
      minHeight: "100vh", background: P.pageBg,
      display: "flex", flexDirection: "column", alignItems: "center",
      padding: "20px 16px 40px", boxSizing: "border-box",
    }}>

      {/* Top bar */}
      <div style={{
        width: "100%", maxWidth: 400,
        display: "flex", justifyContent: "space-between",
        alignItems: "center", marginBottom: 14,
      }}>
        <button
          onClick={onBack}
          style={{
            fontFamily: "'Crimson Text', serif",
            fontSize: 13, color: P.textMuted,
            fontStyle: "italic", background: "none",
            border: "none", cursor: "pointer", padding: 0,
          }}
        >
          ← All days
        </button>
        <div style={{
          fontFamily: "'IM Fell English', serif",
          fontSize: 13, color: P.textPrimary, textAlign: "right",
        }}>
          Day {day.day} · {day.topic}
        </div>
      </div>

      {/* Carousel slide */}
      <div style={{ width: "100%", maxWidth: 400 }}>
        <div
          onMouseDown={handleDown}
          onMouseMove={handleMove}
          onMouseUp={handleUp}
          onMouseLeave={handleUp}
          onTouchStart={handleDown}
          onTouchMove={handleMove}
          onTouchEnd={handleUp}
          style={{
            width: "100%", aspectRatio: "1 / 1",
            borderRadius: 12, overflow: "hidden",
            cursor: "grab", userSelect: "none",
            boxShadow: "0 2px 16px rgba(80,50,20,0.10)",
            border: `1px solid ${P.border}`,
          }}
        >
          <ProblemSlide
            s={prob}
            showAnswer={!!revealed[prob.num]}
            showWorking={!!working[prob.num]}
            onReveal={() => setRevealed((r) => ({ ...r, [prob.num]: true }))}
            onWorking={() => setWorking((w) => ({ ...w, [prob.num]: true }))}
          />
        </div>

        {/* Dot indicator */}
        <div style={{
          display: "flex", justifyContent: "center",
          gap: 5, marginTop: 12,
        }}>
          {problems.map((_, i) => (
            <div
              key={i}
              onClick={() => goTo(i)}
              style={{
                width: i === current ? 18 : 5,
                height: 5, borderRadius: 3,
                background: i === current ? ACCENT : P.border,
                cursor: "pointer", transition: "all 0.25s",
              }}
            />
          ))}
        </div>
      </div>

      {/* Prev / Next navigation */}
      <div style={{ display: "flex", alignItems: "center", gap: 16, marginTop: 18 }}>
        <button
          onClick={() => goTo(current - 1)}
          disabled={current === 0}
          style={{
            padding: "9px 20px",
            background: P.cardBg, border: `1px solid ${P.border}`,
            borderRadius: 6,
            color: current === 0 ? P.border : P.textMuted,
            cursor: current === 0 ? "not-allowed" : "pointer",
            fontFamily: "'Crimson Text', serif", fontSize: 14,
          }}
        >
          ← Prev
        </button>

        <span style={{
          fontFamily: "'Crimson Text', serif",
          fontSize: 13, color: P.textMuted,
          fontStyle: "italic", minWidth: 52, textAlign: "center",
        }}>
          {current + 1} / {total}
        </span>

        <button
          onClick={() => goTo(current + 1)}
          disabled={current === total - 1}
          style={{
            padding: "9px 20px",
            background: current === total - 1 ? P.cardBg : ACCENT,
            border: `1px solid ${current === total - 1 ? P.border : ACCENT}`,
            borderRadius: 6,
            color: current === total - 1 ? P.border : "#fff",
            cursor: current === total - 1 ? "not-allowed" : "pointer",
            fontFamily: "'Crimson Text', serif",
            fontSize: 14, fontWeight: 600,
          }}
        >
          Next →
        </button>
      </div>

      {/* Jump bar — coloured by tier */}
      <div style={{ width: "100%", maxWidth: 400, marginTop: 18 }}>
        <div style={{
          fontFamily: "'Crimson Text', serif",
          fontSize: 11, color: P.textFaint,
          fontStyle: "italic", marginBottom: 8, textAlign: "center",
        }}>
          Jump to question
        </div>
        <div style={{
          display: "flex", gap: 6,
          justifyContent: "center", flexWrap: "wrap",
        }}>
          {problems.map((_, i) => {
            const tm = TIER[problems[i].tier];
            return (
              <button
                key={i}
                onClick={() => goTo(i)}
                style={{
                  width: 34, height: 34, borderRadius: 6,
                  background: i === current ? ACCENT : tm.bg,
                  border: `1px solid ${i === current ? ACCENT : tm.border}`,
                  color: i === current ? "#fff" : tm.color,
                  fontFamily: "'IM Fell English', serif",
                  fontSize: 14, cursor: "pointer",
                  fontWeight: 600, transition: "all 0.2s",
                }}
              >
                {i + 1}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
