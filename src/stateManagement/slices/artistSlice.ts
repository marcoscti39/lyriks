import { StateCreator } from "zustand";
import { GlobalSlicesType } from "../store";
import { ChartsTypes } from "./worldChartsGenreSlice";

export interface ArtistTypes {
  artists: {
    [artistId in string]: {
      attributes: {
        genreNames: string[];
        name: string;
        artwork: {
          width: number;
          url: string;
          height: number;
          textcolor3: string;
          textcolor2: string;
          textcolor4: string;
          textcolor1: string;
          bgcolor: string;
          hasP3: boolean;
        };
        url: string;
      };
      relationships: {
        albums: {
          href: string;
          next: string;
          data: [
            {
              id: string;
              type: string;
              href: string;
            }
          ];
        };
      };
      views: {
        "latest-release": {};
        "top-songs": {
          href: string;
          next: string;
          attributes: {
            title: string;
          };
          data: [
            {
              id: string;
              type: string;
              href: string;
            }
          ];
        };
      };
    };
  };
  albums: {};
  songs: {};
}

export interface ArtistSliceTypes {
  artistData: ArtistTypes;
  getArtistData: (data: ArtistTypes) => void;
  artistRelatedSongs: ChartsTypes[];
  getArtistRelatedSongs: (data: ChartsTypes[]) => void;
}

export const createArtistSlice: StateCreator<
  GlobalSlicesType,
  [],
  [],
  ArtistSliceTypes
> = (set) => ({
  artistData: {} as ArtistTypes,
  getArtistData: (data) => set((state) => ({ ...state, artistData: data })),
  artistRelatedSongs: [],
  getArtistRelatedSongs: (data) =>
    set((state) => ({ ...state, artistRelatedSongs: data })),
});
