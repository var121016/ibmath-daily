// ─────────────────────────────────────────────────────────────
// HomeScreen — weekly structure view
//
// Shows all 8 weeks. Each week is a collapsible section.
// Days within a week are shown as cards.
// Current week (has at least one built day) is expanded by default.
// Past completed weeks are collapsed but tappable.
// Future weeks show as locked.
//
// Props:
//   onSelectDay(dayNumber) — called when a day card is tapped
//   onViewBlueprint(weekNumber) — called when blueprint is tapped
// ─────────────────────────────────────────────────────────────

import { useState } from "react";
import { DAYS } from "../data/index";
import { WEEKS } from "../data/weeks";
import { P, ACCENT, BRAND } from "./tokens";

// Find the current active week — the last week that has at least one built day
function getCurrentWeek() {
  const builtDayNumbers = new Set(DAYS.map(d => d.day));
  let current = 1;
  for (const week of WEEKS) {
    const hasAnyDay = week.days.some(d => builtDayNumbers.has(d));
    if (hasAnyDay) current = week.week;
  }
  return current;
}

function ProgressBar({ done, total, color }) {
  const pct = Math.round((done / total) * 100);
  return (
    <div style={{ marginTop: 6 }}>
      <div style={{
        height: 4, background: P.border,
        borderRadius: 2, overflow: "hidden",
      }}>
        <div style={{
          height: "100%", width: `${pct}%`,
          background: color, borderRadius: 2,
          transition: "width 0.4s ease",
        }} />
      </div>
      <div style={{
        fontFamily: "'Crimson Text', serif",
        fontSize: 11, color: P.textFaint,
        marginTop: 4, fontStyle: "italic",
      }}>
        {done} of {total} days available
      </div>
    </div>
  );
}

function DayCard({ day, onSelect }) {
  return (
    <button
      onClick={() => onSelect(day.day)}
      style={{
        width: "100%", padding: "12px 14px",
        background: P.cardBg,
        border: `1px solid ${P.border}`,
        borderRadius: 8, cursor: "pointer",
        textAlign: "left", display: "flex",
        alignItems: "center", gap: 12,
      }}
    >
      <div style={{
        width: 32, height: 32, borderRadius: 6,
        background: day.color, display: "flex",
        alignItems: "center", justifyContent: "center",
        flexShrink: 0,
      }}>
        <span style={{
          fontFamily: "'IM Fell English', serif",
          fontSize: 14, color: "#fff", fontWeight: 700,
        }}>
          {day.day}
        </span>
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{
          fontFamily: "'IM Fell English', serif",
          fontSize: 14, color: P.textPrimary,
          whiteSpace: "nowrap", overflow: "hidden",
          textOverflow: "ellipsis",
        }}>
          {day.topic}
        </div>
        <div style={{
          fontFamily: "'Crimson Text', serif",
          fontSize: 11, color: P.textMuted, fontStyle: "italic",
        }}>
          {day.problems.length} problems · {day.module}
        </div>
      </div>
      <div style={{
        fontFamily: "'Crimson Text', serif",
        fontSize: 16, color: P.textFaint,
      }}>→</div>
    </button>
  );
}

function LockedDayCard({ dayNumber }) {
  return (
    <div style={{
      width: "100%", padding: "12px 14px",
      background: P.pageBg,
      border: `1px solid ${P.border}`,
      borderRadius: 8, opacity: 0.5,
      display: "flex", alignItems: "center", gap: 12,
      boxSizing: "border-box",
    }}>
      <div style={{
        width: 32, height: 32, borderRadius: 6,
        background: P.border, display: "flex",
        alignItems: "center", justifyContent: "center",
        flexShrink: 0,
      }}>
        <span style={{
          fontFamily: "'IM Fell English', serif",
          fontSize: 14, color: P.textFaint,
        }}>
          {dayNumber}
        </span>
      </div>
      <div>
        <div style={{
          fontFamily: "'IM Fell English', serif",
          fontSize: 14, color: P.textMuted,
        }}>
          Coming soon
        </div>
        <div style={{
          fontFamily: "'Crimson Text', serif",
          fontSize: 11, color: P.textFaint, fontStyle: "italic",
        }}>
          Day {dayNumber} · Not yet released
        </div>
      </div>
      <div style={{ marginLeft: "auto", fontSize: 14 }}>🔒</div>
    </div>
  );
}

