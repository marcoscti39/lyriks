import React from "react";
import { BsPlayFill as PlayIcon } from "react-icons/bs";
import { IoIosPause as PauseIcon } from "react-icons/io";
import { ChartsTypes } from "../stateManagement/slices/worldChartsGenreSlice";
import { useLyriksData } from "../stateManagement/store";

const TopChartsAsideCard: React.FC<
  ChartsTypes & {
    songRank: number;
    trackId: string;
    songIndex: number;
    playlist: ChartsTypes[];
  }
> = ({
  songRank,
  images,
  title,
  subtitle,
  hub,
  trackId,
  songIndex,
  playlist,
}) => {
  const playerState = useLyriksData((state) => state.playerState);
  const showPlayer = useLyriksData((state) => state.showPlayer);
  const hidePlayer = useLyriksData((state) => state.hidePlayer);
  const isSongPaused = useLyriksData((state) => state.isSongPaused);
  const playlistBindedWithTheSong = useLyriksData(
    (state) => state.playlistBindedWithTheSong
  );
  const getPlaylistBindedWithTheSong = useLyriksData(
    (state) => state.getPlaylistBindedWithTheSong
  );
  const currentSongPlayingIndex = useLyriksData(
    (state) => state.currentSongPlayingIndex
  );
  const changeCurrentSongIndex = useLyriksData(
    (state) => state.changeCurrentSongIndex
  );

  const activatePlayer = () => {
    showPlayer();

    getPlaylistBindedWithTheSong(playlist);
    changeCurrentSongIndex(songIndex);
  };

  return (
    <article className="flex gap-4 items-center">
      <span>{songRank}.</span>
      <img
        src={images?.coverart}
        alt=""
        className="w-[70px] h-[70px] rounded-xl object-cover bg-red-500"
      />
      <div className="flex flex-col gap-2 flex-1">
        <h3 className="font-bold">
          {title.length > 20 ? `${title.substring(0, 30)}...` : title}
        </h3>
        <strong className="font-[200] text-light-gray">{subtitle}</strong>
      </div>
      <button
        className="flex justify-center items-center w-[40px] h-[40px] rounded-[50%] bg-white mr-4"
        onClick={activatePlayer}
      >
        {(playlistBindedWithTheSong as ChartsTypes[])?.[currentSongPlayingIndex]
          ?.key === trackId && playerState ? (
          <>
            {isSongPaused ? (
              <PlayIcon className="text-2xl text-dark-blue" />
            ) : (
              <PauseIcon className="text-2xl text-dark-blue" />
            )}
          </>
        ) : (
          <PlayIcon className="text-2xl text-dark-blue" />
        )}
      </button>
    </article>
  );
};

export default TopChartsAsideCard;
