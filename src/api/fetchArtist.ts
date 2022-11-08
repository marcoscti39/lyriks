import { ArtistTypes } from "../stateManagement/slices/artistSlice";
import { SongDetailsTypes } from "../stateManagement/slices/songDetailsSlice";
import {
  shazamApiBaseUrl,
  shazamApiOptions,
} from "./api-config/shazamApiConfig";

export const fetchArtist = async (artistId: string) => {
  const response = await fetch(
    `${shazamApiBaseUrl}/artists/details?artist_id=${artistId}`,
    shazamApiOptions
  );
  const data: ArtistTypes = await response.json();
  return data;
};
