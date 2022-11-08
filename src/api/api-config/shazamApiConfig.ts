export const rapidApiKey = import.meta.env.VITE_RAPID_KEY;

export const shazamApiOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": rapidApiKey,
    "X-RapidAPI-Host": "shazam-core.p.rapidapi.com",
  },
};

export const shazamApiBaseUrl = "https://shazam-core.p.rapidapi.com/v1";
export const shazamApiBaseUrlV2 = "https://shazam-core.p.rapidapi.com/v2";
