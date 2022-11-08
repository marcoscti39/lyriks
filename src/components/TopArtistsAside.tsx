import React from "react";
import { Link } from "react-router-dom";
import { useLyriksData } from "../stateManagement/store";

const TopArtistsAside = () => {
  const worldCharts = useLyriksData((state) => state.worldCharts);
  const playerState = useLyriksData((state) => state.playerState);

  return (
    <section
      className={`${playerState ? "md:mb-[100px]" : "mb-0"} overflow-x-hidden`}
    >
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Top Artists</h2>
        <Link to="top-artists" className="text-light-gray mr-4">
          See More
        </Link>
      </div>
      <div className="flex gap-4 items-center overflow-x-scroll mt-4 mb-[1rem] py-4">
        {worldCharts?.slice(0, 10)?.map((song, index) => (
          <Link to="" key={index}>
            <div className="w-[100px] h-[100px] ">
              <img
                src={song?.images?.background}
                alt=""
                className="object-cover rounded-[50%] bg-blue-300 w-full h-full"
              />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default TopArtistsAside;
