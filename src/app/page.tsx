import Image from "next/image";
import Button from "./components/Button/Button";

export default function Home() {
  return (
    <div className="min-h-screen w-[35rem]">
      <p className="ml-10 leading-[60px] mt-64 text-gray-200 text-5xl font-extrabold ">
        PARTNER TWOJEGO<br></br> SAMOCHODU
      </p>
      <p className="ml-10 text-black font-bold text-xl">Sprawdź dostępność i zarezerwuj termin naprawy online!</p>
      <div className="mt-8 ml-10">
        <Button>Zarezerwuj termin</Button>
      </div>
    </div>
  );
}
