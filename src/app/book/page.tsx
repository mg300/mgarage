"use client";
import React, { useEffect, useRef, useState } from "react";
import Button from "../components/Button/Button";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
interface IData {
  serviceIDs: string[];
}
interface IService {
  id: string;
  title: string;
  time: string;
  price: number;
  description: JSX.Element;
}
function Page() {
  const [indexOfDescr, setIndexOfDescr] = useState<number | null>(null);
  const router = useRouter();
  const [info, setInfo] = useState(false);
  const searchParams = useSearchParams();
  const result = useRef("");
  useEffect(() => {
    const startIndex = searchParams.toString().indexOf("IDs=");
    console.log(searchParams.toString());
    const endIndex = searchParams.toString().indexOf("&", startIndex) + 1;
    console.log(result.current);
    console.log(startIndex, endIndex);
    if (startIndex !== -1 && endIndex !== -1) {
      result.current = searchParams.toString().substring(0, startIndex) + searchParams.toString().substring(endIndex);
    }
  }, []);

  const data: IService[] = [
    {
      id: "1",
      title: "Wymiana oleju silnikowego",
      time: "1h",
      price: 500,
      description: (
        <div className="sticky top-10">
          <p className="text-logo font-semibold text-2xl mb-10">Wymiana oleju silnikowego</p>
          <div>
            <div className="bg-gray-200 rounded-3xl px-4 pt-2 pb-2.5">
              <div className="leading-snug md:leading-normal p-4">
                Nasza usługa wymiany oleju silnikowego to kluczowy krok w dbaniu o zdrowie i wydajność Twojego pojazdu.
                Gwarantujemy profesjonalną obsługę i wysokiej jakości oleje, które utrzymają Twój silnik w doskonałej
                kondycji.
              </div>
            </div>
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
        </div>
      ),
    },
    {
      id: "2",
      title: "Wymiana filtru powietrza",
      time: "0.5h",
      price: 150,
      description: (
        <div className="sticky top-10">
          <p className="text-logo font-semibold text-2xl mb-10">Wymiana filtru powietrza</p>
          <div>
            <div className="bg-gray-200 rounded-3xl px-4 pt-2 pb-2.5">
              <div className="leading-snug md:leading-normal p-4">
                Wymiana filtra powietrza to ważny element utrzymania sprawności silnika. Oferujemy usługę profesjonalnej
                wymiany filtra powietrza, co pozytywnie wpłynie na osiągi i efektywność Twojego pojazdu.
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "3",
      title: "Wymiana płynu chłodniczego",
      time: "1.5h",
      price: 300,
      description: (
        <div className="sticky top-10">
          <p className="text-logo font-semibold text-2xl mb-10">Wymiana płynu chłodniczego</p>
          <div>
            <div className="bg-gray-200 rounded-3xl px-4 pt-2 pb-2.5">
              <div className="leading-snug md:leading-normal p-4">
                Regularne sprawdzanie i wymiana płynu chłodniczego to kluczowe dla utrzymania odpowiedniej temperatury
                silnika. Gwarantujemy kompleksową obsługę i wysokiej jakości płyny chłodzące.
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "4",
      title: "Wymiana płynu hamulcowego",
      time: "1h",
      price: 250,
      description: (
        <div className="sticky top-10">
          <p className="text-logo font-semibold text-2xl mb-10">Wymiana płynu hamulcowego</p>
          <div>
            <div className="bg-gray-200 rounded-3xl px-4 pt-2 pb-2.5">
              <div className="leading-snug md:leading-normal p-4">
                Bezpieczeństwo jest priorytetem. Oferujemy profesjonalną wymianę płynu hamulcowego, co zapewni
                skuteczność hamulców i bezpieczeństwo podczas jazdy.
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "5",
      title: "Diagnostyka komputerowa",
      time: "0.5h",
      price: 100,
      description: (
        <div className="sticky top-10">
          <p className="text-logo font-semibold text-2xl mb-10">Diagnostyka komputerowa</p>
          <div>
            <div className="bg-gray-200 rounded-3xl px-4 pt-2 pb-2.5">
              <div className="leading-snug md:leading-normal p-4">
                Skomplikowane problemy wymagają precyzyjnych narzędzi. Oferujemy diagnostykę komputerową, która pomoże
                zidenyfikować i rozwiązać problemy z układem elektronicznym pojazdu.
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "6",
      title: "Wymiana rozrządu",
      time: "2h",
      price: 1000,
      description: (
        <div className="sticky top-10">
          <p className="text-logo font-semibold text-2xl mb-10">Wymiana rozrządu</p>
          <div>
            <div className="bg-gray-200 rounded-3xl px-4 pt-2 pb-2.5">
              <div className="leading-snug md:leading-normal p-4">
                Wymiana rozrządu to kluczowy element konserwacji silnika. Oferujemy usługę profesjonalnej wymiany
                rozrządu, co pozwoli uniknąć poważnych awarii.
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "7",
      title: "Naprawa układu wydechowego",
      time: "1.5h",
      price: 350,
      description: (
        <div className="sticky top-10">
          <p className="text-logo font-semibold text-2xl mb-10">Naprawa układu wydechowego</p>
          <div>
            <div className="bg-gray-200 rounded-3xl px-4 pt-2 pb-2.5">
              <div className="leading-snug md:leading-normal p-4">
                Usługa obejmuje diagnostykę i naprawę układu wydechowego. Działa ona nie tylko na efektywność silnika,
                ale także na emisję spalin i ogólną wydajność pojazdu.
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "8",
      title: "Wymiana amortyzatorów",
      time: "2h",
      price: 450,
      description: (
        <div className="sticky top-10">
          <p className="text-logo font-semibold text-2xl mb-10">Wymiana amortyzatorów</p>
          <div>
            <div className="bg-gray-200 rounded-3xl px-4 pt-2 pb-2.5">
              <div className="leading-snug md:leading-normal p-4">
                Nowe amortyzatory poprawią komfort jazdy, stabilność pojazdu i bezpieczeństwo. Oferujemy profesjonalną
                wymianę z zachowaniem standardów producenta.
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "9",
      title: "Wymiana świec zapłonowych",
      time: "1h",
      price: 120,
      description: (
        <div className="sticky top-10">
          <p className="text-logo font-semibold text-2xl mb-10">Wymiana świec zapłonowych</p>
          <div>
            <div className="bg-gray-200 rounded-3xl px-4 pt-2 pb-2.5">
              <div className="leading-snug md:leading-normal p-4">
                Regularna wymiana świec zapłonowych poprawi zapłon, efektywność silnika i zużycie paliwa. To prosta, ale
                ważna czynność konserwacyjna.
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "11",
      title: "Wymiana tarcz i klocków hamulcowych",
      time: "1.5h",
      price: 400,
      description: (
        <div className="sticky top-10">
          <p className="text-logo font-semibold text-2xl mb-10">Wymiana tarcz i klocków hamulcowych</p>
          <div>
            <div className="bg-gray-200 rounded-3xl px-4 pt-2 pb-2.5">
              <div className="leading-snug md:leading-normal p-4">
                Skuteczne hamulce to kluczowy element bezpieczeństwa. Oferujemy profesjonalną wymianę tarcz i klocków
                hamulcowych, dbając o skuteczność hamowania.
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "12",
      title: "Wymiana sprężyny zawieszenia",
      time: "2h",
      price: 350,
      description: (
        <div className="sticky top-10">
          <p className="text-logo font-semibold text-2xl mb-10">Wymiana sprężyny zawieszenia</p>
          <div>
            <div className="bg-gray-200 rounded-3xl px-4 pt-2 pb-2.5">
              <div className="leading-snug md:leading-normal p-4">
                Sprężyny zawieszenia wpływają na komfort jazdy i stabilność pojazdu. Oferujemy profesjonalną wymianę
                sprężyn, dbając o odpowiednie właściwości zawieszenia.
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "13",
      title: "Wymiana łożysk kół",
      time: "1.5h",
      price: 300,
      description: (
        <div className="sticky top-10">
          <p className="text-logo font-semibold text-2xl mb-10">Wymiana łożysk kół</p>
          <div>
            <div className="bg-gray-200 rounded-3xl px-4 pt-2 pb-2.5">
              <div className="leading-snug md:leading-normal p-4">
                Uszkodzone łożyska kół mogą prowadzić do różnych problemów. Oferujemy profesjonalną wymianę łożysk,
                zapewniając płynność jazdy i bezpieczeństwo.
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];
  const selectedServices = searchParams.get("IDs");
  let IDs: string[] = selectedServices ? selectedServices.split(",") : [];

  const handleCheck = function (id: string) {
    setInfo(false);
    if (IDs.includes(id)) {
      IDs = IDs.filter((item) => item !== id);
      setIndexOfDescr(null);
    } else {
      IDs.push(id);
      const index = data.findIndex((service) => service.id === id);
      console.log(index);

      setIndexOfDescr(index);
    }
    console.log(result.current);

    router.replace(`?IDs=${encodeURIComponent(IDs.join(","))}${result.current ? "&" + result.current : ""}`, {
      scroll: false,
    });
  };
  return (
    <div className="min-h-screen pt-40 font-body  mx-auto max-w-[80rem] ">
      <p className="text-logo font-semibold text-2xl mb-10">Dostępne usługi:</p>
      <div className=" relative p-16 border-2 border-solid border-gray-200 shadow-lg min-h-[40rem] mb-20">
        <div className="flex flex-col lg:flex-row gap-36 mb-20">
          <form>
            <ul className="flex flex-col gap-5">
              {data.map((service) => (
                <li key={service.id}>
                  <input
                    checked={IDs.includes(service.id)}
                    type="checkbox"
                    onChange={() => handleCheck(service.id)}
                    id={service.id.toString()}
                    value=""
                    className="hidden peer"
                  />
                  <label
                    htmlFor={service.id.toString()}
                    className={`flex justify-between gap-10 items-center lg:w-[30rem] h-[6rem] px-10 border-2 border-solid  
                    peer-checked:border-red-400 peer-checked:text-red-800 text-gray-600 rounded-[2rem] cursor-pointer `}
                  >
                    <p className="text-sm lg:text-lg">{service.title}</p>
                    <div className="min-w-[7rem] text-right">
                      <p className="text-sm lg:text-lg">od {service.price.toFixed(2)} zł</p>
                      <p className="text-sm">{service.time}</p>
                    </div>
                  </label>
                </li>
              ))}
            </ul>
          </form>
          <div className="sticky top-10">
            {indexOfDescr !== null && indexOfDescr >= 0 && data[indexOfDescr]?.description}
          </div>
        </div>
        {info && <p className="text-red-700 text-lg mb-10">Nie zaznaczono żadnej pozycji</p>}

        <Button
          onClick={() => {
            if (IDs.length === 0) setInfo(true);
            if (IDs.length > 0) {
              router.push(
                `/book/vehicle?IDs=${encodeURIComponent(IDs.join(","))}${result.current ? "&" + result.current : ""}`
              );
            } else
              router.push(
                `/book?IDs=${encodeURIComponent(IDs.join(","))}${result.current ? "&" + result.current : ""}`,
                { scroll: false }
              );
          }}
          color="red"
        >
          Przejdź dalej
        </Button>
      </div>
    </div>
  );
}

export default Page;
