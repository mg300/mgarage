"use client";
import React from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import Button from "../../components/Button/Button";
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
  } = useForm<IVehicle>();
  return (
    <div className="min-h-screen pt-40 font-body  mx-auto max-w-[80rem] ">
      <p className="text-logo font-semibold text-2xl mb-10">Wprowadź dane pojazdu:</p>
      <div className="relative p-16 border-2 border-solid border-gray-200 shadow-lg min-h-[40rem] mb-20">
        <form onSubmit={handleSubmit((data) => console.log(data))}>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            {data.map((input) => (
              <div key={input.id}>
                <label htmlFor={input.id} className="block mb-2 text-sm font-medium text-gray-90">
                  {input.label}
                </label>
                <input
                  type="text"
                  id={input.id}
                  {...register(input.id, {
                    required: input.required && "This field is required",
                    minLength: input.minLength,
                    maxLength: input.maxLength,
                    pattern: input.pattern
                      ? {
                          value: input.pattern,
                          message: "Invalid pattern",
                        }
                      : undefined,
                  })}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder={input.placeholder}
                />
              </div>
            ))}
          </div>
          <Link href="/book">
            <Button type="button" color="blue">
              Powrót
            </Button>
          </Link>
          <Link href="/book/vehicle/aditional">
            <Button type="submit" color="red">
              Przejdź dalej
            </Button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Page;
