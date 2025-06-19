import React from "react";
import logo1 from "./assets/banner_msn.png";
import { MapPin } from "lucide-react";

const StudyAbroadForm = () => {
  return (
    <div className="w-full relative">
      {/* MOBILE VIEW IMAGE */}
      <div className="md:hidden w-full h-[300px] bg-no-repeat bg-center bg-contain" style={{ backgroundImage: `url(${logo1})` }}></div>

      {/* MOBILE VIEW CONTENT */}
      <div className="relative md:hidden w-full max-w-6xl mx-auto px-2 flex flex-col items-center justify-between space-y-6 z-10">
        <div className="p-4 text-white max-w-md text-start border bg-black bg-opacity-80 rounded-xl">
          <h1 className="text-2xl font-bold leading-snug">
            ONE by MSN <br />
            <span
              className="inline-flex text-left text-sm text-white px-3 py-1 rounded">
              <MapPin className="w-4 h-4 mr-2" />
              Neopolis, Hyderabad
            </span>

            <hr className="my-2" />
          </h1>

          <ul className="mt-4 space-y-2 text-md">
            {[
              "Land Area : 7.7 Acres",
              "No.Of Towers : 05",
              "No.Of Floors : 55",
              "No.Of Units : 655",
              "Estimated Completion : DEC 2028",              
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-xl mr-2" style={{ color: '#ffffff' }}>✔</span>
                {item}
              </li>
            ))}
          </ul>

          <hr className="my-4" />

          <div className="mt-4 flex justify-center">
            <div className="text-green-600 px-4 py-2 shadow-sm text-sm font-semibold">
              <a
              href="tel:+919392925831"
              className="blinking-button text-white px-8 py-3 rounded-full flex items-center gap-3 shadow-md transition-all duration-300"
              style={{
                backgroundColor: '#cb8904'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#4f1021cc')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#4f1021cc')}
            >
              Starting Price: ₹5.83 Cr* Onwards
            </a>

            </div>
          </div>
        </div>
      </div>

      {/* DESKTOP VIEW */}
      <div
        className="hidden md:flex w-full min-h-screen bg-cover bg-center bg-no-repeat items-center justify-start relative"
        style={{ backgroundImage: `url(${logo1})` }}
      >
        {/* Desktop Content */}
        <div className="relative z-10 bg-black bg-opacity-90 text-white p-10 rounded-lg max-w-md shadow-xl ml-0 mt-10">
          <h1 className="text-4xl font-bold leading-snug">
            ONE by MSN <br />
            <span
              className="inline-flex items-center text-sm text-white px-3 py-1 rounded">
              <MapPin className="w-4 h-4 mr-2" />
              Neopolis, Hyderabad
            </span>
            <hr className="my-1 border-gray-600" />
          </h1>

          <ul className="mt-2 space-y-3 text-lg">
            {[
              "Land Area : 7.7 Acres",
              "No.Of Towers : 05",
              "No.Of Floors : 55",
              "No.Of Units : 655",
              "Estimated Completion : DEC 2028",
            ].map((item, index) => (
              <li key={index} className="flex items-center">
                <span className="text-2xl mr-2" style={{ color: '#ffffff' }}>✔</span>
                {item}
              </li>
            ))}
          </ul>

          <hr className="my-4 border-gray-600" />

          <div className="mt-4">
            <div className="text-green-800 px-4 py-2 inline-block font-semibold text-sm">
              <a
              href="tel:+919392925831"
              className="blinking-button text-white px-8 py-3 rounded-full flex items-center gap-3 shadow-md transition-all duration-300"
              style={{
                backgroundColor: '#cb8904'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#cb8904')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#cb8904')}
            >
              Starting Price: ₹6.20 Cr* Onwards
            </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyAbroadForm;
