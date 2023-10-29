import React from "react";
import Logo from "../Logo";
import Image from "next/image";

function Footer() {
  return (
    <div className="bg-black h-max lg:h-96 w-full px-5 md:px-20 pt-10 justify-between items-start flex flex-wrap flex-col lg:flex-row">
      <div className="self-center lg:self-start text-center lg:text-left mb-10 lg:mb-0">
        <Image alt="abc" src="/white.png" width={230} height={230} />
      </div>
      <div className="self-center lg:self-start mb-10 lg:mb-0 text-center lg:text-left text-white font-body flex-col">
        <p className="text-3xl font-bold leading-[68px]">Lokalizacja</p>
        <p className="text-xl leading-8 text-gray-400">
          Warsztatowa 123<br></br>
          12-345 Warszawa<br></br> +48 123 456 789<br></br>mateuszjacekgajda@gmail.com
        </p>
      </div>
      <div className="self-center lg:self-start mb-10 lg:mb-0 text-center lg:text-left text-white font-body flex-col">
        <p className="text-3xl font-bold leading-[68px]">Godziny otwarcia</p>
        <p className="text-xl leading-8 text-gray-400">
          Poniedziałek-Piątek: 8:00 - 18:00<br></br>Sobota: 9:00 - 14:00<br></br>Niedziela: Zamknięte<br></br>
        </p>
      </div>{" "}
      <div className="self-center lg:self-start mb-10 lg:mb-0 text-center lg:text-left text-white font-body flex-col">
        <p className="text-3xl font-bold leading-[68px] hover:font-bold">Sprawdź</p>
        <a className="text-xl leading-8 text-gray-400 hover:text-logo" href="https://facebook.com">
          Facebook
        </a>
        <br></br>
        <a className="text-xl leading-8 text-gray-400 hover:text-logo" href="https://facebook.com">
          Instagram
        </a>
      </div>
      <div className="lg:basis-full basis-0"></div>
      <div className="text-white text-xs mb-5"> Copyright © 2023 Mateusz Gajda. All Rights Reserved</div>
    </div>
  );
}

export default Footer;
