import React from "react";
import Image from "next/image";
import { FiTool } from "react-icons/fi";
function Services() {
  return (
    <div className="font-body flex flex-col items-center bg-[rgb(37,37,37)]">
      <div className="text-gray-200 lg:text-5xl text-5xl font-extrabold my-10">Nasze usługi</div>
      <div className="flex flex-col lg:flex-row px-5 items-center lg:mb-10 gap-[30px]">
        <div className="w-[90%] lg:w-[50%] max-w-[700px]">
          <Image className="rounded-[35px]" src="/img1.jpg" width={1000} height={1000} alt="engine" />
        </div>
        <div className="lg:min-w-[590px] px-5 lg:px-0 mb-10 lg:mb-0 text-justify flex:1 text-gray-200 font-medium lg:leading-8 xl:leading-10 text-xs">
          <ul className="leading-8 text-base lg:text-lg inline-block">
            <li>
              <span className="text-3xl inline-block mr-5">
                <FiTool />
              </span>
              <span className="font-bold">Naprawy eksploatacyjne:</span> hamulce, olej, komplet filtrów
            </li>
            <br></br>
            <li>
              <span className="text-3xl inline-block mr-5">
                <FiTool />
              </span>
              <span className="font-bold">Pielęgnacja:</span> czyszczenie wnętrza, odkurzanie, konserwacja{" "}
            </li>
            <br></br>
            <li>
              <span className="text-3xl inline-block mr-5">
                <FiTool />
              </span>
              <span className="font-bold">Naprawy mechaniczne:</span> rozrządy, turbosprężarki, alternatory
            </li>
            <br></br>
            <li>
              <span className="text-3xl inline-block mr-5">
                <FiTool />
              </span>
              <span className="font-bold">Naprawy zawieszenia:</span> tuleje, wahacze, amoryzatory, sprężyny
            </li>
            <br></br>
            <li>
              <span className="text-3xl inline-block mr-5">
                <FiTool />
              </span>
              <span className="font-bold">Naprawy elektryczne:</span> przerwane przewody, problemy elektryczne
            </li>
            <br></br>
            <li>
              <span className="text-3xl inline-block mr-5">
                <FiTool />
              </span>
              <span className="font-bold">Diagnostyka:</span> zawieszenia, silnika, hamulców, układu ABS
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Services;
