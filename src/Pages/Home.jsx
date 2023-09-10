import React from "react";
import {Link} from "react-router-dom";
import About from "../Components/About";
import Slider from "../Components/Slider";

const Home = () => {
  return (
    <>
      <div className="py-20  px-5 xl:px-10 homebg">
        <div className=" relative top-32 xl:relative xl:top-36 2xl:top-44">
          <h2 className="text-3xl text-white xl:text-5xl 2xl:w-2/4  2xl:text-6xl xl:tracking-wide">
            Welcome to <span className="macksonMusic">Mackson Music</span>
          </h2>
          <h2 className="my-2 text-3xl text-white xl:text-5xl 2xl:w-2/4 2xl:text-6xl xl:tracking-wide"> Discover Your Groove</h2>
          <p className="font-bold  mt-3 xl:font-bold xl:text-xl text-white macksonMusic tracking-widest">Explore the latest tracks and create your perfect experience with our music player.</p>

          <div className=" bg-white mt-5 w-[60%] text-sm  px-4 py-3 rounded text-center xl:w-[20%] xl:mt-10 xl:text-lg font-semibold">
            <Link className="hover:text-black no-underline text-black" to="/search">
              Quick Music Search
            </Link>
          </div>
        </div>
      </div>
      <About />
      <Slider />
    </>
  );
};

export default Home;
