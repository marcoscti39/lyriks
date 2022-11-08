import React from "react";
import { useLyriksData } from "../stateManagement/store";
import { useParams } from "react-router-dom";
import { fetchSongDetails } from "../api/fetchSongDetails";
import { fetchRelatedSongs } from "../api/fetchRelatedSongs";
import Loader from "../components/Loader";
import {
  LyricsTypes,
  SongInfoTypes,
} from "../stateManagement/slices/songDetailsSlice";

const Song = () => {
  const songData = useLyriksData((state) => state.songData);
  const songsRelated = useLyriksData((state) => state.songsRelated);
  const getSongsRelated = useLyriksData((state) => state.getSongsRelated);
  const getSongData = useLyriksData((state) => state.getSongData);
  const { songName, songArtist, trackId, trackDetailsId } = useParams();

  React.useEffect(() => {
    const gettingData = async () => {
      getSongData(await fetchSongDetails(trackDetailsId!));
      getSongsRelated(await fetchRelatedSongs(trackId!));
    };
    gettingData();
  }, []);

  const songDataKey =
    songData.resources && Object.keys(songData.resources["shazam-songs"])[0];
  const lyricsKey =
    songData.resources && Object.keys(songData.resources.lyrics)[0];

  const songInfo =
    songData?.resources?.["shazam-songs"]?.[songDataKey as keyof SongInfoTypes];
  const lyrics =
    songData?.resources?.lyrics?.[lyricsKey as keyof LyricsTypes]?.attributes
      ?.text;

  return (
    <>
      <section className="text-white bg-gradient-to-r pb-[3rem] from-purple to-light-blue sm:ml-side-bar-width laptop:pr-top-charts-fixed-width pt-[10rem] min-h-screen pl-4">
        {!songData.resources ? (
          <Loader />
        ) : (
          <>
            <div className="flex relative gap-4 items-center mb-[4rem] before:absolute before:top-[-50%] before:z-[1] before:w-full before:h-full before:bg-gradient-to-r  before:from-dark-blue before:to-artist-background-to-color">
              <div className="w-[200px] h-[200px] relative z-10">
                <img
                  src={songInfo?.attributes?.images?.coverArt}
                  className="bg-blue-400 rounded-[50%] object-cover w-full h-full border-[1px] border-white"
                />
              </div>
              <div className="flex flex-col gap-3 relative z-10">
                <h1 className="text-2xl font-semibold">
                  {songInfo?.attributes?.title}
                </h1>
                <span className="text-light-gray">
                  {songInfo?.attributes?.artist}
                </span>
                <span>{songInfo?.attributes?.genres?.primary}</span>
              </div>
            </div>

            <section className="pb-[3rem]">
              <h2 className="text-3xl font-semibold mb-4">Lyrics:</h2>

              <div className="text-light-gray text-lg">
                {lyrics?.map((line, index) => (
                  <p
                    key={index}
                    className={`${line.length === 0 ? "my-4" : "my-0"}`}
                  >
                    {line}
                  </p>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-semibold mb-4">Related Songs:</h2>

              <div className="flex flex-col gap-2">
                {songsRelated?.map((song, index) => (
                  <article
                    key={index}
                    className="flex gap-4 items-center bg-very-opacity-gray backdrop-blur-3xl p-3 rounded mx-2"
                  >
                    <span>{index + 1}.</span>
                    <img
                      src={song?.images?.coverart}
                      alt=""
                      className="w-[70px] h-[70px] rounded-xl object-cover bg-red-500"
                    />
                    <div className="flex flex-col gap-2 flex-1">
                      <h3 className="font-bold">{song?.title}</h3>
                      <strong className="font-[200] text-light-gray">
                        {song?.subtitle}
                      </strong>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </>
        )}
      </section>
    </>
  );
};

export default Song;