function BlueprintCard({ weekNumber, isAvailable, onViewBlueprint }) {
  if (isAvailable) {
    return (
      <button
        onClick={() => onViewBlueprint(weekNumber)}
        style={{
          width: "100%", padding: "12px 14px",
          background: P.cardBg,
          border: `1px solid ${ACCENT}`,
          borderRadius: 8, cursor: "pointer",
          textAlign: "left", display: "flex",
          alignItems: "center", gap: 12,
        }}
      >
        <div style={{
          width: 32, height: 32, borderRadius: 6,
          background: ACCENT, display: "flex",
          alignItems: "center", justifyContent: "center",
          flexShrink: 0, fontSize: 16,
        }}>
          📋
        </div>
        <div style={{ flex: 1 }}>
          <div style={{
            fontFamily: "'IM Fell English', serif",
            fontSize: 14, color: ACCENT,
          }}>
            Week {weekNumber} Blueprint
          </div>
          <div style={{
            fontFamily: "'Crimson Text', serif",
            fontSize: 11, color: P.textMuted, fontStyle: "italic",
          }}>
            Student mastery review · Parent briefing
          </div>
        </div>
        <div style={{
          fontFamily: "'Crimson Text', serif",
          fontSize: 16, color: ACCENT,
        }}>→</div>
      </button>
    );
  }

  return (
    <div style={{
      width: "100%", padding: "12px 14px",
      background: P.pageBg,
      border: `1px solid ${P.border}`,
      borderRadius: 8, opacity: 0.5,
      display: "flex", alignItems: "center", gap: 12,
      boxSizing: "border-box",
    }}>
      <div style={{
        width: 32, height: 32, borderRadius: 6,
        background: P.border, display: "flex",
        alignItems: "center", justifyContent: "center",
        flexShrink: 0, fontSize: 16,
      }}>
        📋
      </div>
      <div style={{ flex: 1 }}>
        <div style={{
          fontFamily: "'IM Fell English', serif",
          fontSize: 14, color: P.textMuted,
        }}>
          Week {weekNumber} Blueprint
        </div>
        <div style={{
          fontFamily: "'Crimson Text', serif",
          fontSize: 11, color: P.textFaint, fontStyle: "italic",
        }}>
          Available after all 5 days are released
        </div>
      </div>
      <div style={{ marginLeft: "auto", fontSize: 14 }}>🔒</div>
    </div>
  );
}

