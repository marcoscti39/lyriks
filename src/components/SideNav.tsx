import React from "react";
import { Link } from "react-router-dom";

import logoSvg from "../../public/images/lyriks-logo.svg";

import { AiOutlineHome as HomeIcon } from "react-icons/ai";
import { IoEarthSharp as EarthIcon } from "react-icons/io5";
import { BsPeople as PeopleIcon, BsHash as HashIcon } from "react-icons/bs";
import { useMenuMobileContext } from "../context/MenuMobileContext";

const SideNav = () => {
  const { isMenuMobileOpen, setIsMenuMobileOpen } = useMenuMobileContext();
  return (
    <>
      <aside
        className={`${
          isMenuMobileOpen ? "translate-x-0" : "translate-x-[-100%]"
        } fixed z-30 sm:z-10 flex bg-light-white backdrop-blur-xl transition text-[#e9e9e9] w-[60%] sm:w-[250px] min-h-screen sm:bg-dark-blue sm:text-light-gray sm:translate-x-0`}
      >
        <div className="w-full">
          <nav>
            <img
              src={logoSvg}
              alt=""
              className="w-[100px] h-[70px] mx-auto mt-4"
            />
            <ul className="mt-12 font-semibold">
              <Link to="/" onClick={() => setIsMenuMobileOpen(false)}>
                <li className="flex gap-4 py-4 px-[1.5rem] items-center hover:text-very-light-blue">
                  <HomeIcon />

                  <span>Discover</span>
                </li>
              </Link>
              <Link to="/around-you" onClick={() => setIsMenuMobileOpen(false)}>
                <li className="flex gap-4 py-4 px-[1.5rem] items-center hover:text-very-light-blue">
                  <EarthIcon />

                  <span>Around You</span>
                </li>
              </Link>

              <Link
                to="/top-artists"
                onClick={() => setIsMenuMobileOpen(false)}
              >
                <li className="flex gap-4 py-4 px-[1.5rem] items-center hover:text-very-light-blue">
                  <PeopleIcon />

                  <span>Top Artists</span>
                </li>
              </Link>

              <Link to="/top-charts" onClick={() => setIsMenuMobileOpen(false)}>
                <li className="flex gap-4 py-4 px-[1.5rem] items-center hover:text-very-light-blue">
                  <HashIcon />

                  <span>Top Charts</span>
                </li>
              </Link>
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
};

export default SideNav;
