import { SongLyricTypes } from "../stateManagement/slices/songDetailsSlice";
import {
  lyricPlusApiBaseUrl,
  lyricPlusApiOptions,
} from "./api-config/lyricPlusApiConfig";

export const fetchSongLyrics = async (songName: string, songArtist: string) => {
  const response = await fetch(
    `${lyricPlusApiBaseUrl}/lyrics/${songName}/${songArtist}`,
    lyricPlusApiOptions
  );
  const data: SongLyricTypes = await response.json();
  return data;
};
