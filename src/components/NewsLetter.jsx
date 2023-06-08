import React from 'react'

export default function NewsLetter() {
  return (
  <div className="p-4 bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
    <div className="max-w-[1240px] md:flex mx-auto justify-between py-[50px]">
        <div className="m-2  ">
            <h1 className="text-2xl md:text-[40px] font-bold text-white">Want to learn latest IT skills?</h1>
            <span className='text-white'>Sign up to our newsletter and stay up to date.</span>
        </div>
        {/*=======  */}
        <div className=" m-2 ">
            <input type="text" className='w-full md:w-40 p-3 mb-2 mr-2 text-slate-600 rounded' placeholder='Email '/>
            {/* <input type="text" className='md:hidden w-full p-3 mb-2 mr-2 text-slate-600 rounded' placeholder='Email '/> */}
            <button className="bg-black text-white p-3 rounded mt-3 md:mx-0 mx-28">Get Started</button>
            <br />
            <p className="text-white py-2 p-1">
                We care about the protection of your data. <br /> Read our 
                <a href="" className='no-underline text-black'> privacy policy</a>
            </p>
        </div>

    </div>

  </div>
  )
}
