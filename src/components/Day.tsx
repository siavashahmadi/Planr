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
    <div className=" bg-white border-slate-100 h-52 hover:scale-110 transition hover:shadow-lg rounded-md">
      <div className="grid grid-cols-4">
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
      </div>
    </div>
  );
};

export default Day;
