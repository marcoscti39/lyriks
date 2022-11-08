import React from "react";
import { Link } from "react-router-dom";
import { BsPlayFill as PlayIcon } from "react-icons/bs";
import { IoIosPause as PauseIcon } from "react-icons/io";
import { ChartsTypes } from "../stateManagement/slices/worldChartsGenreSlice";
import { useLyriksData } from "../stateManagement/store";
import Artist from "../pages/Artist";
import { SearchedChartsTypes } from "../stateManagement/slices/searchSongsSlice";

const MusicCard: React.FC<
  ChartsTypes & {
    trackId: string;
    songIndex: number;
    playlist: ChartsTypes[] | SearchedChartsTypes[];
  }
> = ({
  title,
  subtitle,
  images,
  trackId,
  hub,
  artists,
  songIndex,
  playlist,
}) => {
  const [isMusicImgHover, setIsMusicImgHover] = React.useState(false);
  const playerState = useLyriksData((state) => state.playerState);
  const showPlayer = useLyriksData((state) => state.showPlayer);
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
    <article
      className="p-3 text-white  rounded-lg bg-very-light-white cursor-pointer"
      onMouseOut={() => setIsMusicImgHover(false)}
    >
      <div
        className="relative w-full h-[190px] bg-red-400 "
        onMouseOver={() => setIsMusicImgHover(true)}
      >
        <div
          className={`${
            isMusicImgHover ? "flex" : "hidden"
          } justify-center bg-very-opacity-black items-center absolute left-0 right-0 bottom-0 top-0 `}
        >
          <button
            className="flex justify-center items-center w-[40px] h-[40px] rounded-[50%] bg-white mr-0"
            onClick={activatePlayer}
          >
            {(playlistBindedWithTheSong[currentSongPlayingIndex] as ChartsTypes)
              ?.artists ? (
              (playlistBindedWithTheSong as ChartsTypes[])?.[
                currentSongPlayingIndex
              ]?.key === trackId && playerState ? (
                <>
                  {isSongPaused ? (
                    <PlayIcon className="text-2xl text-dark-blue" />
                  ) : (
                    <PauseIcon className="text-2xl text-dark-blue" />
                  )}
                </>
              ) : (
                <PlayIcon className="text-2xl text-dark-blue" />
              )
            ) : (playlistBindedWithTheSong as SearchedChartsTypes[])?.[
                currentSongPlayingIndex
              ]?.track?.key === trackId && playerState ? (
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
        </div>

        <img
          src={images?.coverart}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-2 mt-4 ">
        <Link
          to={`/song/${title}/${subtitle}/${trackId}/${hub?.actions?.[0]?.id}`}
        >
          <h3 className="font-bold text-lg">
            {title.length > 20 ? `${title.substring(0, 38)}...` : title}
          </h3>
        </Link>
        <Link
          to={
            artists ? `/artist/${artists[0]?.alias}/${artists[0]?.adamid}` : "/"
          }
        >
          <strong className="font-[200] text-light-gray">
            {subtitle.length > 20
              ? `${subtitle.substring(0, 38)}...`
              : subtitle}
          </strong>
        </Link>
      </div>
    </article>
  );
};

export default MusicCard;
