"use client";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import React, { FormEventHandler, useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import Link from "next/link";
import Button from "@/app/components/Button/Button";
interface calendarData {
  year: number;
  days: number[];
  firstDayIndex: number;
  monthName: String;
  prevMonthDays: number[];
  nextMonthDays: number[];
}
interface availableDate {
  date: Date;
  hours: Date[];
}
function Page() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentDate = new Date();
  const [calendarDate, setCalendarDate] = useState(new Date());
  const [hours, setHours] = useState<Date[]>([]);
  const [dateIsSelected, setDateIsSelected] = useState(false);
  const [endDate, setEndDate] = useState<Date | null>(null);
  function getMonthDays(): number[] {
    const daysInMonth = new Date(calendarDate.getFullYear(), calendarDate.getMonth() + 1, 0).getDate();
    const daysArray: number[] = [];
    for (let i = 1; i <= daysInMonth; i++) {
      daysArray.push(i);
    }
    return daysArray;
  }
  function getPrevMonthDays(): number[] {
    const prevDate: Date = new Date(calendarDate.getFullYear(), calendarDate.getMonth() - 1);
    const daysInMonth = new Date(prevDate.getFullYear(), prevDate.getMonth() + 1, 0).getDate();
    const firstDayIndex = getfirstDayIndex(calendarDate);
    let daysArr = [];
    for (let i = firstDayIndex - 1; i >= 0; i--) {
      daysArr.push(daysInMonth - i);
    }

    return daysArr;
  }
  function getNextMonthDays(): number[] {
    const daysInMonth = new Date(calendarDate.getFullYear(), calendarDate.getMonth() + 1, 0).getDate();
    const firstDayIndex = getfirstDayIndex(calendarDate);
    let daysArr = [];
    for (let i = 1; i <= 42 - daysInMonth - firstDayIndex; i++) {
      daysArr.push(i);
    }
    return daysArr;
  }
  function getfirstDayIndex(date: Date): number {
    let index = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
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
    if (currentDate < calendarDate && currentDate.getMonth() != calendarDate.getMonth()) return true;
    if (index >= currentDate.getDate()) {
      return true;
    }
    return false;
  }

  const calendarData: calendarData = {
    year: calendarDate.getFullYear(),
    days: getMonthDays(),
    firstDayIndex: getfirstDayIndex(calendarDate),
    monthName: getMonthName(),
    prevMonthDays: getPrevMonthDays(),
    nextMonthDays: getNextMonthDays(),
  };
  useEffect(() => {
    const availableDate: availableDate[] = [
      {
        date: new Date(2024, 0, 15),
        hours: [
          new Date(0, 0, 0, 11, 30),
          new Date(0, 0, 0, 18, 50),
          new Date(0, 0, 0, 14, 30),
          new Date(0, 0, 0, 16, 30),
        ],
      },
      {
        date: new Date(2024, 0, 16),
        hours: [
          new Date(0, 0, 0, 11, 30),
          new Date(0, 0, 0, 12, 50),
          new Date(0, 0, 0, 14, 30),
          new Date(0, 0, 0, 16, 30),
        ],
      },
      {
        date: new Date(2024, 0, 17),
        hours: [
          new Date(0, 0, 0, 11, 30),
          new Date(0, 0, 0, 17, 50),
          new Date(0, 0, 0, 14, 30),
          new Date(0, 0, 0, 16, 30),
        ],
      },
    ];
    const selectedDate = availableDate.filter((dateObj) => dateObj.date.getTime() == calendarDate.getTime());
    if (selectedDate.length !== 0) {
      setHours(selectedDate[0].hours);
    } else {
      setHours([]);
    }
  }, [calendarDate]);

  const prevParams = `IDs=${searchParams.get("IDs")}`;
  function onSubmit() {
    console.log(calendarDate.toDateString());
    calendarDate.toDateString;
    // const queryParams = Object.entries(data)
    //   .filter(([key, value]) => value !== "" && value !== undefined)
    //   .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
    //   .join("&");
    // router.push(`/book/aditional?${encodeURIComponent(prevParams)}&${queryParams}`);
  }
  return (
    <div className="min-h-screen pt-40 font-body  mx-auto max-w-[80rem] ">
      <p className="text-logo font-semibold text-2xl mb-10">Wprowadź datę:</p>
      <div className="relative p-16 border-2 border-solid border-gray-200 shadow-lg min-h-[40rem] mb-20 ">
        <form onSubmit={() => onSubmit()}>
          <div className="flex gap-20">
            <div className="flex flex-col w-50 items-center">
              <div className="text-3xl uppercase font-bold mb-8 tracking-widest">
                {calendarData.monthName} {calendarDate.getFullYear()}
              </div>
              <div className="flex gap-4">
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
                  {calendarData.prevMonthDays.map((day, index) => (
                    <div key={index}>
                      <input
                        className="hidden"
                        id={day.toString() + "p"}
                        name="day"
                        type="radio"
                        onClick={() => setPrevMonth()}
                      />
                      <label
                        className={`block cursor-pointer text-center w-[3rem] h-[3rem]  p-3  font-bold ${"text-gray-400 "}`}
                        htmlFor={day.toString() + "p"}
                      >
                        {day}
                      </label>
                    </div>
                  ))}
                  {calendarData.days.map((day, index) => (
                    <div key={index}>
                      <input
                        className="hidden peer"
                        id={day.toString() + "c"}
                        name="day"
                        type="radio"
                        disabled={!checkDayIsActive(index)}
                        onClick={() => {
                          setCalendarDate(
                            (prevDate) => new Date(prevDate.getFullYear(), prevDate.getMonth(), index + 1)
                          );
                          setDateIsSelected(true);
                        }}
                      />
                      <label
                        className={`block cursor-pointer text-center peer-checked:text-red-800 w-[3rem] h-[3rem]
                        border-2 p-3 peer-checked:border-red-500 rounded-xl font-bold ${
                          checkDayIsActive(index) ? "text-gray-700 " : "text-gray-400 "
                        }`}
                        htmlFor={day.toString() + "c"}
                      >
                        {day}
                      </label>
                    </div>
                  ))}
                  {calendarData.nextMonthDays.map((day, index) => (
                    <div key={index}>
                      <input
                        className="hidden"
                        id={day.toString() + "n"}
                        name="day"
                        type="radio"
                        onClick={() => setNextMonth()}
                      />
                      <label
                        className={`block cursor-pointer text-center w-[3rem] h-[3rem]  p-3  font-bold ${"text-gray-400 "}`}
                        htmlFor={day.toString() + "n"}
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
              </div>
            </div>
            <div>
              <p className="text-logo font-semibold text-2xl mb-10">Dostępne godziny:</p>
              <div className="flex gap-5">
                {hours.map((date, index) => (
                  <div key={index}>
                    <input
                      className="hidden peer"
                      id={index + "hour"}
                      name="hours"
                      type="radio"
                      onClick={() => {
                        setEndDate(
                          new Date(
                            calendarDate.getFullYear(),
                            calendarDate.getMonth(),
                            calendarDate.getDate(),
                            date.getHours(),
                            date.getMinutes()
                          )
                        );
                      }}
                    />
                    <label
                      className={`block cursor-pointer text-center peer-checked:text-red-800 peer-checked:border-2 p-3 peer-checked:border-red-500 peer-checked:rounded-xl font-bold `}
                      htmlFor={index + "hour"}
                    >
                      {date.getHours()}:{date.getMinutes()}
                    </label>
                  </div>
                ))}
                {!dateIsSelected && <p className="text-green-600 font-semibold text-lg">Wybierz date z kalendarza</p>}
                {hours.length === 0 && dateIsSelected && (
                  <p className="text-red-600 font-semibold text-lg">Brak dostępnych terminów</p>
                )}
              </div>
            </div>
          </div>

          <div className="mt-20">
            <Link
              href={{
                pathname: "/book/vehicle",
                search: searchParams.toString(),
              }}
            >
              <Button type="button" color="blue">
                Powrót
              </Button>
            </Link>
            <Button onClick={() => onSubmit()} color="red">
              Przejdź dalej
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Page;
