"use client";
import React, { useState } from "react";
import Button from "../components/Button/Button";
import Link from "next/link";

function Page() {
  const [clicked, setClicked] = useState("");
  const [selected, setSelected] = useState<string[]>([]);
  const handleClick = function (arg: string) {
    const result = selected.find((value) => value === arg);
    if (clicked == arg) setClicked("");

    if (!result) {
      setClicked(arg);
      setSelected([...selected, arg]);
    }
    if (result) {
      const newSelected = selected.filter((item) => item !== arg);
      setSelected(newSelected);
    }
  };
  return (
    <div className="h-screen pt-40 font-body  mx-auto max-w-[80rem] ">
      <p className="text-logo font-semibold text-2xl mb-10">Dostępne usługi:</p>
      <div className=" relative p-16 border-2 border-solid border-gray-200 shadow-lg min-h-[40rem]">
        <div className="flex flex-col lg:flex-row gap-36">
          <div className="flex flex-col gap-5">
            <button
              onClick={() => handleClick("oil")}
              className={`flex justify-between items-center min-w-[30rem] h-[6rem] px-10 border-2 border-solid  
            ${selected.includes("oil") ? "border-logo " : "border-gray-300"} rounded-[2rem] cursor-pointer `}
            >
              <p className=" text-sm lg:text-lg text-gray-600">Wymiana oleju silnikowego</p>
              <div>
                <p className=" text-sm lg:text-lg text-gray-600">od 500,00 zł</p>
                <p className=" text-sm text-gray-600">1h</p>
              </div>
            </button>
            <button
              onClick={() => handleClick("fuel")}
              className={`flex justify-between items-center min-w-[30rem] h-[6rem] px-10 border-2 border-solid  ${
                selected.includes("fuel") ? "border-logo " : "border-gray-300"
              } rounded-[2rem] cursor-pointer `}
            >
              <p className=" text-sm lg:text-lg text-gray-600">Wymiana oleju silnikowego</p>
              <div>
                <p className=" text-sm lg:text-lg text-gray-600">od 500,00 zł</p>
                <p className=" text-sm text-gray-600">1h</p>
              </div>
            </button>
          </div>
          <div>
            {clicked !== "" && (
              <>
                <p className="text-logo font-semibold text-2xl mb-10">Wymiana oleju silnikowego</p>

                <div>
                  <div className="bg-gray-200 rounded-3xl px-4 pt-2 pb-2.5">
                    <div className="leading-snug md:leading-normal p-4">
                      Nasza usługa wymiany oleju silnikowego to kluczowy krok w dbaniu o zdrowie i wydajność Twojego
                      pojazdu. Gwarantujemy profesjonalną obsługę i wysokiej jakości oleje, które utrzymają Twój silnik
                      w doskonałej kondycji.
                    </div>
                  </div>
                </div>
                <div className="mt-10 mb-5 font-semibold text-lg leading-relaxed">Rodzaj Oleju</div>
                <div className=" leading-snug md:leading-normal ">
                  Nasza usługa wymiany oleju silnikowego to kluczowy krok w dbaniu o zdrowie i wydajność Twojego
                  pojazdu. Gwarantujemy profesjonalną obsługę i wysokiej jakości oleje, które utrzymają Twój silnik w
                  doskonałej kondycji.
                </div>
                <div className="mt-10 mb-5 font-semibold text-lg leading-relaxed">Proces Wymiany Oleju</div>
                <div className=" leading-snug md:leading-normal ">
                  <ul className="ml-6 list-disc">
                    <li>Zlewanie i utylizowanie starego oleju</li>
                    <li>Wymianę filtra oleju</li>
                    <li>Napełnienie nowego oleju zgodnie z zaleceniami producenta</li>
                    <li>Kontrolę poziomu oleju i sprawdzenie wycieków</li>
                  </ul>
                </div>
              </>
            )}
          </div>
        </div>
        <Link href="/vehicle" className="absolute bottom-10">
          <Button>Przejdź dalej</Button>
        </Link>
      </div>
    </div>
  );
}

export default Page;
