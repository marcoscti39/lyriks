import React from "react";
import { Link } from "react-router-dom";

import { BsPlayFill as PlayIcon } from "react-icons/bs";
import TopArtistsAside from "./TopArtistsAside";
import { useLyriksData } from "../stateManagement/store";
import TopChartsAsideCard from "./TopChartsAsideCard";

const TopChartsAside = () => {
  const worldCharts = useLyriksData((state) => state.worldCharts);
  return (
    <aside className="relative z-10 p-4 pt-[52px] text-white bg-gradient-to-r from-purple to-light-blue sm:ml-side-bar-width laptop:p-0 laptop:h-screen laptop:bg-none laptop:w-top-charts-fixed-width laptop:fixed laptop:right-0 laptop:top-[52px] laptop:overflow-y-auto laptop:pb-12">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold text-white">Top Charts</h2>
        <Link to="top-charts" className="text-light-gray mr-4">
          See More
        </Link>
      </div>

      <div className="flex flex-col gap-4 mb-4">
        {worldCharts?.slice(0, 10)?.map((song, index) => (
          <React.Fragment key={index}>
            <TopChartsAsideCard
              {...song}
              songRank={index + 1}
              trackId={song.key}
              songIndex={index}
              playlist={worldCharts.slice(0, 10)}
            />
          </React.Fragment>
        ))}
      </div>
      <TopArtistsAside />
    </aside>
  );
};

export default TopChartsAside;
