import React from "react";
import app_img_1 from "../assets/img/app dev.png";
import digital_img from "../assets/img/digital_marketing_icon.png";
import webdev_img from "../assets/img/web_development_icon.png";

export default function Plans() {
  return (
    <>
    <div className="py-5 text-center text-violet-950">
    <h1 className="text-4xl font-bold "> Our Pricing & Plans</h1> 
    </div>
    <div className="py-[30px] px-3">

      <div className="max-w-[1240px] md:mx-auto  md:grid grid-cols-3 gap-10 ">
        <div className="shadow-xl  my-4  h-[500px] hover:scale-105 duration-500 bg-sky-100 rounded-xl">
          <div className="w-48  mx-auto py-4">
            <img src={webdev_img} alt="" />
          </div>
          <h1 className="text-4xl font-bold text-center text-purple-500">
            Web Development 
          </h1>
          <div className="">
            <h1 className="text-4xl font-bold text-center my-5">$400/year</h1>
          </div>

          <div className=" text-center font-semibold text-xl text-purple-700">
            <ul className="">
              <li className="mt-2">Online Lectures</li>
              <li className="mt-2">Free Notes</li>
              <li className="mt-2">Doubt Session</li>
              <li className="mt-2">Free Domain and hosting</li>
            </ul>
          </div>
          <div className="mt-6 text-center">
          <button className="bg-purple-500 text-white p-3 rounded  ">Start Trial</button>
          </div>
        </div>

        <div className="shadow-xl my-4 bg-gray-300 h-[500px] hover:scale-105 duration-500 rounded-xl">
          <div className="w-48  mx-auto py-4">
            <img src={digital_img} alt="" />
          </div>
          <h1 className="text-4xl font-bold text-center text-purple-500">
            {" "}
            Digital Marketing
          </h1>
          <div className="">
            <h1 className="text-4xl font-bold text-center my-5">$400/year</h1>
          </div>

          <div className=" text-center font-semibold text-xl text-purple-700">
            <ul className="">
              <li className="mt-2">Online Lectures</li>
              <li className="mt-2">Free Notes</li>
              <li className="mt-2">Doubt Session</li>
              <li className="mt-2">Free Domain and hosting</li>
            </ul>
          </div>
          <div className="mt-6 text-center">
          <button className="bg-purple-500 text-white p-3 rounded  ">Start Trial</button>
          </div>
        </div>

        <div className="shadow-xl  my-4  h-[500px] hover:scale-105 duration-500 bg-sky-100 rounded-xl">
          <div className="w-20  mx-auto py-4 ">
            <img src={app_img_1} alt="" />
          </div>
          <h1 className="text-4xl font-bold text-center text-purple-500">
            App Development
          </h1>
          <div className="">
            <h1 className="text-4xl font-bold text-center my-5">$400/year</h1>
          </div>

          <div className=" text-center font-semibold text-xl text-purple-700">
            <ul className="">
              <li className="mt-2">Online Lectures</li>
              <li className="mt-2">Free Notes</li>
              <li className="mt-2">Doubt Session</li>
              <li className="mt-2">Free Domain and hosting</li>
            </ul>
          </div>
          <div className="mt-6 text-center">
          <button className="bg-purple-500 text-white p-3 rounded  ">Start Trial</button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
