import {
  SearchSongsResponse,
  SearchSongsResponseError,
  SearchSongsResponseFulfilled,
} from "../stateManagement/slices/searchSongsSlice";
import { ChartsTypes } from "../stateManagement/slices/worldChartsGenreSlice";
import {
  shazamApiBaseUrl,
  shazamApiOptions,
} from "./api-config/shazamApiConfig";

export const fetchSearchedSongs = async (searchedSong: string) => {
  const response = await fetch(
    `${shazamApiBaseUrl}/search/multi?query=${searchedSong}&search_type=SONGS`,
    shazamApiOptions
  );
  const data: SearchSongsResponse = await response.json();

  return data;
};
