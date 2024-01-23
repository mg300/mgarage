"use client";
import Button from "@/app/components/Button/Button";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
interface IAditional {
  serviceQuality: string;
  info: string;
  name: string;
  phone: string;
}

function Page() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
  } = useForm<IAditional>();

  const onSubmit = (data: IAditional) => {
    const queryParams = Object.entries(data)
      .filter(([key, value]) => value !== "" && value !== undefined)
      .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
      .join("&");
    router.replace(`/book/summary?${queryParams}`);
  };
  useEffect(() => {
    searchParams.forEach((value: string, key: string) => {
      setValue(key as keyof IAditional, value);
    });
  }, [searchParams, setValue]);
  return (
    <div className="min-h-screen pt-40 font-body  mx-auto max-w-[80rem] ">
      <p className="text-logo font-semibold text-2xl mb-10">Wprowadź dodatkowe dane:</p>
      <div className="relative p-16 border-2 border-solid border-gray-200 shadow-lg min-h-[40rem] mb-20">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="">
            <p className="text-logo font-semibold text-lg mb-5">
              Wybierz jakość części, które chcesz aby były zamontowane w twoim samochodzie:
            </p>
            <ul className="grid w-full gap-6 md:grid-cols-4 mb-10">
              <li>
                <input
                  type="radio"
                  id="quality-low"
                  value="quality-low"
                  className="hidden peer"
                  {...register("serviceQuality", { required: true && "Nie zaznaczono żadnej opcji" })}
                />
                <label
                  htmlFor="quality-low"
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
                  id="quality-medium"
                  value="quality-medium"
                  className="hidden peer"
                  {...register("serviceQuality", { required: true && "Nie zaznaczono żadnej opcji" })}
                />
                <label
                  htmlFor="quality-medium"
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
                  id="quality-high"
                  value="quality-high"
                  className="hidden peer"
                  {...register("serviceQuality", { required: true && "Nie zaznaczono żadnej opcji" })}
                />
                <label
                  htmlFor="quality-high"
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
                  id="quality-oem"
                  value="quality-oem"
                  className="hidden peer"
                  {...register("serviceQuality", { required: true && "Nie zaznaczono żadnej opcji" })}
                />
                <label
                  htmlFor="quality-oem"
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
            <p className="text-red-600 mb-10 mt-[-1rem]">{errors["serviceQuality"]?.message}</p>
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Uwagi:
            </label>
            <textarea
              id="message"
              rows={4}
              className="block p-2.5 w-[50%] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 mb-20"
              placeholder="Wpisz swoje uwagi..."
              {...register("info")}
            ></textarea>

            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">
              Imię i nazwisko
            </label>
            <input
              type="text"
              id="name"
              {...register("name", {
                required: true && "Podaj imię i nazwisko",
                minLength: { value: 3, message: "Pole ma za mało znaków" },
                maxLength: { value: 50, message: "Pole ma za dużo znaków" },
                pattern: {
                  value: /^[A-Za-ząćęłńóśźżĄĆĘŁŃÓŚŹŻ]+ [A-Za-ząćęłńóśźżĄĆĘŁŃÓŚŹŻ]+$/,
                  message: "Wprowadzono niepoprawne dane.",
                },
              })}
              className={` ${
                errors["name"] ? "border-red-400 border-2" : "border-gray-400"
              } bg-gray-100 border  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
              placeholder="Imię i nazwisko"
            />
            <p className="text-red-600">{errors["name"]?.message}</p>
            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 mt-5">
              Numer telefonu:
            </label>
            <input
              type="text"
              id="phone"
              {...register("phone", {
                required: true && "Podaj numer telefonu",
                minLength: { value: 3, message: "Pole ma za mało znaków" },
                maxLength: { value: 16, message: "Pole ma za dużo znaków" },
                pattern: {
                  value: /^(?:\+\d{1,3}\s?)?(?:\d{9,}|(?:\d{3}\s?){2}\d{3,})$/,
                  message: "Wprowadzono niepoprawny numer telefonu.",
                },
              })}
              className={` ${
                errors["phone"] ? "border-red-400 border-2" : "border-gray-400"
              } bg-gray-100 border  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
              placeholder="Numer telefonu"
            />
            <p className="text-red-600">{errors["phone"]?.message}</p>
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
            <Button type="submit" color="red">
              Podsumowanie
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Page;
