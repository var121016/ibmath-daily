// ─────────────────────────────────────────────────────────────
// App.jsx — the root component. Its only job is routing.
//
// Three screens:
//   home     → HomeScreen     (choose a day)
//   picker   → ProblemPicker  (jump to a question)
//   carousel → CarouselView   (solve problems)
//
// Why keep routing here and nothing else?
//   App.jsx is the first file any developer reads.
//   If it's clean, they immediately understand the app structure.
//   If it's cluttered, they're lost before they start.
// ─────────────────────────────────────────────────────────────

import { useState } from "react";
import { DAYS } from "./data/index";
import HomeScreen    from "./components/HomeScreen";
import ProblemPicker from "./components/ProblemPicker";
import CarouselView  from "./components/CarouselView";

// Load fonts and KaTeX CSS once at the app level
import "./index.css";

export default function App() {
  const [screen,     setScreen]     = useState("home");
  const [selectedDay, setSelectedDay] = useState(null);
  const [startIndex,  setStartIndex]  = useState(0);

  const handleSelectDay = (dayNum) => {
    setSelectedDay(DAYS.find((d) => d.day === dayNum));
    setScreen("picker");
  };

  const handleSelectProblem = (idx) => {
    setStartIndex(idx);
    setScreen("carousel");
  };

  if (screen === "home") {
    return <HomeScreen onSelectDay={handleSelectDay} />;
  }

  if (screen === "picker") {
    return (
      <ProblemPicker
        day={selectedDay}
        onSelect={handleSelectProblem}
        onBack={() => setScreen("home")}
      />
    );
  }

  if (screen === "carousel") {
    return (
      <CarouselView
        day={selectedDay}
        startIndex={startIndex}
        onBack={() => setScreen("picker")}
      />
    );
  }
}
