import Button from "./components/Button/Button";
import BackgroundMain from "./components/BackgroundMain";
import About from "./components/About";
import Services from "./components/Services";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="h-screen min-h-[900px] w-[35rem] max-w-[80%]">
        <p className="ml-4 md:ml-10 leading-[60px] pt-64 text-gray-200 md:text-5xl text-4xl font-extrabold ">
          PARTNER TWOJEGO<br></br> SAMOCHODU
        </p>
        <p className="ml-4 md:ml-10 text-black font-bold md:text-xl text-base">
          Sprawdź dostępność i zarezerwuj termin naprawy online!
        </p>
        <div className="mt-8 ml-10">
          <Link href="/book">
            <Button>Zarezerwuj termin</Button>
          </Link>
        </div>
        <BackgroundMain />
      </div>
      <About />
      <Services />
    </>
  );
}
