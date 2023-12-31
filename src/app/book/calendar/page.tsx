"use client";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import React, { useEffect, useMemo, useState } from "react";

function Page() {
  // const realDate = useMemo(() => new Date(), []);
  // const currentDate = useMemo(() => new Date(), []);
  // let firstDayOfMonthWeekNum = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay() - 1;
  // const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();

  return (
    <div className="min-h-screen pt-40 font-body  mx-auto max-w-[80rem] ">
      <p className="text-logo font-semibold text-2xl mb-10">Wprowadź datę:</p>
      <div className="relative p-16 border-2 border-solid border-gray-200 shadow-lg min-h-[40rem] mb-20 flex flex-col gap-10 items-center">
        <div className="text-3xl uppercase font-bold text-centermb-8 tracking-widest">styczen</div>
        <form className="flex gap-4">
          <button
            className="text-4xl"
            // disabled={realDate.getMonth() === currentDate.getMonth()}
            onClick={(e) => {
              e.preventDefault();
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
            {/* {[...Array(month.firstDayOfMonthWeekNum)].map((_, index) => (
              <div key={index}></div>
            ))} */}
            {/* {month.days.map((day, index) => (
              <div key={index}>
                <input
                  className="hidden peer"
                  id={day.number.toString()}
                  name="day"
                  type="radio"
                  disabled={index < 10}
                />
                <label
                  className={`block cursor-pointer text-center peer-checked:text-red-800 w-[3rem] h-[3rem] peer-checked:border-2 p-3 peer-checked:border-red-500 peer-checked:rounded-xl font-bold ${
                    index < 10 ? "text-gray-400 " : "text-gray-700 "
                  }`}
                  htmlFor={day.number.toString()}
                >
                  {day.number}
                </label>
              </div>
            ))} */}
          </div>
          <button
            className="text-4xl"
            onClick={(e) => {
              e.preventDefault();
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
