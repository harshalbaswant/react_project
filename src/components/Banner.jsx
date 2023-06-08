import React from "react";
import Typed from 'react-typed';
export default function Banner() {
  return (
    <div className="bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-sky-400 to-blue-800 py-[100px] w-full">
      <div className="max-w-[1240px] my-[100px] mx-auto text-center font-bold">
        <div className="md:text-3xl text-xl mt-4 md:p-[24px]">
            Learn with us
        </div>
        <h2 className="text-white text-[44px]  md:text-[80px] mt-4 ">Grow With us.</h2>
        <div className="md:text-[50px] text-[20px] text-white mt-4">
            Learn 
            <Typed className="pl-3"
                    strings={['Web development','Digital Marketing','Ethical Hacking']}
                    typeSpeed={100}
                    loop={true}
                    backSpeed={120}
                />
        </div>
        <button className="bg-black text-white p-3 rounded mt-3 ">Get Started</button>
      </div>
    </div>
  );
}
