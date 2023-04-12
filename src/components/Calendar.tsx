import React, { useState } from "react";
import Day from "./Day";
import Month from "./Month";

const Calendar = () => {
  const monthsDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const [month, setMonth] = useState(12)

  return (
    <div className="flex flex-col">
      <div className="inline-block relative w-full mt-2">
        <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline" value={month} onChange={e => setMonth(Number(e.target.value))}>
          <option value={12} disabled>Choose a month</option>
          <option value={0}>January</option>
          <option value={1}>February</option>
          <option value={2}>March</option>
          <option value={3}>April</option>
          <option value={4}>May</option>
          <option value={5}>June</option>
          <option value={6}>July</option>
          <option value={7}>August</option>
          <option value={8}>September</option>
          <option value={9}>October</option>
          <option value={10}>November</option>
          <option value={11}>December</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
        </div>
      </div>
      <Month monthIndex={month} days={monthsDays[month]} />
    </div>
  );
};

export default Calendar;
