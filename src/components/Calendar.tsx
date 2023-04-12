import React, { useState } from "react";
import Day from "./Day";
import Month from "./Month";

const Calendar = () => {
  const monthsDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const [month, setMonth] = useState(12)

  return (
    <div className="flex flex-col">
      <div className="w-72">
        <select value={month} onChange={e => setMonth(Number(e.target.value))}>
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
      </div>
      <Month monthIndex={month} days={monthsDays[month]} />
    </div>
  );
};

export default Calendar;
