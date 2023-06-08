import React from "react";
import html_image from "../assets/img/html_img1.png";
export default function Experts() {
  return (
    <div className="max-w-[1240px] mx-auto my-10    md:grid grid-cols-2 p-3">
      <div className="   col-span-1 md:w-[90%] text-center p-5">
        <img src={html_image} alt="" srcset=""className="inline" />
      </div>
      <div className="  col-span-1 flex flex-col  justify-center">
        <h1 className="text-[#00df9a] font-bold my-2"> LEARN FROM EXPERT</h1>
        <p className="my-2 text-justify">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur
          sunt maxime ea, consequuntur aliquid praesentium, minus, nihil
          incidunt excepturi magni iusto vero. Aperiam earum quidem corporis
          illum porro sequi. Sapiente? Architecto, earum! Sint velit laboriosam
          asperiores tempore cum blanditiis laborum.
        </p>
        <button className="w-[30%] bg-black text-white p-3 rounded inline ">Get Started</button>
      </div>
    </div>
  );
}
