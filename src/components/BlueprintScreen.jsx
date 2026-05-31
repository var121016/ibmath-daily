// ─────────────────────────────────────────────────────────────
// BlueprintScreen — Weekend Blueprint for Week 1
//
// Two versions toggled by a tab:
//   Student — 5 pillars of exam intelligence and mastery
//   Parent  — strategic briefing and coaching guidance
//
// Accessible from the Home Screen after Week 1 is complete.
// ─────────────────────────────────────────────────────────────

import { useState } from "react";
import { P, ACCENT, BRAND } from "./tokens";

const BLUE    = "#2563EB";
const BLUEBG  = "#DBEAFE";
const BLUELT  = "#EFF6FF";
const RED     = "#DC2626";
const REDBG   = "#FEE2E2";
const GREEN   = "#15803D";
const GREENBG = "#DCFCE7";

function Rule() {
  return <div style={{ height:1, background:P.border, opacity:0.5, margin:"18px 0" }} />;
}

function SectionLabel({ children }) {
  return (
    <div style={{
      fontFamily:"'Crimson Text',serif", fontSize:11,
      color:P.textFaint, letterSpacing:"0.18em",
      textTransform:"uppercase", marginBottom:10,
    }}>{children}</div>
  );
}

function PillarCard({ number, emoji, title, color, bg, children }) {
  return (
    <div style={{
      background:P.cardBg, border:`1px solid ${P.border}`,
      borderLeft:`4px solid ${color}`,
      borderRadius:"0 10px 10px 0",
      padding:"20px 20px 20px 18px",
      marginBottom:16,
    }}>
      <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:12 }}>
        <div style={{
          width:28, height:28, borderRadius:"50%",
          background:bg, display:"flex",
          alignItems:"center", justifyContent:"center",
          fontFamily:"'IM Fell English',serif", fontSize:13,
          color:color, fontWeight:700, flexShrink:0,
        }}>{number}</div>
        <div style={{
          fontFamily:"'IM Fell English',serif",
          fontSize:16, color:P.textPrimary, lineHeight:1.3,
        }}>{emoji} {title}</div>
      </div>
      {children}
    </div>
  );
}

function Badge({ children }) {
  return (
    <span style={{
      display:"inline-block",
      background:BLUEBG, color:BLUE,
      fontFamily:"'Crimson Text',serif",
      fontSize:11, fontWeight:600,
      padding:"2px 8px", borderRadius:4,
      letterSpacing:"0.05em", marginRight:6,
    }}>{children}</span>
  );
}

function BulletItem({ children }) {
  return (
    <div style={{ display:"flex", gap:10, marginBottom:10, alignItems:"flex-start" }}>
      <div style={{ width:5, height:5, borderRadius:"50%", background:ACCENT, marginTop:7, flexShrink:0 }} />
      <div style={{ fontFamily:"'Spectral',serif", fontSize:13, color:P.textSecond, lineHeight:1.7 }}>{children}</div>
    </div>
  );
}

function MapBox({ children }) {
  return (
    <div style={{
      background:P.pageBg, fontFamily:"'Courier New',monospace",
      fontSize:12, padding:"14px 16px", borderRadius:6,
      border:`1px solid ${P.border}`, lineHeight:2,
      color:P.textSecond, overflowX:"auto",
      whiteSpace:"pre", marginBottom:12,
    }}>{children}</div>
  );
}

