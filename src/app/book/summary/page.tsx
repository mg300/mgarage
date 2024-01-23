"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import Button from "@/app/components/Button/Button";

interface IcarData {
  serviceQuality: string;
  name: string;
  phone: string;
  mark: string;
  model: string;
  vin: string;
  year: string;
  color: string;
  fuelType: string;
  engineCapacity: string;
  mileage: string;
  registrationNumber: string;
  IDs: string;
  date: string;
}
function Page() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [carData, setCarData] = useState<IcarData>();
  useEffect(() => {
    setCarData({
      serviceQuality: searchParams.get("serviceQuality") || "",
      name: searchParams.get("name") || "",
      phone: searchParams.get("phone") || "",
      mark: searchParams.get("mark") || "",
      model: searchParams.get("model") || "",
      vin: searchParams.get("vin") || "",
      year: searchParams.get("year") || "",
      color: searchParams.get("color") || "",
      fuelType: searchParams.get("fuelType") || "",
      engineCapacity: searchParams.get("engineCapacity") || "",
      mileage: searchParams.get("mileage") || "",
      registrationNumber: searchParams.get("registrationNumber") || "",
      IDs: searchParams.get("IDs") || "",
      date: searchParams.get("date") || "",
    });
  }, []);
  const getPolishQualityName = (quality: string) => {
    switch (quality) {
      case "quality-low":
        return "Niska";
      case "quality-medium":
        return "Średnia";
      case "quality-high":
        return "Wysoka";
      case "quality-oem":
        return "OEM";
      default:
        return "Nieznany poziom jakości";
    }
  };
  if (carData === undefined) return;
  return (
    <div className="min-h-screen pt-40 font-body  mx-auto max-w-[80rem] ">
      <p className="text-logo font-semibold text-2xl mb-10">Podsumowanie:</p>
      <div className=" relative p-16 border-2 border-solid border-gray-200 shadow-lg min-h-[40rem] mb-20">
        <table className="table-auto">
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-2 px-4 font-bold">Jakość użytych części:</td>
              <td className="py-2 px-4">{getPolishQualityName(carData.serviceQuality)}</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 px-4 font-bold">Imię i nazwisko:</td>
              <td className="py-2 px-4">{carData?.name}</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 px-4 font-bold">Numer telefonu:</td>
              <td className="py-2 px-4">{carData?.phone}</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 px-4 font-bold">Marka:</td>
              <td className="py-2 px-4">{carData?.mark}</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 px-4 font-bold">Model:</td>
              <td className="py-2 px-4">{carData?.model}</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 px-4 font-bold">VIN:</td>
              <td className="py-2 px-4">{carData?.vin}</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 px-4 font-bold">Rok produkcji:</td>
              <td className="py-2 px-4">{carData?.year}</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 px-4 font-bold">Kolor:</td>
              <td className="py-2 px-4">{carData?.color}</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 px-4 font-bold">Typ paliwa:</td>
              <td className="py-2 px-4">{carData?.fuelType}</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 px-4 font-bold">Pojemność silnika:</td>
              <td className="py-2 px-4">{carData?.engineCapacity}</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 px-4 font-bold">Przebieg:</td>
              <td className="py-2 px-4">{carData?.mileage}</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 px-4 font-bold">Numer rejestracyjny:</td>
              <td className="py-2 px-4">{carData?.registrationNumber}</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 px-4 font-bold">ID usługi:</td>
              <td className="py-2 px-4">{carData?.IDs}</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 px-4 font-bold">Data:</td>
              <td className="py-2 px-4">{new Date(carData.date).toLocaleString()}</td>
            </tr>
          </tbody>
        </table>

        <div className="mt-20">
          <Link
            href={{
              pathname: "/book/aditional",
              search: searchParams.toString(),
            }}
          >
            <Button type="button" color="blue">
              Powrót
            </Button>
          </Link>
          <Link href="/book/info">
            <Button type="submit" color="red">
              Zarezerwuj wizytę
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Page;
