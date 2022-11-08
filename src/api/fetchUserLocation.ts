import { IPApiResponse } from "../stateManagement/slices/aroundYouSlice";
import { IPApiBaseURL, IPApiOptions } from "./api-config/IPApiConfig";

export const fetchUserLocation = async () => {
  const response = await fetch(
    `${IPApiBaseURL}/iplocation?apikey=${import.meta.env.VITE_API_IP_KEY}`,
    IPApiOptions
  );
  const data: IPApiResponse = await response.json();
  return data;
};

