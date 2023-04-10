import "./App.scss";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AttendanceSection from "./components/Attendance/AttendanceSection";
import EventInfo from "./components/EventInfo";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function App() {
  return (
    <>
      <EventInfo />
    </>
  );
}

export default App;
