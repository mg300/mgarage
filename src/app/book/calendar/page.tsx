"use client";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import React, { useEffect, useMemo, useState } from "react";
interface calendarData {
  year: number;
  days: number[];
  firstMonthDayIndex: number;
  monthName: String;
}
function Page() {
  const currentDate = new Date();
  const [calendarDate, setCalendarDate] = useState(new Date());
  function getMonthDays(): number[] {
    const daysInMonth = new Date(calendarDate.getFullYear(), calendarDate.getMonth() + 1, 0).getDate();
    const daysArray: number[] = [];
    for (let i = 1; i <= daysInMonth; i++) {
      daysArray.push(i);
    }
    return daysArray;
  }
  function getfirstMonthDayIndex(): number {
    let index = new Date(calendarDate.getFullYear(), calendarDate.getMonth(), 1).getDay();
    if (index === 0) index = 7;
    return index - 1;
  }
  function getMonthName(): String {
    return calendarDate.toLocaleString("pl-PL", { month: "long" });
  }
  function setNextMonth() {
    setCalendarDate((prevDate) => new Date(prevDate.getFullYear(), prevDate.getMonth() + 1));
  }
  function setPrevMonth() {
    setCalendarDate(new Date(calendarDate.getFullYear(), calendarDate.getMonth() - 1));
  }
  function checkDayIsActive(index: number): boolean {
    if (currentDate < calendarDate) return true;
    if (index > calendarDate.getDate()) return true;
    return false;
  }

  const calendarData: calendarData = {
    year: calendarDate.getFullYear(),
    days: getMonthDays(),
    firstMonthDayIndex: getfirstMonthDayIndex(),
    monthName: getMonthName(),
  };
  return (
    <div className="min-h-screen pt-40 font-body  mx-auto max-w-[80rem] ">
      <p className="text-logo font-semibold text-2xl mb-10">Wprowadź datę:</p>
      <div className="relative p-16 border-2 border-solid border-gray-200 shadow-lg min-h-[40rem] mb-20 flex flex-col gap-10 items-center">
        <div className="text-3xl uppercase font-bold text-centermb-8 tracking-widest">{calendarData.monthName}</div>
        <form className="flex gap-4">
          <button
            className="text-4xl"
            disabled={
              calendarDate.getMonth() === currentDate.getMonth() &&
              calendarDate.getFullYear() === calendarDate.getFullYear()
            }
            onClick={(e) => {
              e.preventDefault();
              setPrevMonth();
            }}
          >
            <GrPrevious />
          </button>
          <div className="grid grid-cols-7 min-w-[20rem] gap-2 justify-items-center font-semibold">
            <span>Pn</span>
            <span>Wt</span>
            <span>Śr</span>
            <span>Czw</span>
            <span>Pt</span>
            <span>Sob</span>
            <span>Nd</span>
            {[...Array(calendarData.firstMonthDayIndex)].map((_, index) => (
              <div key={index}></div>
            ))}
            {calendarData.days.map((day, index) => (
              <div key={index}>
                <input className="hidden peer" id={day.toString()} name="day" type="radio" disabled={false} />
                <label
                  className={`block cursor-pointer text-center peer-checked:text-red-800 w-[3rem] h-[3rem] peer-checked:border-2 p-3 peer-checked:border-red-500 peer-checked:rounded-xl font-bold ${
                    checkDayIsActive(index) ? "text-gray-700 " : "text-gray-400 "
                  }`}
                  htmlFor={day.toString()}
                >
                  {day}
                </label>
              </div>
            ))}
          </div>
          <button
            className="text-4xl"
            onClick={(e) => {
              e.preventDefault();
              setNextMonth();
            }}
          >
            <GrNext />
          </button>
        </form>
      </div>
    </div>
  );
}

export default Page;
