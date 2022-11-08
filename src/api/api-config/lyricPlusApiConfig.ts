import { rapidApiKey } from "./shazamApiConfig";

export const lyricPlusApiOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": rapidApiKey,
    "X-RapidAPI-Host": "lyrics-plus.p.rapidapi.com",
  },
};

export const lyricPlusApiBaseUrl = "https://lyrics-plus.p.rapidapi.com";
