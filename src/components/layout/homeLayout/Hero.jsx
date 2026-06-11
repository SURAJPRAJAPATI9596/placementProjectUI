import React, { useEffect, useState } from "react";
import imgData from "../../../data/heroImg";
import logo from "../../../assets/HeroImg/logo.png";
const Hero = ({ dark, setDark }) => {
  const [currImg, setcurrImg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (imgData.length - 1 === currImg) {
        setcurrImg(0);
      } else {
        setcurrImg(currImg + 1);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [currImg]);
  return (
    <div
      className={`h-[70vh] md:h-[90vh] w-full overflow-hidden flex justify-center items-center ${dark ? "bg-[#342727] text-white" : "bg-white text-black"}`}
    >
      <img
        key={currImg}
        src={imgData[currImg]}
        alt=""
        className="h-[90%] w-[90%] object-cover m-5 bg-blue-400 rounded-4xl animate-slowZoom"
      />
    </div>
  );
};

export default Hero;
