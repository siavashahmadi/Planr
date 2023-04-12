// Month.tsx
import React from "react";
import Day from "./Day";

interface MonthProps {
  monthIndex: number;
  days: number;
}

const Month: React.FC<MonthProps> = (props) => {
  const { monthIndex, days } = props;

  return (
    <div
      key={monthIndex}
      className="month grid grid-cols-7 mt-2 w-full bg-white rounded-xl"
    >
      <div className="p-2 text-[#838383]">Sunday</div>
      <div className="p-2 text-[#838383]">Monday</div>
      <div className="p-2 text-[#838383]">Tuesday</div>
      <div className="p-2 text-[#838383]">Wednesday</div>
      <div className="p-2 text-[#838383]">Thursday</div>
      <div className="p-2 text-[#838383]">Friday</div>
      <div className="p-2 text-[#838383]">Saturday</div>
      {Array.from({ length: days }, (_, dayIndex) => (
        <Day key={dayIndex} day={dayIndex + 1} month={monthIndex + 1} />
      ))}
    </div>
  );
};

export default Month;
