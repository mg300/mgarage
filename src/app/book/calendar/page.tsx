"use client";
import React, { useEffect, useState } from "react";

interface day {
  number: number;
  hours: number[];
}
interface month {
  days: day[];
  length: number;
  firstDayOfMonth: number;
  currentDay: number;
}

function Page() {
  const [month, setMonth] = useState<month>({
    days: [{ number: 1, hours: [1, 2, 3] }],
    length: 1,
    firstDayOfMonth: 1,
    currentDay: 1,
  });
  useEffect(() => {
    const currentDate = new Date();
    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
    const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
    const tempMonth = [];
    for (let i = 1; i <= daysInMonth; i++) {
      tempMonth.push({ number: i, hours: [] });
    }
    setMonth({ days: tempMonth, length: 1, firstDayOfMonth: +firstDayOfMonth, currentDay: currentDate.getDate() });
  }, []);
  return (
    <div className="min-h-screen pt-40 font-body  mx-auto max-w-[80rem] ">
      <p className="text-logo font-semibold text-2xl mb-10">Wprowadź datę:</p>
      <div className="relative p-16 border-2 border-solid border-gray-200 shadow-lg min-h-[40rem] mb-20">
        <form className="grid grid-cols-7 w-[50%] gap-2 justify-items-center font-semibold">
          <span>Pn</span>
          <span>Wt</span>
          <span>Śr</span>
          <span>Czw</span>
          <span>Pt</span>
          <span>Sob</span>
          <span>Nd</span>
          {month.days.map((day, index) => (
            <div key={index}>
              <input
                className="hidden peer"
                id={day.number.toString()}
                name="day"
                type="radio"
                disabled={index < month.currentDay}
              />
              <label
                className={`block cursor-pointer text-center peer-checked:text-red-800 w-[3rem] h-[3rem] peer-checked:border-2 p-3 peer-checked:border-red-500 peer-checked:rounded-xl font-bold ${
                  index < month.currentDay ? "text-gray-400 " : "text-gray-700 "
                }`}
                htmlFor={day.number.toString()}
              >
                {day.number}
              </label>
            </div>
          ))}
        </form>
      </div>
    </div>
  );
}

export default Page;
