import { rapidApiKey } from "./shazamApiConfig";

export const IPApiOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": rapidApiKey,
    "X-RapidAPI-Host":
      "find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com",
  },
};

export const IPApiBaseURL =
  "https://find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com";