function WeekSection({ week, builtDays, currentWeek, onSelectDay, onViewBlueprint }) {
  const isCurrentWeek = week.week === currentWeek;
  const isPastWeek    = week.week < currentWeek;
  const isFutureWeek  = week.week > currentWeek;

  // Default: current week expanded, others collapsed
  const [expanded, setExpanded] = useState(isCurrentWeek);

  const builtDayNumbers  = new Set(builtDays.map(d => d.day));
  const daysBuilt        = week.days.filter(d => builtDayNumbers.has(d));
  const allDaysAvailable = daysBuilt.length === week.days.length;

  // Future weeks with no days built — show as locked header only
  if (isFutureWeek && daysBuilt.length === 0) {
    return (
      <div style={{
        border: `1px solid ${P.border}`,
        borderRadius: 12, overflow: "hidden",
        opacity: 0.45,
      }}>
        <div style={{
          padding: "16px 18px",
          background: P.cardBg,
          display: "flex", alignItems: "center", gap: 14,
        }}>
          <div style={{
            width: 36, height: 36, borderRadius: 8,
            background: P.border, display: "flex",
            alignItems: "center", justifyContent: "center",
            flexShrink: 0,
          }}>
            <span style={{
              fontFamily: "'IM Fell English', serif",
              fontSize: 16, color: P.textFaint,
            }}>
              {week.week}
            </span>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{
              fontFamily: "'IM Fell English', serif",
              fontSize: 15, color: P.textMuted,
            }}>
              Week {week.week} — {week.title}
            </div>
            <div style={{
              fontFamily: "'Crimson Text', serif",
              fontSize: 11, color: P.textFaint, fontStyle: "italic",
            }}>
              {week.subtitle}
            </div>
          </div>
          <div style={{ fontSize: 16 }}>🔒</div>
        </div>
      </div>
    );
  }

  return (
    <div style={{
      border: `1px solid ${expanded ? week.color + "60" : P.border}`,
      borderRadius: 12, overflow: "hidden",
      transition: "border-color 0.2s",
    }}>
      {/* Week header — tappable to expand/collapse */}
      <button
        onClick={() => setExpanded(e => !e)}
        style={{
          width: "100%", padding: "16px 18px",
          background: expanded ? `${week.color}10` : P.cardBg,
          border: "none", cursor: "pointer",
          textAlign: "left", display: "flex",
          alignItems: "center", gap: 14,
          transition: "background 0.2s",
        }}
      >
        {/* Week number badge */}
        <div style={{
          width: 36, height: 36, borderRadius: 8,
          background: week.color, display: "flex",
          alignItems: "center", justifyContent: "center",
          flexShrink: 0,
        }}>
          <span style={{
            fontFamily: "'IM Fell English', serif",
            fontSize: 16, color: "#fff", fontWeight: 700,
          }}>
            {week.week}
          </span>
        </div>

        {/* Week title and progress */}
        <div style={{ flex: 1, minWidth: 0, textAlign: "left" }}>
          <div style={{
            fontFamily: "'IM Fell English', serif",
            fontSize: 15, color: P.textPrimary, marginBottom: 2,
          }}>
            {week.title}
          </div>
          <div style={{
            fontFamily: "'Crimson Text', serif",
            fontSize: 11, color: P.textMuted,
            fontStyle: "italic", marginBottom: 4,
          }}>
            {week.subtitle}
          </div>
          <ProgressBar
            done={daysBuilt.length}
            total={week.days.length}
            color={week.color}
          />
        </div>

        {/* Expand/collapse chevron */}
        <div style={{
          fontFamily: "'Crimson Text', serif",
          fontSize: 18, color: week.color,
          transition: "transform 0.2s",
          transform: expanded ? "rotate(90deg)" : "rotate(0deg)",
          flexShrink: 0,
        }}>
          →
        </div>
      </button>

      {/* Expanded content — days + blueprint */}
      {expanded && (
        <div style={{
          borderTop: `1px solid ${P.border}`,
          padding: "12px 14px",
          background: P.pageBg,
          display: "flex", flexDirection: "column", gap: 8,
        }}>
          {week.days.map(dayNum => {
            const dayData = builtDays.find(d => d.day === dayNum);
            if (dayData) {
              return (
                <DayCard
                  key={dayNum}
                  day={dayData}
                  onSelect={onSelectDay}
                />
              );
            }
            return <LockedDayCard key={dayNum} dayNumber={dayNum} />;
          })}

          {/* Blueprint card */}
          <BlueprintCard
            weekNumber={week.week}
            isAvailable={allDaysAvailable && week.week === 1}
            onViewBlueprint={onViewBlueprint}
          />
        </div>
      )}
    </div>
  );
}

export default function HomeScreen({ onSelectDay, onViewBlueprint }) {
  const currentWeek = getCurrentWeek();

  return (
    <div style={{
      minHeight: "100vh", background: P.pageBg,
      display: "flex", flexDirection: "column",
      alignItems: "center",
      padding: "32px 16px 60px",
      boxSizing: "border-box",
    }}>
      {/* Header */}
      <div style={{ width: "100%", maxWidth: 440, marginBottom: 28 }}>
        <div style={{
          fontFamily: "'IM Fell English', serif",
          fontSize: 13, color: ACCENT, marginBottom: 3,
        }}>
          {BRAND}
        </div>
        <div style={{
          fontFamily: "'Crimson Text', serif",
          fontSize: 13, color: P.textMuted, fontStyle: "italic",
          marginBottom: 20,
        }}>
          IB Mathematics AA HL · 8-Week Summer Preparation
        </div>

        <div style={{
          fontFamily: "'IM Fell English', serif",
          fontSize: 22, color: P.textPrimary, marginBottom: 4,
        }}>
          Your Programme
        </div>
        <div style={{
          fontFamily: "'Crimson Text', serif",
          fontSize: 13, color: P.textMuted, fontStyle: "italic",
        }}>
          Tap a week to expand · Tap a day to begin
        </div>
      </div>

      {/* Week sections */}
      <div style={{
        width: "100%", maxWidth: 440,
        display: "flex", flexDirection: "column", gap: 12,
      }}>
        {WEEKS.map(week => (
          <WeekSection
            key={week.week}
            week={week}
            builtDays={DAYS}
            currentWeek={currentWeek}
            onSelectDay={onSelectDay}
            onViewBlueprint={onViewBlueprint}
          />
        ))}
      </div>
    </div>
  );
}
