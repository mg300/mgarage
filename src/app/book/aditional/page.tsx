"use client";
import Button from "@/app/components/Button/Button";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
interface IAditional {
  serviceQuality: string;
  info: string;
}
interface input {
  label: string;
  id: keyof IAditional;
  placeholder?: string;
  required?: boolean;
}

function Page() {
  const searchParams = useSearchParams();

  const data: input[] = [
    {
      id: "serviceQuality",
      label: "Jakość",
      required: true,
    },
    {
      id: "info",
      label: "Informacje dodatkowe",
      required: true,
    },
  ];

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IAditional>();
  return (
    <div className="min-h-screen pt-40 font-body  mx-auto max-w-[80rem] ">
      <p className="text-logo font-semibold text-2xl mb-10">Wprowadź dodatkowe dane:</p>
      <div className="relative p-16 border-2 border-solid border-gray-200 shadow-lg min-h-[40rem] mb-20">
        <form onSubmit={handleSubmit((data) => console.log(data))}>
          <div className="">
            <p className="text-logo font-semibold text-lg mb-5">
              Wybierz jakość części, które chcesz aby były zamontowane w twoim samochodzie:
            </p>
            <ul className="grid w-full gap-6 md:grid-cols-4 mb-10">
              <li>
                <input
                  type="radio"
                  id="hosting-small"
                  name="hosting"
                  value="hosting-small"
                  className="hidden peer"
                  required
                />
                <label
                  htmlFor="hosting-small"
                  className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border  rounded-lg cursor-pointer border-gray-700  peer-checked:border-red-400 peer-checked:text-red-800 "
                >
                  <div className="block">
                    <div className="w-full text-lg font-semibold">Niska</div>
                    <div className="w-full">Hart, Topran </div>
                  </div>
                </label>
              </li>
              <li>
                <input
                  type="radio"
                  id="hosting-medium"
                  name="hosting"
                  value="hosting-medium"
                  className="hidden peer"
                  required
                />
                <label
                  htmlFor="hosting-medium"
                  className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border  rounded-lg cursor-pointer border-gray-700  peer-checked:border-red-400 peer-checked:text-red-800 "
                >
                  <div className="block">
                    <div className="w-full text-lg font-semibold">Średnia</div>
                    <div className="w-full">TRW, Filtron</div>
                  </div>
                  <svg
                    className="w-5 h-5 ml-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  ></svg>
                </label>
              </li>
              <li>
                <input
                  type="radio"
                  id="hosting-high"
                  name="hosting"
                  value="hosting-high"
                  className="hidden peer"
                  required
                />
                <label
                  htmlFor="hosting-high"
                  className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border  rounded-lg cursor-pointer border-gray-700  peer-checked:border-red-400 peer-checked:text-red-800 "
                >
                  <div className="block">
                    <div className="w-full text-lg font-semibold">Wysoka</div>
                    <div className="w-full">Bosch, ATE, Valeo </div>
                  </div>
                </label>
              </li>
              <li>
                <input
                  type="radio"
                  id="hosting-oem"
                  name="hosting"
                  value="hosting-oem"
                  className="hidden peer"
                  required
                />
                <label
                  htmlFor="hosting-oem"
                  className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border  rounded-lg cursor-pointer border-gray-700  peer-checked:border-red-400 peer-checked:text-red-800 "
                >
                  <div className="block">
                    <div className="w-full text-lg font-semibold">OEM</div>
                    <div className="w-full">Tylko oryginalne części</div>
                  </div>
                  <svg
                    className="w-5 h-5 ml-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  ></svg>
                </label>
              </li>
            </ul>
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Your message
            </label>
            <textarea
              id="message"
              rows={4}
              className="block p-2.5 w-[50%] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 mb-20"
              placeholder="Wpisz swoje uwagi..."
            ></textarea>
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
            <Button onClick={() => {}} color="red">
              Zarezerwuj wizytę
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Page;
