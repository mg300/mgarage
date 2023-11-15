"use client";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import Button from "../../components/Button/Button";
import { useRouter, useSearchParams } from "next/navigation";
interface IVehicle {
  mark: string;
  model: string;
  vin: string;
  year: string;
  color: string;
  fuelType: string;
  engineCapacity: string;
  mileage: string;
  registrationNumber: string;
}
interface input {
  label: string;
  id: keyof IVehicle;
  placeholder: string;
  minLength: number;
  maxLength: number;
  required: boolean;
  pattern?: RegExp;
}
function Page() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const data: input[] = [
    {
      label: "Marka",
      id: "mark",
      placeholder: "VW",
      minLength: 2,
      maxLength: 30,
      required: true,
    },
    {
      label: "Model",
      id: "model",
      placeholder: "Golf",
      minLength: 2,
      maxLength: 30,
      required: true,
    },
    {
      label: "Numer VIN",
      id: "vin",
      placeholder: "ABC123456789DEF01",
      minLength: 17,
      maxLength: 17,
      required: true,
      pattern: /^[A-HJ-NPR-Z0-9]{17}$/,
    },
    {
      label: "Rok produkcji",
      id: "year",
      placeholder: "2022",
      minLength: 4,
      maxLength: 4,
      required: true,
      pattern: /^[0-9]{4}$/,
    },
    {
      label: "Kolor",
      id: "color",
      placeholder: "Czarny",
      minLength: 2,
      maxLength: 20,
      required: true,
    },
    {
      label: "Rodzaj paliwa",
      id: "fuelType",
      placeholder: "Benzyna",
      minLength: 2,
      maxLength: 20,
      required: true,
      pattern: /^[A-Za-z\s]{2,20}$/,
    },
    {
      label: "Pojemność silnika",
      id: "engineCapacity",
      placeholder: "2.0",
      minLength: 1,
      maxLength: 4,
      required: true,
      pattern: /^\d+(\.\d{1,2})?$/,
    },
    {
      label: "Przebieg",
      id: "mileage",
      placeholder: "100000",
      minLength: 1,
      maxLength: 7,
      required: true,
      pattern: /^[0-9]+$/,
    },
    {
      label: "Numer rejestracyjny",
      id: "registrationNumber",
      placeholder: "ABC1234",
      minLength: 6,
      maxLength: 10,
      required: true,
      pattern: /^[A-Z0-9]{6,10}$/,
    },
  ];
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
  } = useForm<IVehicle>();
  const prevParams = `IDs=${searchParams.get("IDs")}`;

  const onSubmit = (data: IVehicle) => {
    const queryParams = Object.entries(data)
      .filter(([key, value]) => value !== "" && value !== undefined)
      .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
      .join("&");
    router.push(`/book/vehicle/aditional?${encodeURIComponent(prevParams)}&${queryParams}`);
  };
  useEffect(() => {
    searchParams.forEach((value: string, key: string) => {
      setValue(key as keyof IVehicle, value);
    });
  }, []);

  return (
    <div className="min-h-screen pt-40 font-body  mx-auto max-w-[80rem] ">
      <p className="text-logo font-semibold text-2xl mb-10">Wprowadź dane pojazdu:</p>
      <div className="relative p-16 border-2 border-solid border-gray-200 shadow-lg min-h-[40rem] mb-20">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            {data.map((input) => (
              <div key={input.id}>
                <label htmlFor={input.id} className="block mb-2 text-sm font-medium text-gray-900">
                  {input.label}
                </label>
                <input
                  type="text"
                  id={input.id}
                  {...register(input.id, {
                    required: input.required && "Pole nie może być puste",
                    minLength: { value: input.minLength, message: "Pole ma za mało znaków" },
                    maxLength: { value: input.maxLength, message: "Pole ma za dużo znaków" },
                    pattern: input.pattern
                      ? {
                          value: input.pattern,
                          message: "Wprowadzono niepoprawne dane",
                        }
                      : undefined,
                  })}
                  className={` ${
                    errors[input.id] ? "border-red-400 border-2" : "border-gray-400"
                  } bg-gray-100 border  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
                  placeholder={input.placeholder}
                />
                <p className="text-red-600">{errors[input.id]?.message}</p>
              </div>
            ))}
          </div>
          <Link
            href={{
              pathname: "/book",
              search: searchParams.toString(),
            }}
          >
            <Button type="button" color="blue">
              Powrót
            </Button>
          </Link>
          <Button type="submit" color="red">
            Przejdź dalej
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Page;