function MiniTable() {
  const rows = [
    {
      topic: "Day 2: Quadratics",
      mistake: "Converting roots to decimals mid-way (e.g. 2.55 instead of √6.5)",
      action: "Early rounding causes an Accuracy Penalty (A0) that snowballs.",
      protocol: "Keep all values in exact surd or fractional form until the final line.",
      color: RED, bg: REDBG,
    },
    {
      topic: "Day 4: Polynomials",
      mistake: "Stating P(c) = 0 without writing the Factor Theorem conclusion.",
      action: "Reasoning Penalty (R0). Showing the value alone is not enough.",
      protocol: "Write: ∴ since P(c) = 0, (x − c) is a factor of P(x).",
      color: "#78350F", bg: "#FEF3C7",
    },
    {
      topic: "Day 5: Binomial",
      mistake: "Treating the x-independent term as a missing algebraic variable.",
      action: "Total Mark Failure (M0) due to broken initial algebraic setup.",
      protocol: "Set the combined exponent expression equal to 0, isolate r systematically.",
      color: BLUE, bg: BLUEBG,
    },
  ];

  return (
    <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
      {rows.map((r,i) => (
        <div key={i} style={{
          background:P.cardBg, border:`1px solid ${P.border}`,
          borderLeft:`3px solid ${r.color}`,
          borderRadius:"0 8px 8px 0", padding:"12px 14px",
        }}>
          <div style={{ fontFamily:"'IM Fell English',serif", fontSize:13, color:r.color, marginBottom:6 }}>{r.topic}</div>
          <div style={{ display:"flex", flexDirection:"column", gap:5 }}>
            <div style={{ display:"flex", gap:8 }}>
              <span style={{ fontFamily:"'Crimson Text',serif", fontSize:10, color:RED, fontWeight:600, minWidth:60, paddingTop:1 }}>MISTAKE</span>
              <span style={{ fontFamily:"'Spectral',serif", fontSize:12, color:P.textSecond, lineHeight:1.6 }}>{r.mistake}</span>
            </div>
            <div style={{ display:"flex", gap:8 }}>
              <span style={{ fontFamily:"'Crimson Text',serif", fontSize:10, color:"#78350F", fontWeight:600, minWidth:60, paddingTop:1 }}>EXAMINER</span>
              <span style={{ fontFamily:"'Spectral',serif", fontSize:12, color:P.textSecond, lineHeight:1.6 }}>{r.action}</span>
            </div>
            <div style={{ display:"flex", gap:8 }}>
              <span style={{ fontFamily:"'Crimson Text',serif", fontSize:10, color:GREEN, fontWeight:600, minWidth:60, paddingTop:1 }}>LEVEL 7</span>
              <span style={{ fontFamily:"'Spectral',serif", fontSize:12, color:P.textSecond, lineHeight:1.6 }}>{r.protocol}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function CalibrationItem({ number, question, answer }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{
      background:P.cardBg, border:`1px solid ${P.border}`,
      borderRadius:8, padding:"14px 16px", marginBottom:10,
    }}>
      <div style={{ display:"flex", gap:10, alignItems:"flex-start" }}>
        <div style={{
          width:24, height:24, borderRadius:"50%",
          background:BLUEBG, color:BLUE,
          display:"flex", alignItems:"center", justifyContent:"center",
          fontFamily:"'IM Fell English',serif", fontSize:13,
          fontWeight:700, flexShrink:0,
        }}>{number}</div>
        <div style={{ flex:1 }}>
          <div style={{ fontFamily:"'Spectral',serif", fontSize:13, color:P.textPrimary, lineHeight:1.6, marginBottom:8 }}>{question}</div>
          <button onClick={() => setOpen(o => !o)} style={{
            fontFamily:"'Crimson Text',serif", fontSize:12,
            color:BLUE, fontStyle:"italic",
            background:"none", border:"none", cursor:"pointer", padding:0,
          }}>
            {open ? "Hide answer ↑" : "Reveal answer ↓"}
          </button>
          {open && (
            <div style={{
              marginTop:8, padding:"10px 12px",
              background:GREENBG, border:`1px solid #86EFAC`,
              borderRadius:6, fontFamily:"'Spectral',serif",
              fontSize:12, color:GREEN, lineHeight:1.7,
            }}>{answer}</div>
          )}
        </div>
      </div>
    </div>
  );
}

// ── STUDENT BLUEPRINT ──────────────────────────────────────────
function StudentBlueprint() {
  return (
    <div>
      <div style={{ marginBottom:24 }}>
        <div style={{ fontFamily:"'Crimson Text',serif", fontSize:13, color:P.textMuted, fontStyle:"italic", marginBottom:4 }}>
          Core Revision Reference · Strategic Analytics
        </div>
        <div style={{ fontFamily:"'Spectral',serif", fontSize:14, color:P.textSecond, lineHeight:1.7 }}>
          This blueprint is your strategic debrief after five days of advanced algebra. Read it carefully — it tells you not just what you practised, but how an IB examiner will judge it.
        </div>
      </div>

      {/* Pillar 1 */}
      <PillarCard number="1" emoji="🧭" title="Exam Intelligence" color={BLUE} bg={BLUEBG}>
        <div style={{ fontFamily:"'Spectral',serif", fontSize:13, color:P.textSecond, lineHeight:1.7, marginBottom:12 }}>
          In standard school curriculums, you score marks for reaching a correct final answer. In IB DP AA HL, <strong>the final value is almost worthless without an unbroken logical path.</strong> Examiners evaluate your script using Method (M), Accuracy (A), and Reasoning (R) marks.
        </div>
        <BulletItem>
          <strong>The Scratchpad Habit:</strong> Never solve mathematics horizontally across the page. Work vertically, stacking your logical transformations and equal signs down the centre line of your script. If an examiner cannot parse your algebra within three seconds, you risk losing Method marks.
        </BulletItem>
        <BulletItem>
          <strong>The Transcription Rule:</strong> When processing fractional indices or Binomial expansions, never compute steps in your head. Document the general term clearly before simplifying. If an arithmetic error occurs, having the structural anchor safeguards your Method marks.
        </BulletItem>
      </PillarCard>

      {/* Pillar 2 */}
      <PillarCard number="2" emoji="💣" title="The Minefield — Week 1 Pitfalls" color={RED} bg={REDBG}>
        <div style={{ fontFamily:"'Spectral',serif", fontSize:13, color:P.textSecond, lineHeight:1.7, marginBottom:14 }}>
          Review your working against this matrix of classic execution errors caught by senior examiners:
        </div>
        <MiniTable />
      </PillarCard>

      {/* Pillar 3 */}
      <PillarCard number="3" emoji="🗺️" title="The Connections Map" color={GREEN} bg={GREENBG}>
        <div style={{ fontFamily:"'Spectral',serif", fontSize:13, color:P.textSecond, lineHeight:1.7, marginBottom:12 }}>
          The tools you mastered this week are not isolated tasks — they form the structural framework for the most demanding units in the DP syllabus:
        </div>
        <MapBox>{`[Week 1: Indices & Surds] ────────► [Calculus: Fractional Integration]
[Week 1: Polynomial Division] ────► [Functions: Oblique Asymptotes]
[Week 1: Binomial Expansions] ────► [Probability: Discrete Distributions]`}</MapBox>
        <div style={{ fontFamily:"'Spectral',serif", fontSize:13, color:P.textSecond, lineHeight:1.7 }}>
          <strong>The Coming Bridge:</strong> When we reach Differential Calculus, you will encounter derivatives of expressions like 3/∛(x²). If your indices are not hardwired to translate this instantly into 3x^(−2/3), your calculus will freeze before the derivative rule can even be deployed.
        </div>
      </PillarCard>

      {/* Pillar 4 */}
      <PillarCard number="4" emoji="🗣️" title="Command Terms Decoded" color="#7C3AED" bg="#EDE9FE">
        <BulletItem>
          <Badge>SHOW THAT</Badge> The final target expression is given to you in the prompt. <strong>You are forbidden from using this answer inside your working.</strong> Start from first principles and derive the result. Substituting values back to check yields 0 marks.
        </BulletItem>
        <BulletItem>
          <Badge>HENCE</Badge> You must use the output you just constructed in the immediately preceding section. If you deploy an alternate algebraic path — even a flawless one — the examiner awards zero marks. Your previous answer is your compulsory shortcut.
        </BulletItem>
      </PillarCard>

      {/* Pillar 5 */}
      <PillarCard number="5" emoji="🎯" title="Confidence Calibration" color={ACCENT} bg="#FEF3E2">
        <div style={{ fontFamily:"'Spectral',serif", fontSize:13, color:P.textSecond, lineHeight:1.7, marginBottom:14 }}>
          Do not evaluate yourself on whether you got the final answer right. Evaluate whether you comprehend the structural logic:
        </div>
        <CalibrationItem
          number="1"
          question="If a polynomial P(x) is divided by (2x − 1), can you immediately state the Remainder Theorem expression without performing long division?"
          answer="Evaluate P(1/2). The Remainder Theorem states the remainder equals p(a) where (x − a) is the divisor. For (2x − 1), a = 1/2."
        />
        <CalibrationItem
          number="2"
          question="Can you state the precise geometric reason why a quadratic with Δ < 0 never makes contact with the x-axis?"
          answer="Real roots require computing √Δ. If Δ < 0, real roots do not exist — meaning no intercepts can form on the real coordinate plane."
        />
        <CalibrationItem
          number="3"
          question="Why are the expansion coefficients of (a + b)ⁿ perfectly symmetrical across the series?"
          answer="Choosing r components from n elements is structurally identical to leaving (n − r) behind: C(n,r) = C(n, n−r). Hence the symmetry."
        />
      </PillarCard>
    </div>
  );
}

// ── PARENT BLUEPRINT ───────────────────────────────────────────
function ParentBlueprint() {
  return (
    <div>
      <div style={{ marginBottom:24 }}>
        <div style={{ fontFamily:"'Crimson Text',serif", fontSize:13, color:P.textMuted, fontStyle:"italic", marginBottom:4 }}>
          Parent Community Briefing · Accountability & Monitoring
        </div>
        <div style={{ fontFamily:"'Spectral',serif", fontSize:14, color:P.textSecond, lineHeight:1.7 }}>
          Your child has completed their first 5-day cycle targeting elite pre-DP1 mathematical readiness — advanced index operations, non-linear system intersections, polynomial division, and Binomial distributions.
        </div>
      </div>

      <div style={{ fontFamily:"'Spectral',serif", fontSize:13, color:P.textSecond, lineHeight:1.7, marginBottom:20 }}>
        Inside an IB Higher Level environment, <strong>raw mathematical calculation is only half the battle.</strong> This weekend shifts focus to Exam Intelligence — the mechanics of how work must be structured to secure maximum marks from official examiners.
      </div>

      {/* Card 1 */}
      <div style={{
        background:P.cardBg, border:`1px solid ${P.border}`,
        borderLeft:`4px solid ${BLUE}`,
        borderRadius:"0 10px 10px 0",
        padding:"20px 20px 20px 18px", marginBottom:16,
      }}>
        <div style={{ fontFamily:"'IM Fell English',serif", fontSize:16, color:BLUE, marginBottom:12 }}>
          🔍 The 30-Second Scratchpad Audit
        </div>
        <div style={{ fontFamily:"'Spectral',serif", fontSize:13, color:P.textSecond, lineHeight:1.7, marginBottom:12 }}>
          Sit down with your child this weekend and inspect their physical math workspace. Look for these two signals:
        </div>
        <BulletItem>
          <strong>Vertical Flow Verification:</strong> Ensure their equations stack neatly downward with equal signs aligned centrally, rather than bleeding horizontally across the page. IB scripts are evaluated sequentially top to bottom — scattered layout is the primary reason high-performing students drop Method Marks.
        </BulletItem>
        <BulletItem>
          <strong>The "Show That" Verification:</strong> Locate their solution for any Tier 3 problem. The final expression was deliberately printed in the prompt. Check if your child documented at least 3–4 independent lines of algebraic derivation to prove its validity. If they skipped steps or worked backward from the answer, an IB examiner awards zero marks for that entire page.
        </BulletItem>
      </div>

      {/* Card 2 */}
      <div style={{
        background:P.cardBg, border:`1px solid ${P.border}`,
        borderLeft:`4px solid ${ACCENT}`,
        borderRadius:"0 10px 10px 0",
        padding:"20px 20px 20px 18px", marginBottom:16,
      }}>
        <div style={{ fontFamily:"'IM Fell English',serif", fontSize:16, color:ACCENT, marginBottom:12 }}>
          💬 The "No-Nag" Strategic Nudge
        </div>
        <div style={{ fontFamily:"'Spectral',serif", fontSize:13, color:P.textSecond, lineHeight:1.7, marginBottom:12 }}>
          To evaluate their strategic comprehension without triggering academic friction, replace:
        </div>
        <div style={{
          background:"#FEE2E2", borderRadius:6, padding:"12px 16px",
          fontFamily:"'Spectral',serif", fontSize:13, color:RED,
          fontStyle:"italic", borderLeft:`3px solid ${RED}`,
          marginBottom:12, lineHeight:1.7,
        }}>
          "Have you finished your math modules?"
        </div>
        <div style={{ fontFamily:"'Spectral',serif", fontSize:12, color:P.textMuted, textAlign:"center", marginBottom:12 }}>replace with</div>
        <div style={{
          background:GREENBG, borderRadius:6, padding:"12px 16px",
          fontFamily:"'Spectral',serif", fontSize:13, color:GREEN,
          fontStyle:"italic", borderLeft:`3px solid ${GREEN}`,
          marginBottom:12, lineHeight:1.7,
        }}>
          "Which command phrase required more careful layout this week — 'Show That' or 'Hence'?"
        </div>
        <div style={{ fontFamily:"'Spectral',serif", fontSize:13, color:P.textSecond, lineHeight:1.7 }}>
          <strong>Why this works:</strong> This transitions your role from compliance manager to informed academic partner. It forces your child to mentally articulate exam strategy rather than treat problems as basic homework.
        </div>
      </div>

      {/* Footer note */}
      <div style={{
        padding:"14px 16px", background:P.pageBg,
        borderRadius:6, border:`1px solid ${P.border}`,
        fontFamily:"'Crimson Text',serif", fontSize:12,
        color:P.textMuted, fontStyle:"italic",
        textAlign:"center", lineHeight:1.8,
      }}>
        Week 2 (Functions, Sets & Inverse Rigor) begins Monday.<br />
        Thank you for keeping your child's daily compounding momentum sharp.
      </div>
    </div>
  );
}

// ── ROOT COMPONENT ─────────────────────────────────────────────
export default function BlueprintScreen({ weekNumber = 1, onBack }) {
  const [view, setView] = useState("student");

  return (
    <div style={{
      minHeight:"100vh", background:P.pageBg,
      boxSizing:"border-box",
    }}>
      {/* Sticky header */}
      <div style={{
        position:"sticky", top:0, zIndex:10,
        background:P.pageBg,
        borderBottom:`1px solid ${P.border}`,
        padding:"14px 20px",
        display:"flex", flexDirection:"column", gap:10,
      }}>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
          <button onClick={onBack} style={{
            fontFamily:"'Crimson Text',serif", fontSize:13,
            color:P.textMuted, fontStyle:"italic",
            background:"none", border:"none", cursor:"pointer", padding:0,
          }}>← Back</button>
          <div style={{ fontFamily:"'IM Fell English',serif", fontSize:14, color:P.textPrimary }}>
            Week {weekNumber} Blueprint
          </div>
          <div style={{ fontFamily:"'Crimson Text',serif", fontSize:11, color:P.textFaint, fontStyle:"italic" }}>
            {BRAND}
          </div>
        </div>

        {/* Toggle */}
        <div style={{
          display:"flex", background:P.cardBg,
          border:`1px solid ${P.border}`,
          borderRadius:8, padding:3, gap:3,
        }}>
          {["student","parent"].map(v => (
            <button key={v} onClick={() => setView(v)} style={{
              flex:1, padding:"8px",
              background: view===v ? ACCENT : "transparent",
              border:"none", borderRadius:6,
              color: view===v ? "#fff" : P.textMuted,
              fontFamily:"'IM Fell English',serif",
              fontSize:14, cursor:"pointer",
              transition:"all 0.2s",
            }}>
              {v === "student" ? "Student Blueprint" : "Parent Briefing"}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth:560, margin:"0 auto", padding:"24px 20px 60px" }}>
        <div style={{ marginBottom:20 }}>
          <div style={{ fontFamily:"'IM Fell English',serif", fontSize:22, color:P.textPrimary, marginBottom:4 }}>
            {view === "student"
              ? "Week 1: AA HL Mastery Blueprint"
              : "Week 1 Complete: The HL Math Strategy"}
          </div>
          <div style={{ fontFamily:"'Crimson Text',serif", fontSize:12, color:P.textFaint, fontStyle:"italic" }}>
            {view === "student"
              ? "5 Pillars · Exam Intelligence · Connections Map"
              : "Accountability & Monitoring · Strategic Nudges"}
          </div>
        </div>

        <Rule />

        {view === "student" ? <StudentBlueprint /> : <ParentBlueprint />}
      </div>
    </div>
  );
}
