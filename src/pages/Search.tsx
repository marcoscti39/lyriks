import React from "react";
import { useParams } from "react-router-dom";
import { fetchSearchedSongs } from "../api/fetchSearchedSong";
import ContainerOfItems from "../components/ContainerOfItems";
import Loader from "../components/Loader";
import MusicCard from "../components/MusicCard";
import { useLyriksData } from "../stateManagement/store";

const Search = () => {
  const songsFounded = useLyriksData((state) => state.songsFounded);

  const { searchedSong } = useParams();

  return (
    <>
      <section className="bg-gradient-to-r from-purple to-light-blue min-h-screen sm:ml-side-bar-width pb-[3rem] laptop:pr-top-charts-fixed-width">
        {songsFounded.tracks || songsFounded.detail ? (
          <>
            <h1 className="text-4xl text-white font-semibold laptop:pt-[5rem] pl-4">
              Results for {searchedSong}
            </h1>
            <ContainerOfItems>
              {songsFounded.tracks ? (
                songsFounded.tracks.hits.map(({ track }, index) => (
                  <React.Fragment key={index}>
                    {" "}
                    <MusicCard
                      trackId={track.key}
                      {...track}
                      songIndex={index}
                      playlist={songsFounded.tracks.hits}
                    />{" "}
                  </React.Fragment>
                ))
              ) : (
                <div className="text-white text-2xl">Not Founded :(</div>
              )}
            </ContainerOfItems>
          </>
        ) : (
          <Loader />
        )}
      </section>
    </>
  );
};

export default Search;
