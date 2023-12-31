import React from "react";
import Image from "next/image";
function About() {
  return (
    <div className="flex flex-col items-center bg-[#373737]">
      <div className="text-gray-200 lg:text-5xl text-5xl font-extrabold my-10">O NAS</div>
      <div className="flex flex-col lg:flex-row items-center lg:mx-10 gap-[100px]">
        <div className="w-[90%] lg:w-[70%] text-justify flex:1 text-gray-200 font-medium lg:leading-8 xl:leading-10">
          Naszą misją jest dostarczanie usług najwyższej jakości dla naszych klientów, zarówno indywidualnych, jak i
          firm. Nasz doświadczony zespół śledzi najnowsze trendy w motoryzacji i stawia na transparentność oraz dbałość
          o szczegóły. Dla nas motoryzacja to nie tylko praca, to nasza pasja i styl życia. Nie tylko naprawiamy
          usterki, ale również oferujemy regularne przeglądy i konserwację, które pomagają utrzymać Twój samochód w
          doskonałej kondycji. Nasze zaangażowanie w środowisko skłania nas także do stosowania ekologicznych rozwiązań,
          gdy to możliwe.
        </div>
        <div className="mb-10 lg:mb-0 mx-5 lg:mx-0 lg:w-[70%] max-w-[900px]">
          <Image
            className="lg:min-w-[500px] my-0 lg:my-10"
            alt="car"
            src="/about_car.png"
            width={900}
            height={900}
            loading="lazy"
          ></Image>
        </div>
      </div>
    </div>
  );
}

export default About;
