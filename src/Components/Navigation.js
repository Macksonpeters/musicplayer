import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { RxTextAlignJustify } from "react-icons/rx";

import { Outlet } from "react-router-dom";

const Navigation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [toggler, setToggler] = useState(true);

  return (
    // <header>
    //   <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //     <div className="container-fluid">
    //       <a className="navbar-brand" href="#">
    //         Navbar
    //       </a>

    //       <button
    //         className="navbar-toggler"
    //         type="button"
    //         data-bs-toggle="collapse"
    //         data-bs-target="#navbarSupportedContent"
    //         aria-controls="navbarSupportedContent"
    //         aria-expanded="false"
    //         aria-label="Toggle navigation"
    //       >
    //         <span className="navbar-toggler-icon"></span>
    //       </button>

    //       <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //         <ul className="navbar-nav me-auto mb-2 mb-lg-0 bg-red-900">
    //           <li className="nav-item">
    //             <Link className="nav-link " aria-current="page" href="#">
    //               Home
    //             </Link>
    //           </li>
    //           <li className="nav-item">
    //             <a className="nav-link" href="#">
    //               Link
    //             </a>
    //           </li>
    //           <li className="nav-item dropdown">
    //             <a
    //               className="nav-link dropdown-toggle"
    //               href="#"
    //               id="navbarDropdown"
    //               role="button"
    //               data-bs-toggle="dropdown"
    //               aria-expanded="false"
    //             >
    //               Dropdown
    //             </a>
    //           </li>
    //           <li className="nav-item">
    //             <a
    //               className="nav-link disabled"
    //               href="#"
    //               tabindex="-1"
    //               aria-disabled="true"
    //             >
    //               Disabled
    //             </a>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </nav>

    //   <div>
    //     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex, totam!
    //   </div>
    // </header>
    <>
      <header className="">
        <nav className="z-10 fixed py-3 px-7 xl:py-5 xl:px-10 w-[100%] ">
          <div className=" w-[100%] xl:flex xl:justify-between">
            {/* logo */}
            <div className="flex justify-between w-[100%] xl:w-1/4">
              <div className="inline">
                <Link
                  className="macksonMusic xl:text-3xl no-underline text-white font-bold tracking-widest"
                  to="/"
                >
                  Mackson
                </Link>
              </div>

              {/* Navbar mobile button */}
              <div className="inline">
                {toggler
                  ? [
                      <button
                        className="xl:hidden "
                        onClick={() => {
                          setIsVisible(true);
                          setToggler(false);
                        }}
                      >
                        <RxTextAlignJustify className="text-white text-xl" />
                      </button>,
                    ]
                  : [
                      <button
                        className="xl:hidden"
                        onClick={() => {
                          setIsVisible(false);
                          setToggler(true);
                        }}
                      >
                        <IoMdClose className="text-xl font-light text-white" />
                      </button>,
                    ]}
              </div>
            </div>

            {/* Navbar Links */}
            <div
              className={`text-lg xl:flex ${isVisible ? "block" : "hidden"}`}
            >
              <ul className="nbFont ps-0 text-white xl:flex  xl:flex-row xl:justify-between xl:relative  xl:top-1 ">
                <li className="mt-3 xl:mt-0 hover:underline">
                  <Link
                    className="no-underline text-sm text-white font-semibold xl:text-lg tracking-wide  xl:py-3 xl:px-5 hover:xl:rounded"
                    aria-current="page"
                    to="/about"
                  >
                    About
                  </Link>
                </li>
                <li className=" mobileItem me-5 my-3 xl:my-0 hover:underline">
                  <Link
                    className="no-underline text-sm text-white font-semibold xl:text-lg tracking-wide xl:py-3 xl:px-5 hover:xl:rounded"
                    to="/search"
                  >
                    Search
                  </Link>
                </li>

                <li className=" signRegisterButton ">
                  <Link
                    to="/signin"
                    className="no-underline mb-2 py-2 text-semibold tracking-widest text-sm bg-white block rounded text-center text-black font-semibold xl:text-lg xl:inline xl:mb-0 xl:text-black  xl:py-2 xl:px-10 xl:text-bold"
                  >
                    Sign in
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Navigation;
