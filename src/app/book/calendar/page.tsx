"use client";
import React, { useEffect, useMemo, useState } from "react";

interface day {
  number: number;
  hours: number[];
}
interface month {
  year: number;
  days: day[];
  length: number;
  firstDayOfMonthNum: number;
  realDay: number;
  monthName: String;
}

function Page() {
  const realDate = useMemo(() => new Date(), []);
  const currentDate = useMemo(() => new Date(), []);
  const setMonthData = function (month: number) {
    currentDate.setMonth(currentDate.getMonth() + month);
    let firstDayOfMonthNum = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay() - 1;
    if (firstDayOfMonthNum === -1) firstDayOfMonthNum = 6;
    const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
    const tempMonth = [];
    for (let i = 1; i <= daysInMonth; i++) {
      tempMonth.push({ number: i, hours: [] });
    }
    return {
      year: currentDate.getFullYear(),
      days: tempMonth,
      length: 1,
      firstDayOfMonthNum: +firstDayOfMonthNum,
      realDay: realDate.getDate(),
      monthName: currentDate.toLocaleString("pl-PL", { month: "long" }),
    };
  };
  const [month, setMonth] = useState<month>(setMonthData(0));

  return (
    <div className="min-h-screen pt-40 font-body  mx-auto max-w-[80rem] ">
      <p className="text-logo font-semibold text-2xl mb-10">Wprowadź datę:</p>
      <div className="relative p-16 border-2 border-solid border-gray-200 shadow-lg min-h-[40rem] mb-20">
        <div className="text-3xl uppercase font-bold text-center w-[50%] mb-8 tracking-widest">
          {month.monthName} {month.year}{" "}
        </div>
        <form className="flex">
          <button
            disabled={realDate.getMonth() === currentDate.getMonth()}
            onClick={(e) => {
              e.preventDefault();
              setMonth(setMonthData(-1));
            }}
          >
            prev
          </button>
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
                  disabled={index < month.realDay}
                />
                <label
                  className={`block cursor-pointer text-center peer-checked:text-red-800 w-[3rem] h-[3rem] peer-checked:border-2 p-3 peer-checked:border-red-500 peer-checked:rounded-xl font-bold ${
                    index < month.realDay ? "text-gray-400 " : "text-gray-700 "
                  }`}
                  htmlFor={day.number.toString()}
                >
                  {day.number}
                </label>
              </div>
            ))}
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              setMonth(setMonthData(1));
            }}
          >
            prev
          </button>
        </form>
      </div>
    </div>
  );
}

export default Page;
