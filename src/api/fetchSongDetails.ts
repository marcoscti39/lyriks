import {
  SongDetailsTypes,
  SongDetailsTypesV2,
} from "../stateManagement/slices/songDetailsSlice";
import {
  shazamApiBaseUrl,
  shazamApiBaseUrlV2,
  shazamApiOptions,
} from "./api-config/shazamApiConfig";

export const fetchSongDetails = async (trackId: string) => {
  const response = await fetch(
    `${shazamApiBaseUrlV2}/tracks/details?track_id=${trackId}`,
    shazamApiOptions
  );
  const data: SongDetailsTypesV2 = await response.json();
  console.log(data);
  return data;
};
