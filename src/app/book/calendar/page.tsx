"use client";
import React, { useEffect, useMemo, useState } from "react";

interface day {
  number: number;
  hours: number[];
}
interface month {
  days: day[];
  length: number;
  firstDayOfMonthNum: number;
  currentDay: number;
  monthName: String;
}

function Page() {
  // const currentDate = useMemo(() => new Date(), []);
  const [month, setMonth] = useState<month>({
    days: [{ number: 1, hours: [1, 2, 3] }],
    length: 1,
    firstDayOfMonthNum: 1,
    currentDay: 1,
    monthName: "",
  });
  useEffect(() => {
    const currentDate = new Date();
    currentDate.setMonth(currentDate.getMonth());
    const firstDayOfMonthNum = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay() - 1;
    const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
    console.log(currentDate.getMonth(), currentDate.getDate(), daysInMonth);
    const tempMonth = [];
    for (let i = 1; i <= daysInMonth; i++) {
      tempMonth.push({ number: i, hours: [] });
    }
    setMonth({
      monthName: currentDate.toLocaleString("pl-PL", { month: "long" }),
      days: tempMonth,
      length: 1,
      firstDayOfMonthNum: +firstDayOfMonthNum,
      currentDay: currentDate.getDate(),
    });
  }, []);
  return (
    <div className="min-h-screen pt-40 font-body  mx-auto max-w-[80rem] ">
      <p className="text-logo font-semibold text-2xl mb-10">Wprowadź datę:</p>
      <div className="relative p-16 border-2 border-solid border-gray-200 shadow-lg min-h-[40rem] mb-20">
        <div className="text-3xl uppercase font-bold text-center w-[50%] mb-8 tracking-widest">{month.monthName}</div>
        <form className="flex">
          <button>prev</button>
          <div className="grid grid-cols-7 w-[50%] gap-2 justify-items-center font-semibold">
            <span>Pn</span>
            <span>Wt</span>
            <span>Śr</span>
            <span>Czw</span>
            <span>Pt</span>
            <span>Sob</span>
            <span>Nd</span>
            {[...Array(month.firstDayOfMonthNum)].map((_, index) => (
              <div key={index}></div>
            ))}
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
          </div>
          <button>next</button>
        </form>
      </div>
    </div>
  );
}

export default Page;
