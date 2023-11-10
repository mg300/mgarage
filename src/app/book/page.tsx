"use client";
import React, { useState } from "react";
import Button from "../components/Button/Button";
import Link from "next/link";
import { useForm } from "react-hook-form";
interface IData {
  serviceIDs: string[];
}
function Page() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IData>();

  return (
    <div className="min-h-screen pt-40 font-body  mx-auto max-w-[80rem] ">
      <p className="text-logo font-semibold text-2xl mb-10">Dostępne usługi:</p>
      <div className=" relative p-16 border-2 border-solid border-gray-200 shadow-lg min-h-[40rem] mb-20">
        <div className="flex flex-col lg:flex-row gap-36">
          <form onSubmit={handleSubmit((data) => console.log(data))}>
            <ul className="flex flex-col gap-5">
              <li>
                <input type="checkbox" id="oil" value="" className="hidden peer" />
                <label
                  onClick={() => {}}
                  htmlFor="oil"
                  className={`flex justify-between items-center min-w-[30rem] h-[6rem] px-10 border-2 border-solid  
                             peer-checked:border-red-400 peer-checked:text-red-800 text-gray-600 rounded-[2rem] cursor-pointer `}
                >
                  <p className="text-sm lg:text-lg">Wymiana oleju silnikowego</p>
                  <div>
                    <p className="text-sm lg:text-lg">od 500,00 zł</p>
                    <p className="text-sm">1h</p>
                  </div>
                </label>
              </li>

              <li>
                <input type="checkbox" id="fuel" value="" className="hidden peer" />
                <label
                  onClick={() => {}}
                  htmlFor="fuel"
                  className={`flex justify-between items-center min-w-[30rem] h-[6rem] px-10 border-2 border-solid  
                           peer-checked:border-red-400 peer-checked:text-red-800 text-gray-600 rounded-[2rem] cursor-pointer `}
                >
                  <p className="text-sm lg:text-lg">Wymiana oleju w skrzyni biegów</p>
                  <div>
                    <p className="text-sm lg:text-lg">od 500,00 zł</p>
                    <p className="text-sm">1h</p>
                  </div>
                </label>
              </li>
            </ul>
          </form>
          <div>
            {
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
            }
          </div>
        </div>
        <Link href="/book/vehicle" className="absolute bottom-10">
          <Button color="red">Przejdź dalej</Button>
        </Link>
      </div>
    </div>
  );
}

export default Page;
