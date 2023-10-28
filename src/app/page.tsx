import Image from "next/image";
import Button from "./components/Button/Button";
import BackgroundMain from "./components/BackgroundMain";

export default function Home() {
  return (
    <div className="h-screen min-h-[900px] w-[35rem]">
      <p className="ml-10 leading-[60px] pt-64 text-gray-200 md:text-5xl text-4xl font-extrabold ">
        PARTNER TWOJEGO<br></br> SAMOCHODU
      </p>
      <p className="ml-10 text-black font-bold md:text-xl text-base">
        Sprawdź dostępność i zarezerwuj termin naprawy online!
      </p>
      <div className="mt-8 ml-10">
        <Button>Zarezerwuj termin</Button>
      </div>
      <BackgroundMain />
    </div>
  );
}
