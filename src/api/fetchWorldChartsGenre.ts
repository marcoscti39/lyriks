import { ChartsTypes } from "../stateManagement/slices/worldChartsGenreSlice";
import {
  shazamApiBaseUrl,
  shazamApiOptions,
} from "./api-config/shazamApiConfig";

export const fetchWorldChartsGenre = async (genre: string) => {
  const response = await fetch(
    `${shazamApiBaseUrl}/charts/genre-world?genre_code=${genre}`,
    shazamApiOptions
  );
  const data: ChartsTypes[] = await response.json();
  return data;
};
