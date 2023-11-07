"use client";
import React, { useState } from "react";

function page() {
  const [clicked, setClicked] = useState("");
  const [selected, setSelected] = useState<string[]>([]);
  const handleClick = function (arg: string) {
    const result = selected.find((value) => value === "oil");
    if (clicked == arg) setClicked("");
    else setClicked(arg);
    if (!result) {
      setSelected([...selected, arg]);
    }
    if (result) {
      const newSelected = selected.filter((item) => item !== arg);
      setSelected(newSelected);
    }
  };
  return (
    <div className="h-screen pt-32 font-body mx-auto max-w-[80rem] ">
      <p className="text-logo font-semibold text-2xl mb-10">Dostępne usługi:</p>
      <div className="flex gap-14">
        <div className="flex flex-col gap-5">
          <button
            onClick={() => handleClick("oil")}
            className={`flex justify-between items-center xl:w-[30rem] h-[6rem] px-10 border-2 border-solid  ${
              clicked === "oil" ? "border-logo " : "border-gray-300"
            } rounded-[2rem] cursor-pointer`}
          >
            <p className=" text-lg text-gray-600">Wymiana oleju silnikowego</p>
            <div>
              <p className=" text-lg text-gray-600">500,00 zł</p>
              <p className=" text-sm text-gray-600">1h</p>
            </div>
          </button>
          <button
            onClick={() => handleClick("fuel")}
            className={`flex justify-between items-center xl:w-[30rem] h-[6rem] px-10 border-2 border-solid  ${
              clicked === "fuel" ? "border-logo " : "border-gray-300"
            } rounded-[2rem] cursor-pointer`}
          >
            <p className=" text-lg text-gray-600">Wymiana oleju silnikowego</p>
            <div>
              <p className=" text-lg text-gray-600">500,00 zł</p>
              <p className=" text-sm text-gray-600">1h</p>
            </div>
          </button>
        </div>
        <div>
          {clicked !== "" && <p className="text-logo font-semibold text-2xl mb-10">Wymiana oleju silnikowego</p>}
        </div>
      </div>
    </div>
  );
}

export default page;
