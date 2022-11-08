import React from "react";
import { useLyriksData } from "../stateManagement/store";

import { IoIosArrowDown as ArrowDownIcon } from "react-icons/io";
import {
  BiSkipNext as NextIcon,
  BiSkipPrevious as PreviousIcon,
} from "react-icons/bi";
import { ChartsTypes } from "../stateManagement/slices/worldChartsGenreSlice";
import { SearchedChartsTypes } from "../stateManagement/slices/searchSongsSlice";

const Player = () => {
  const playerState = useLyriksData((state) => state.playerState);
  const hidePlayer = useLyriksData((state) => state.hidePlayer);
  const isSongPaused = useLyriksData((state) => state.isSongPaused);
  const changePausedState = useLyriksData((state) => state.changePausedState);
  const nextSong = useLyriksData((state) => state.nextSong);
  const previousSong = useLyriksData((state) => state.previousSong);
  const playlistBindedWithTheSong = useLyriksData(
    (state) => state.playlistBindedWithTheSong
  );

  const currentSongPlayingIndex = useLyriksData(
    (state) => state.currentSongPlayingIndex
  );
  const changeCurrentSongIndex = useLyriksData(
    (state) => state.changeCurrentSongIndex
  );

  const handlePlayer = () => {
    hidePlayer();
  };

  const handlePause = () => {
    changePausedState(true);
  };
  const handlePlay = () => {
    changePausedState(false);
  };

  const handleNextSong = () => {
    if (currentSongPlayingIndex > playlistBindedWithTheSong.length - 1) {
      changeCurrentSongIndex(0);
      return;
    }
    nextSong();
  };

  const handlePreviousSong = () => {
    if (currentSongPlayingIndex < 0) {
      changeCurrentSongIndex(playlistBindedWithTheSong.length - 1);
    }
    previousSong();
  };

  console.log(
    (playlistBindedWithTheSong as SearchedChartsTypes[])?.[
      currentSongPlayingIndex
    ]?.track?.title
  );

  return (
    <div
      className={`${
        playerState ? "flex" : "hidden"
      } flex h-[180px] flex-col items-center md:flex-row md:justify-start md:items-center fixed w-full bottom-0 z-20 md:h-[100px] bg-light-white backdrop-blur-lg text-white rounded-t-[15px]`}
    >
      <button
        className="flex justify-center items-center bg-white p-2 w-[90px] h-[30px] absolute right-[50%] left-[50%] translate-x-[-50%] top-[-30px] rounded-t-[15px]"
        onClick={handlePlayer}
      >
        <ArrowDownIcon className="text-black text-2xl font-semibold" />
      </button>

      <div className="flex gap-2">
        <img
          src={
            (playlistBindedWithTheSong[currentSongPlayingIndex] as ChartsTypes)
              ?.images
              ? (playlistBindedWithTheSong as ChartsTypes[])?.[
                  currentSongPlayingIndex
                ]?.images?.coverart
              : (playlistBindedWithTheSong as SearchedChartsTypes[])?.[
                  currentSongPlayingIndex
                ]?.track?.images?.coverart
          }
          alt=""
          className={`w-[70px] h-[70px] rounded-[50%] object-cover bg-blue-200 md:ml-[2.5rem] mt-1 ${
            isSongPaused ? "" : "music-playing"
          }`}
        />
        <div className="flex flex-col gap-1 mt-2">
          <h2 className="font-semibold">
            {(playlistBindedWithTheSong[currentSongPlayingIndex] as ChartsTypes)
              ?.images
              ? (playlistBindedWithTheSong as ChartsTypes[])?.[
                  currentSongPlayingIndex
                ]?.title
              : (playlistBindedWithTheSong as SearchedChartsTypes[])?.[
                  currentSongPlayingIndex
                ]?.track?.title}
          </h2>
          <span className="text-light-gray">
            {(playlistBindedWithTheSong[currentSongPlayingIndex] as ChartsTypes)
              ?.artists
              ? (playlistBindedWithTheSong as ChartsTypes[])?.[
                  currentSongPlayingIndex
                ]?.subtitle
              : (playlistBindedWithTheSong as SearchedChartsTypes[])?.[
                  currentSongPlayingIndex
                ]?.track?.subtitle}
          </span>
        </div>
      </div>
      <div className="flex gap-4 md:absolute md:left-[50%] md:right[50%] md:translate-x-[-50%] md:gap-[300px]">
        <button
          className="flex items-center justidy-center text-4xl"
          onClick={handlePreviousSong}
        >
          <PreviousIcon />
        </button>
        <button
          className="flex items-center justidy-center text-4xl"
          onClick={handleNextSong}
        >
          <NextIcon />
        </button>
      </div>

      <audio
        controls
        src={
          (playlistBindedWithTheSong[currentSongPlayingIndex] as ChartsTypes)
            ?.hub
            ? (playlistBindedWithTheSong as ChartsTypes[])?.[
                currentSongPlayingIndex
              ]?.hub?.actions?.[1]?.uri
            : (playlistBindedWithTheSong as SearchedChartsTypes[])?.[
                currentSongPlayingIndex
              ]?.track?.hub?.actions?.[1]?.uri
        }
        onPause={handlePause}
        onPlay={handlePlay}
        autoPlay
        className="absolute bottom-[7px] md:bottom-[50%] md:top-[50%] md:translate-y-[-50%] right-[50%] left-[50%] translate-x-[-50%]"
      ></audio>
    </div>
  );
};

export default Player;
