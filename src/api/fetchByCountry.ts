import { ChartsTypes } from "../stateManagement/slices/worldChartsGenreSlice";
import {
  shazamApiBaseUrl,
  shazamApiOptions,
} from "./api-config/shazamApiConfig";

export const fetchByCountry = async (countryCode: string) => {
  const response = await fetch(
    `${shazamApiBaseUrl}/charts/country?country_code=${countryCode}`,
    shazamApiOptions
  );
  const data: ChartsTypes[] = await response.json();
  return data;
};
