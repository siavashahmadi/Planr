import React from "react";
import Task from "./Task";

// Define the interface for Day component props
interface DayProps {
  day: number;
  month: number;
}

const Day: React.FC<DayProps> = (props) => {
  const { day, month } = props;

  return (
    <div className="border border-slate-100 h-52">
      <div className="grid grid-cols-3 ">
        <Task />
        <Task />
      </div>
    </div>
  );
};

export default Day;
