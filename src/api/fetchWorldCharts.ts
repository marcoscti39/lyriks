import { ChartsTypes } from "../stateManagement/slices/worldChartsGenreSlice";
import {
  shazamApiBaseUrl,
  shazamApiOptions,
} from "./api-config/shazamApiConfig";

export const fetchWorldCharts = async () => {
  const response = await fetch(
    `${shazamApiBaseUrl}/charts/world`,
    shazamApiOptions
  );
  const data: ChartsTypes[] = await response.json();
  return data;
};
