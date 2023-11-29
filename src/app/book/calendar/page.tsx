"use client";
import React, { useEffect, useState } from "react";

interface day {
  number: number;
  hours: number[];
}

function Page() {
  const [month, setMonth] = useState<day[]>([{ number: 1, hours: [1] }]);
  useEffect(() => {
    const currentDate = new Date();
    const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
    console.log(daysInMonth);
    const tempMonth = [];
    for (let i = 1; i <= daysInMonth; i++) {
      tempMonth.push({ number: i, hours: [] });
    }
    setMonth(tempMonth);
  }, []);
  return (
    <div className="min-h-screen pt-40 font-body  mx-auto max-w-[80rem] ">
      <p className="text-logo font-semibold text-2xl mb-10">Wprowadź datę:</p>
      <div className="relative p-16 border-2 border-solid border-gray-200 shadow-lg min-h-[40rem] mb-20">
        <form>
          {month.map((day, index) => (
            <span key={index}>{day.number}</span>
          ))}
        </form>
      </div>
    </div>
  );
}

export default Page;
