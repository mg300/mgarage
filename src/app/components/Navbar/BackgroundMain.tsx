import React from "react";

function BackgroundMain() {
  return (
    <div
      className="absolute w-screen -z-10 top-0 h-screen bg-cover"
      style={{ backgroundImage: `url('/background.png')` }}
    ></div>
  );
}

export default BackgroundMain;
