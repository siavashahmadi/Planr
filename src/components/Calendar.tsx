import React from "react";
import Day from "./Day";

const Calendar = () => {
  const monthsDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  return (
    <div className="grid grid-cols-7 mt-3 w-full lg:w-3/4 bg-white rounded-xl">
      <div className="p-2 text-[#838383]">Sunday</div>
      <div className="p-2 text-[#838383]">Monday</div>
      <div className="p-2 text-[#838383]">Tuesday</div>
      <div className="p-2 text-[#838383]">Wednesday</div>
      <div className="p-2 text-[#838383]">Thursday</div>
      <div className="p-2 text-[#838383]">Friday</div>
      <div className="p-2 text-[#838383]">Saturday</div>
      {monthsDays.map((monthDays, monthIndex) => {
        return (
          <React.Fragment key={monthIndex}>
            {Array.from({ length: monthDays }, (_, dayIndex) => (
              <Day key={dayIndex} day={dayIndex + 1} month={monthIndex + 1} />
            ))}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Calendar;
