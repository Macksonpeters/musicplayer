import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsMoonStarsFill } from "react-icons/bs";
import { RiSearchLine } from "react-icons/ri";
import { FaPlay } from "react-icons/fa";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useRef } from "react";
import Home from "./Pages/Home";
import "animate.css";

function App() {
  const [picture, setPicture] = useState("");
  const [music, setMusic] = useState("");
  const [songName, setSongName] = useState("");
  const [songs, setSongs] = useState();
  const [trying, setTrying] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [fold, setFold] = useState(true);
  const [songPick, setSongPick] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [flexDirection, setFlexDirection] = useState(false);

  
  const url = `https://shazam-api6.p.rapidapi.com/shazam/search_track/?query=${searchInput}&limit=10`;
  const options = {
    method: "GET",
    headers: {
      "content-type": "application/octet-stream",
      "X-RapidAPI-Key": "",
      "X-RapidAPI-Host": "shazam-api6.p.rapidapi.com",
    },
  };

  const getHandle = () => {
    setFold(false);
    fetch(url, options)
      .then((response) => response.json())
      .then((response) => {
        // console.log(response.result.tracks.hits);
        setSongs(response.result.tracks.hits);
        setIsLoading(false);
      });
  };

  // if (isLoading) {
  //   console.log("is loading");
  // } else {
  //   console.log(songs);
  // }

  const styles = {
    width: "200%",
    objectFit: "cover",
  };

  function handleProductClick([songId, imageid, songurl]) {
    setIsLoading(false);
    setFlexDirection(true);

    console.log(`Clicked on product with id ${songId}, ${imageid}, ${songurl}`);
    // i did this with the product id, like update state or navigate to a new page
    setSongPick(songId);
    // console.log(songPick);
    setPicture(imageid);
    setMusic(songurl);
  }

  const audioRef = useRef(null);

  function playAudio() {
    audioRef.current.play();
  }

  function pauseAudio() {
    audioRef.current.pause();
  }

  return (
    <div className="h-screen z-0 bg-gray-950 ">
      <div className="bg-gray-950 pt-10 xl:h-auto xl:pb-32">
        <div
          className={`text-white   ${
            flexDirection
              ? "flex flex-col-reverse animate__animated animate__fadeInLeftBig fixed inset-0 mt-10 overflow-y-scroll xl:flex xl:flex-row "
              : "block"
          }   xl:flex xl:justify-center   xl:mx-10 xl:py-10`}
        >
          <div className="xl:w-2/4 xl:py-10 p-10  ">
            <p className="rounded py-2 px-4 font-semibold text-base xl:text-xl bg-white inline text-rose-700">
              <a href="#searchInput" className="macksonMusic tracking-widest ">
                Play
              </a>
            </p>
            <div className="flex justify-between pt-10 xl:pt-32 text-xl w-auto border-b-2 border-white pb-2">
              <div className="flex">
                <div className="inline">
                  <RiSearchLine className="text-lg mt-2" />
                </div>
                <div className="inline">
                  <input
                    type="search"
                    className="px-2 text-sm xl:text-lg xl:w-[200%]"
                    placeholder=" Search for music"
                    name=""
                    id="searchInput"
                    value={searchInput}
                    onChange={(e) => {
                      setSearchInput(e.target.value);
                    }}
                  />
                </div>
              </div>

              <div>
                <span className="xl:ms-80 text-sm bg-rose-950 px-4 py-2 rounded font-semibold tracking-widest">
                  <button onClick={getHandle}>Search</button>
                </span>
              </div>
            </div>

            <div>
              {!fold && (
                <>
                  {" "}
                  {isLoading
                    ? [
                        <div className="bg-rose-950 text-white p-3 flex">
                          <span>
                            <AiOutlineLoading3Quarters className="animate-spin h-5 w-5 mr-3" />
                          </span>{" "}
                          <span>Loading....</span>
                        </div>,
                      ]
                    : [
                        <div className="bg-rose-950 text-sm py-2 px-2 overflow-y-scroll h-50">
                          {songs.map((song) => (
                            <div
                              key={song.actions[0].id}
                              onClick={() =>
                                handleProductClick([
                                  song.actions[0].id,
                                  song.images.default,
                                  song.stores.apple.previewurl,
                                ])
                              }
                            >
                              {" "}
                              <button className="py-2  hover:border-b-2 hover:border-white">
                                <span className="capitalize ">
                                  {song.alias}
                                </span>{" "}
                                {"by"}{" "}
                                <span className="capitalize font-bold text-grey">
                                  {" "}
                                  {song.artists[0].alias}
                                </span>
                              </button>
                            </div>
                          ))}
                        </div>,
                      ]}
                </>
              )}
            </div>
            <div className="text-3xl xl:mt-20 ">
              <h2 className="font-bold text-lg xl:text-6xl pt-5 pb-2 xl:pt-10">
                Music that inspires you to grow
              </h2>
              <p className="text-base macksonMusic tracking-widest xl:mt-3 xl:pb-5">
                Having all genres and type of music, just the best music for you
              </p>
            </div>
          </div>
          <div
            id="playing"
            className="xl:w-2/4 my-10 p-10 bg-rose-950 rounded font-semibold text-black text-3xl"
          >
            <div className="">
              <span className=" text-white text-xl xl:text-3xl ">
                Currently Playing...
              </span>
            </div>

            <div className="my-10 flex  justify-center xl:block animate__fadeInUpBig">
              {picture !== "" && music !== ""
                ? [
                    <div>
                      <div>
                        {" "}
                        <img
                          src={picture}
                          className="rounded h-38 xl:h-72"
                          style={styles}
                          alt=""
                        />
                      </div>
                      <div className=" ">
                        {" "}
                        <audio
                          src={music}
                          className="w-[100%] mt-3"
                          // ref={audioRef}
                          // id="myAudio"
                          controls
                          autoPlay
                        ></audio>
                        {/* <button onClick={playAudio}>
                          <FaPlay />
                        </button>
                        <button onClick={pauseAudio}>Pause</button> */}
                      </div>
                    </div>,
                  ]
                : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
