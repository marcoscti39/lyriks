import { StateCreator } from "zustand";
import { GlobalSlicesType } from "../store";
import { ChartsTypes } from "./worldChartsGenreSlice";

export interface SearchSongsResponseFulfilled {
  tracks: {
    hits: SearchedChartsTypes[];
  };
}

export interface SearchedChartsTypes {
  track: ChartsTypes;
}

export interface SearchSongsResponseError {
  detail: [
    {
      loc: [];
      msg: string;
      type: string;
    }
  ];
}
export type SearchSongsResponse = SearchSongsResponseFulfilled &
  SearchSongsResponseError;

export interface SearchSongsSlice {
  songsFounded: SearchSongsResponse;
  getSongsSearched: (data: SearchSongsResponse) => void;
}

export const createSearchSongsSlice: StateCreator<
  GlobalSlicesType,
  [],
  [],
  SearchSongsSlice
> = (set) => ({
  songsFounded: {} as SearchSongsResponse,
  getSongsSearched: (data) =>
    set((state) => ({ ...state, songsFounded: data })),
});
