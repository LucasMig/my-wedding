import "./App.scss";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AttendanceSection from "./components/Attendance/AttendanceSection";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function App() {
  return (
    <>
      <AttendanceSection />
    </>
  );
}

export default App;
