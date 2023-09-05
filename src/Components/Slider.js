import { useState } from "react";
import c from "../Images/c.jpg";
import cc from "../Images/cc.jpg";
import ccc from "../Images/ccc.jpg";
import "@splidejs/react-splide/css";
import { Options, Splide, SplideSlide } from "@splidejs/react-splide";
import { FaPlay } from "react-icons/fa";

const options = {
  perPage: 2,
  arrows: false,
  pagination: false,
};

function Slider() {
  const [playClick, setPlayClick] = useState(false);
  const [playClicki, setPlayClicki] = useState(false);
  const [playClickii, setPlayClickii] = useState(false);
  const [playClickv, setPlayClickv] = useState(false);

  return (
    <div>
      <Splide Options={options} aria-label="My Favorite Images">
        <SplideSlide>
          <div className="bg-black text-white flex w-[100%] gap-4 xl:px-10">
            <div className="card w-2/4 xl:w-1/4 h-auto">
              <img
                className="w-[100%]"
                src="https://is2-ssl.mzstatic.com/image/thumb/Music116/v4/40/12/87/4012878d-d267-09b8-7fe0-8c3fd8fdf169/886449553617.jpg/400x400cc.jpg/"
                alt=""
              />
              <button className="hover:text-orangebg my-2">
                {/* <FaPlay
                  className={`text-lg xl:text-xl ${
                    playClick ? "hidden" : null
                  }`}
                  onClick={() => {
                    setPlayClick(true);
                  }}
                /> */}
              </button>
              <audio
                className={`w-[100%] ${playClick ? "inline" : "hidden"} `}
                src="https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/6a/dc/be/6adcbe8c-52dc-7cb2-88fa-a8cb48cbf618/mzaf_13297114459038890083.plus.aac.ep.m4a"
              ></audio>
            </div>
            <div className="card w-2/4 xl:w-1/4">
              <img
                className="w-[100%]"
                src="https://is3-ssl.mzstatic.com/image/thumb/Music112/v4/34/42/db/3442dbd6-644f-a111-8344-0151ffb93313/075679745156.jpg/400x400cc.jpg"
                alt=""
              />
              <button className="hover:text-orangebg my-2">
                {/* <FaPlay
                  className={`text-lg xl:text-xl ${
                    playClicki ? "hidden" : null
                  }`}
                  onClick={() => {
                    setPlayClicki(true);
                  }}
                /> */}
              </button>
              <audio
                className={`w-[100%] ${playClicki ? "inline" : "hidden"} `}
                src="https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/94/ce/55/94ce55d2-8f22-1d1b-8e08-b5c7bedea197/mzaf_1822718630899827334.plus.aac.ep.m4a"
              ></audio>
            </div>
            <div className="card w-2/4 xl:w-1/4 hidden xl:block">
              <img
                className="w-[100%]"
                alt=""
                src="https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/f7/76/f4/f776f482-406b-301a-4145-14617d0b8cf5/00606949062927.rgb.jpg/400x400cc.jpg"
              />
              <button className="hover:text-orangebg my-2">
                {/* <FaPlay
                  className={`text-xl ${playClickii ? "hidden" : null}`}
                  onClick={() => {
                    setPlayClickii(true);
                  }}
                /> */}
              </button>
              <audio
                className={`w-[100%] ${playClickii ? "inline" : "hidden"} `}
                controls
                src="https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/5c/06/cd/5c06cd7b-27ad-8102-5d32-5fe48c30ea44/mzaf_8885690701015123139.plus.aac.ep.m4a"
              ></audio>
            </div>
            <div className="card w-2/4 xl:w-1/4 hidden xl:block">
              <img
                className="w-[100%]"
                src="https://is2-ssl.mzstatic.com/image/thumb/Music116/v4/40/12/87/4012878d-d267-09b8-7fe0-8c3fd8fdf169/886449553617.jpg/400x400cc.jpg"
                alt=""
              />
              <button className="hover:text-orangebg my-2">
                {/* <FaPlay
                  className={`text-xl ${playClickv ? "hidden" : null}`}
                  onClick={() => {
                    setPlayClickv(true);
                  }}
                /> */}
              </button>
              <audio
                className={`w-[100%] ${playClickv ? "inline" : "hidden"} `}
                src="https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/6a/dc/be/6adcbe8c-52dc-7cb2-88fa-a8cb48cbf618/mzaf_13297114459038890083.plus.aac.ep.m4a"
              ></audio>
            </div>
          </div>
        </SplideSlide>

        <SplideSlide>
          <div className="bg-black text-white flex w-[100%] gap-4 xl:px-10">
            <div className="card w-2/4 xl:w-1/4 h-auto">
              <img
                className="w-[100%]"
                src="https://is2-ssl.mzstatic.com/image/thumb/Music116/v4/40/12/87/4012878d-d267-09b8-7fe0-8c3fd8fdf169/886449553617.jpg/400x400cc.jpg/"
                alt=""
              />
              <button className="hover:text-orangebg my-2">
                {/* <FaPlay
                  className={`text-lg xl:text-xl ${
                    playClick ? "hidden" : null
                  }`}
                  onClick={() => {
                    setPlayClick(true);
                  }}
                /> */}
              </button>
              <audio
                className={`w-[100%] ${playClick ? "inline" : "hidden"} `}
                src="https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/6a/dc/be/6adcbe8c-52dc-7cb2-88fa-a8cb48cbf618/mzaf_13297114459038890083.plus.aac.ep.m4a"
              ></audio>
            </div>
            <div className="card w-2/4 xl:w-1/4">
              <img
                className="w-[100%]"
                src="https://is3-ssl.mzstatic.com/image/thumb/Music112/v4/34/42/db/3442dbd6-644f-a111-8344-0151ffb93313/075679745156.jpg/400x400cc.jpg"
                alt=""
              />
              <button className="hover:text-orangebg my-2">
                {/* <FaPlay
                  className={`text-lg xl:text-xl ${
                    playClicki ? "hidden" : null
                  }`}
                  onClick={() => {
                    setPlayClicki(true);
                  }}
                /> */}
              </button>
              <audio
                className={`w-[100%] ${playClicki ? "inline" : "hidden"} `}
                controls
                src="https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/94/ce/55/94ce55d2-8f22-1d1b-8e08-b5c7bedea197/mzaf_1822718630899827334.plus.aac.ep.m4a"
              ></audio>
            </div>
            <div className="card w-2/4 xl:w-1/4 hidden xl:block">
              <img
                className="w-[100%]"
                alt=""
                src="https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/f7/76/f4/f776f482-406b-301a-4145-14617d0b8cf5/00606949062927.rgb.jpg/400x400cc.jpg"
              />
              <button className="hover:text-orangebg my-2">
                {/* <FaPlay
                  className={`text-xl ${playClickii ? "hidden" : null}`}
                  onClick={() => {
                    setPlayClickii(true);
                  }}
                /> */}
              </button>
              <audio
                className={`w-[100%] ${playClickii ? "inline" : "hidden"} `}
                controls
                src="https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/5c/06/cd/5c06cd7b-27ad-8102-5d32-5fe48c30ea44/mzaf_8885690701015123139.plus.aac.ep.m4a"
              ></audio>
            </div>
            <div className="card w-2/4 xl:w-1/4 hidden xl:block">
              <img
                className="w-[100%]"
                src="https://is2-ssl.mzstatic.com/image/thumb/Music116/v4/40/12/87/4012878d-d267-09b8-7fe0-8c3fd8fdf169/886449553617.jpg/400x400cc.jpg"
                alt=""
              />
              <button className="hover:text-orangebg my-2">
                {/* <FaPlay
                  className={`text-xl ${playClickv ? "hidden" : null}`}
                  onClick={() => {
                    setPlayClickv(true);
                  }}
                /> */}
              </button>
              <audio
                className={`w-[100%] ${playClickv ? "inline" : "hidden"} `}
                controls
                src="https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/6a/dc/be/6adcbe8c-52dc-7cb2-88fa-a8cb48cbf618/mzaf_13297114459038890083.plus.aac.ep.m4a"
              ></audio>
            </div>
          </div>
        </SplideSlide>
      </Splide>
    </div>
  );
}

export default Slider;
