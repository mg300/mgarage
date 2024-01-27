"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import Button from "@/app/components/Button/Button";
import Spinner from "@/app/components/Spinner/Spinner";
import SpinnerSmall from "@/app/components/Spinner/SpinnerSmall";

interface IcarData {
  client: string;
  email: string;
  phone: string;
  date: string;
  quality: string;
  mark: string;
  model: string;
  vin: string;
  productionYear: string;
  color: string;
  fuelType: string;
  engineCapacity: string;
  mileage: string;
  registrationNumber: string;
  serviceIDs: string;
}
interface IService {
  id: number;
  name: string;
  price: number;
  time: string;
  description: string;
  bulletDescription: string;
}
function Page() {
  const [data, setData] = useState<IService[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const searchParams = useSearchParams();
  const [carData, setCarData] = useState<IcarData>();
  useEffect(() => {
    setCarData({
      quality: searchParams.get("serviceQuality") || "",
      client: searchParams.get("name") || "",
      phone: searchParams.get("phone") || "",
      mark: searchParams.get("mark") || "",
      model: searchParams.get("model") || "",
      vin: searchParams.get("vin") || "",
      productionYear: searchParams.get("year") || "",
      color: searchParams.get("color") || "",
      fuelType: searchParams.get("fuelType") || "",
      engineCapacity: searchParams.get("engineCapacity") || "",
      mileage: searchParams.get("mileage") || "",
      registrationNumber: searchParams.get("registrationNumber") || "",
      serviceIDs: searchParams.get("IDs") || "",
      date: searchParams.get("date") || "",
      email: searchParams.get("email") || "",
    });
    const fetchData = async (ids: string | null) => {
      if (ids === null) return;

      try {
        const response = await fetch(`/api/services/${ids}`);

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to fetch data");
        setLoading(false);
      }
    };

    fetchData(searchParams.get("IDs"));
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
  async function onSumbit() {
    await fetch(`/api/services`, {
      method: "POST",
      body: JSON.stringify(carData),
    });
  }
  return (
    <div className="min-h-screen pt-40 font-body  mx-auto max-w-[80rem] ">
      <p className="text-logo font-semibold text-2xl mb-10">Podsumowanie:</p>
      <div className=" relative p-16 border-2 border-solid border-gray-200 shadow-lg min-h-[40rem] mb-20">
        <table className="table-auto">
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-2 px-4 font-bold">Imię i nazwisko:</td>
              <td className="py-2 px-4">{carData?.client}</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 px-4 font-bold">Numer telefonu:</td>
              <td className="py-2 px-4">{carData?.phone}</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 px-4 font-bold">Email:</td>
              <td className="py-2 px-4">{carData.email}</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 px-4 font-bold">Data:</td>
              <td className="py-2 px-4">{new Date(carData.date).toLocaleString()}</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 px-4 font-bold">Jakość użytych części:</td>
              <td className="py-2 px-4">{getPolishQualityName(carData.quality)}</td>
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
              <td className="py-2 px-4">{carData?.productionYear}</td>
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
              <td className="py-2 px-4 font-bold">Nazwa usług:</td>
              <td className="py-2 px-4">
                {loading ? (
                  <SpinnerSmall></SpinnerSmall>
                ) : (
                  <span>
                    {" "}
                    {data.map((service, index) => (
                      <p key={index}>{service.name}</p>
                    ))}
                  </span>
                )}
              </td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 px-4 font-bold">Kwota orientacyjna:</td>
              <td className="py-2 px-4">
                {loading ? (
                  <SpinnerSmall></SpinnerSmall>
                ) : (
                  <span>{data.reduce((total, service) => total + service.price, 0)}</span>
                )}
              </td>
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
            <Button type="submit" color="red" onClick={onSumbit}>
              Zarezerwuj wizytę
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Page;
