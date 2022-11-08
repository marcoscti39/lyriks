import { ChartsTypes } from "../stateManagement/slices/worldChartsGenreSlice";
import {
  shazamApiBaseUrl,
  shazamApiOptions,
} from "./api-config/shazamApiConfig";

export const fetchRelatedSongs = async (trackId: string) => {
  const response = await fetch(
    `${shazamApiBaseUrl}/tracks/related?track_id=${trackId}`,
    shazamApiOptions
  );
  const data: ChartsTypes[] = await response.json();
  return data;
};
