import React from "react";
import { Link } from "react-router-dom";
import fourofour from "../Images/fourofour.gif";

const Errorpage = () => {
  return (
    <div className="h-screen  bg-blue-200 text-white py-20 xl:py-32 px-5 xl:px-10 xl:flex xl:gap-10">
      <div>
        <img src={fourofour} className="rounded"></img>
      </div>

      <div className="py-5 text-center xl:text-start xl:py-0">
        <h2 className="text-3xl xl:text-6xl text-black macksonMusic font-extrabold">
          Page Not Found!
        </h2>

        <h2 className="text-2xl xl:text-5xl  text-black macksonMusic font-extrabold py-5 xl:py-10">
          Alarm Alarm Alarm Call the Firefighters Page cannot be Found
        </h2>

        <h2 className="text-2xl xl:text-5xl  text-blue-800 underline macksonMusic font-extrabold py-5 xl:py-10">
          <Link to="/" className="">
            Click to go to Home
          </Link>
        </h2>
      </div>
    </div>
  );
};

export default Errorpage;
