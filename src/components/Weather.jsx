import React, { useState, useEffect } from "react";
import { IoMdSunny } from "react-icons/io";
import { FaWind } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { MdVisibility } from "react-icons/md";

const Weather = () => {
  const [city, SetCity] = useState("");
  const [weather, setWeather] = useState({});
  console.log(weather)

  const API_KEY = import.meta.env.VITE_API_KEY;
  const API_URL = import.meta.env.VITE_API_URL;
  console.log(API_KEY)

  //! function to fetch data from api
  const fetchData = async () => {
    const response = await fetch(
      `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
    );
    const data = await response.json();
    console.log(data)
    setWeather(data);
  };

  const handleInputChange = (e) => {
    SetCity(e.target.value);
  };


  //! function to handle the submit
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };

  return (
    <div className="bg-white-500 w-full h-screen border-2 border-blue-400 rounded-lg">
      <form
        action=""
        className="flex justify-center items-center mt-6 gap-2 px-10 "
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          value={city}
          placeholder="Enter City Name"
          className="p-3 rounded-lg outline-1 border border-blue-400 "
          onChange={handleInputChange}
        />
        <button className="bg-blue-400 p-3 rounded-lg" type="submit">
          Search
        </button>
      </form>

      <div className="mt-6">
        <h1 className="text-4xl font-bold text-primary">{weather?.name}</h1>

        <p className="text-black-500 mt-5 bg-blue-400 p-2 rounded-xl inline-block">
         {new Date().toLocaleDateString()}
        </p>

        <div className="flex justify-center  items-center  mt-5">
          <span className="text-3xl w-10 h-10">
            <IoMdSunny />
          </span>
          <span className="text-xl font-bold ">{  "Cloudy"}</span>
        </div>

        <div>
          <h1 className="text-[100px] font-bold">{weather?.main?.temp || 20 }°C</h1>
        </div>

        <div className="flex justify-center items-center gap-5">
          <div className="p-2 bg-blue-400 rounded-xl items-center text-center h-[112px] w-[100px] shadow-slate-500">
            <FaWind className="ml-5 h-10 w-10" />
            <p className="text-xl font-bold">{weather?.wind?.speed}km/h</p>
            <p className="text-lg">Wind</p>
          </div>
          <div className="p-2 bg-blue-400 rounded-xl items-center text-center h-[112px] w-[100px]">
            <WiHumidity className="ml-5 h-10 w-10" />
            <p className="text-xl font-bold">{weather?.main?.humidity}%</p>
            <p className="text-lg">Humidity</p>
          </div>
          <div className="p-2 bg-blue-400 rounded-xl items-center text-center h-[112px] w-[100px]">
            <MdVisibility className="ml-5 h-10 w-10" />
            <p className="text-xl font-bold">{weather?.visibility}km</p>
            <p className="text-lg">Visibility</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
