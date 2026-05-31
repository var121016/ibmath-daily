import { useState } from "react";
import { DAYS } from "./data/index";
import HomeScreen      from "./components/HomeScreen";
import ProblemPicker   from "./components/ProblemPicker";
import CarouselView    from "./components/CarouselView";
import BlueprintScreen from "./components/BlueprintScreen";
import "./index.css";

export default function App() {
  const [screen,      setScreen]      = useState("home");
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

  if (screen === "home")      return <HomeScreen onSelectDay={handleSelectDay} onViewBlueprint={() => setScreen("blueprint")} />;
  if (screen === "picker")    return <ProblemPicker day={selectedDay} onSelect={handleSelectProblem} onBack={() => setScreen("home")} />;
  if (screen === "carousel")  return <CarouselView day={selectedDay} startIndex={startIndex} onBack={() => setScreen("picker")} />;
  if (screen === "blueprint") return <BlueprintScreen weekNumber={1} onBack={() => setScreen("home")} />;
}
