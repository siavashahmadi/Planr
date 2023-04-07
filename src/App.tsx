import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Calendar from "./components/Calendar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
      <Calendar />
    </div>
  );
}

export default App;
