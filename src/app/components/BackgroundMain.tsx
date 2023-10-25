import React from "react";

function BackgroundMain() {
  return (
    <div
      className="absolute w-screen -z-10 top-0 h-screen min-h-[900px] bg-cover"
      style={{ backgroundImage: `url('/background.png')` }}
    >
      <div className="absolute w-screen h-screen bg-gradient-to-r min-h-[900px] from-black to-transparent opacity-50 z-0"></div>
    </div>
  );
}

export default BackgroundMain;
