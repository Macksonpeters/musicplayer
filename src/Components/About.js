import React from "react";
import cs from "../Images/cs.jpg";

function About() {
  return (
    <div className="pt-10 h-[100%] xl:h-screen bg-orangebg">
      <div className=" max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold macksonMusic tracking-widest text-gray-900 sm:text-4xl xl:text-6xl">
              Mackson Music
            </h2>
            <p className="mt-3 max-w-3xl text-lg text-gray-950">
              Mackson Music is a website dedicated to bringing you the latest
              and greatest music from all around the world. We provide streaming
              access to millions of songs, along with curated playlists and
              recommendations based on your listening history.
            </p>
            <dl className="mt-10 space-y-10">
              <div>
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  Our Mission
                </dt>
                <dd className="mt-2 text-base text-gray-950">
                  Our mission is to connect people through music, and to help
                  them discover new artists and genres that they'll love.
                </dd>
              </div>
              <div>
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  Our Team
                </dt>
                <dd className="mt-2 text-base text-gray-950">
                  At Mackson Music, we're proud to have a diverse team of music
                  lovers, developers, and creatives who are passionate about
                  building the best music platform on the web.
                </dd>
              </div>
              <div>
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  Contact Us
                </dt>
                <dd className="mt-2 text-base text-gray-950">
                  For general inquiries or support, please email us at
                  info@macksonmusic.com. If you're an artist or label interested
                  in working with us, please contact our partnerships team at
                  partnerships@macksonmusic.com.
                </dd>
              </div>
            </dl>
          </div>
          <div className="mt-10 lg:mt-0">
            <img
              className="mx-auto shadow-lg rounded-tl-full rounded-tr-lg"
              src={cs}
              alt="Mackson Music"
              width="600"
              height="400"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
