// ─────────────────────────────────────────────────────────────
// tokens.js — design tokens shared across all components
//
// Why a tokens file?
//   If the brand colour changes from #C44B10 to something else,
//   you change it in ONE place here and every component updates.
//   Without this, you'd hunt through 8 files changing hex codes.
//
// This is the simplest form of a "design system".
// ─────────────────────────────────────────────────────────────

export const ACCENT = "#C44B10";
export const BRAND  = "@ibmathdaily";

// Warm parchment palette — easy on the eyes, neither white nor dark
export const P = {
  pageBg:      "#EDE8E0",
  cardBg:      "#F5F0E8",
  cardAlt:     "#F0EBE1",
  border:      "#C8BFB0",
  textPrimary: "#1A1410",
  textSecond:  "#3D3028",
  textMuted:   "#5C4F42",
  textSub:     "#7A6A5C",
  textFaint:   "#9C8878",
};

// Tier colour system — green/amber/red/blue maps to difficulty
export const TIER = {
  "TIER 1": { color: "#14532D", bg: "#DCFCE7", border: "#86EFAC" },
  "TIER 2": { color: "#78350F", bg: "#FEF3C7", border: "#FCD34D" },
  "TIER 3": { color: "#7F1D1D", bg: "#FEE2E2", border: "#FCA5A5" },
  "TIER 4": { color: "#1E3A5F", bg: "#DBEAFE", border: "#93C5FD" },
};
