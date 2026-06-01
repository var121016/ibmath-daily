// â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
// weeks.js â€” defines the 8-week structure of the summer programme
//
// Each week has:
//   - week number and title
//   - the day numbers that belong to it
//   - the colour used for its header
//   - the blueprint week number (for future multi-week blueprints)
//
// To add a new week: add an entry here.
// To add days to a week: they are automatically picked up from DAYS
// in data/index.js as long as the day numbers match.
// â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

export const WEEKS = [
  {
    week: 1,
    title: "Core Algebraic Foundations",
    subtitle: "Non-calculator mechanics Â· Proof syntax Â· Structural manipulation",
    days: [1, 2, 3, 4, 5],
    color: "#C44B10",
    blueprintWeek: 1,
  },
  {
    week: 2,
    title: "Functions, Sets & Inverse Rigor",
    subtitle: "Formal mapping notation Â· Domain restrictions Â· Inverse existence",
    days: [6, 7, 8, 9, 10],
    color: "#0891B2",
    blueprintWeek: 2,
  },
  {
    week: 3,
    title: "Graph Transformations & Coordinate Geometry",
    subtitle: "Translations Â· Stretches Â· Reflections Â· Geometric loci",
    days: [11, 12, 13, 14, 15],
    color: "#7C3AED",
    blueprintWeek: 3,
  },
  {
    week: 4,
    title: "Logarithms & Exponential Analysis",
    subtitle: "Log laws Â· Natural log Â· Exponential modeling Â· Change of base",
    days: [16, 17, 18, 19, 20],
    color: "#059669",
    blueprintWeek: 4,
  },
  {
    week: 5,
    title: "Advanced Sequences, Series & Limits",
    subtitle: "Arithmetic Â· Geometric Â· Sigma notation Â· Infinite series",
    days: [21, 22, 23, 24, 25],
    color: "#D97706",
    blueprintWeek: 5,
  },
  {
    week: 6,
    title: "Trigonometry & Circular Functions",
    subtitle: "Radian measure Â· Unit circle Â· Sine and Cosine rules",
    days: [26, 27, 28, 29, 30],
    color: "#DC2626",
    blueprintWeek: 6,
  },
  {
    week: 7,
    title: "Trigonometric Graphs & Analytical Equations",
    subtitle: "Wave modeling Â· Periodic solutions Â· Trig identities",
    days: [31, 32, 33, 34, 35],
    color: "#BE185D",
    blueprintWeek: 7,
  },
  {
    week: 8,
    title: "Pre-Calculus Foundations",
    subtitle: "Limits Â· Rates of change Â· Power rule Â· Tangents and normals",
    days: [36, 37, 38, 39, 40],
    color: "#1D4ED8",
    blueprintWeek: 8,
  },
];