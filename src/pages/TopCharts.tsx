import React from "react";

import ContainerOfItems from "../components/ContainerOfItems";
import Loader from "../components/Loader";
import MusicCard from "../components/MusicCard";
import { useLyriksData } from "../stateManagement/store";

const TopCharts = () => {
  const topCharts = useLyriksData((state) => state.worldCharts);

  return (
    <section className="bg-gradient-to-r from-purple to-light-blue min-h-screen sm:ml-side-bar-width pb-[3rem] laptop:pr-top-charts-fixed-width">
      {topCharts.length < 5 ? (
        <Loader />
      ) : (
        <>
          <h1 className="text-4xl text-white font-semibold laptop:pt-[5rem] pl-4">
            Top Charts
          </h1>
          <ContainerOfItems>
            {topCharts.map((song, index) => (
              <React.Fragment key={index}>
                {" "}
                <MusicCard
                  trackId={song.key}
                  {...song}
                  playlist={topCharts}
                  songIndex={index}
                />{" "}
              </React.Fragment>
            ))}
          </ContainerOfItems>
        </>
      )}
    </section>
  );
};

export default TopCharts;
