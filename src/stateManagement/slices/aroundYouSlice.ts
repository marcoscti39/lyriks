import { StateCreator } from "zustand";
import { GlobalSlicesType } from "../store";
import { ChartsTypes } from "./worldChartsGenreSlice";

export interface AroundYouSlice {
  aroundYouSongs: ChartsTypes[];
  userCountry: string;
  getAroudYouSongs: (data: ChartsTypes[]) => void;
  getUserCountry: (data: string) => void;
}

export interface IPApiResponse {
  country: string;
  continent: string;
  zipCode: string;
  accuracyRadius: number;
  flag: string;
  countryISO2: string;
}

export const createAroundYouSlice: StateCreator<
  GlobalSlicesType,
  [],
  [],
  AroundYouSlice
> = (set) => ({
  aroundYouSongs: [],
  userCountry: "",
  getAroudYouSongs: (data) =>
    set((state) => ({ ...state, aroundYouSongs: data })),
  getUserCountry: (data) => set((state) => ({ ...state, userCountry: data })),
});
