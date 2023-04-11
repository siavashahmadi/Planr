import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Calendar from "./components/Calendar";
import DailyView from "./components/DailyView";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="lg:flex">
        <Calendar />
        <DailyView />
      </div>
    </div>
  );
}

export default App;
