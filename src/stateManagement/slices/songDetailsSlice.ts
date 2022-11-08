import { ChartsTypes } from "./worldChartsGenreSlice";
import { StateCreator } from "zustand";
import { GlobalSlicesType } from "../store";

export interface SongDetailsTypes extends ChartsTypes {
  alias: string;
  isrc: string;
  genres: {
    primary: string;
  };
  urlparams: {
    "{tracktitle}": string;
    "{trackArtist}": string;
  };
  releasedata: string;
}

export interface LyricsTypes {
  [""]: {
    id: string;
    href: string;
    type: string;
    attributes: {
      text: string[];
      footer: string;
    };
  };
}

export interface SongInfoTypes {
  [""]: {
    id: string;
    type: string;
    attributes: {
      type: string;
      title: string;
      artist: string;
      primaryArtist: string;
      label: string;
      explicit: false;
      isrc: string;
      images: {
        artistAvatar: string;
        coverArt: string;
        coverArtHq: string;
      };
      genres: {
        primary: string;
      };
      streaming: {
        preview: string;
      };
    };
  };
}

export interface SongDetailsTypesV2 {
  resources: {
    lyrics: LyricsTypes;
    "shazam-songs": SongInfoTypes;
  };
}

export interface SongDetailsSliceTypes {
  songData: SongDetailsTypesV2;
  songsRelated: ChartsTypes[];
  getSongData: (data: SongDetailsTypesV2) => void;
  getSongsRelated: (data: ChartsTypes[]) => void;
}

export const createSongDetailsSlice: StateCreator<
  GlobalSlicesType,
  [],
  [],
  SongDetailsSliceTypes
> = (set) => ({
  songData: {} as SongDetailsTypesV2,
  songsRelated: [],
  getSongData: (data) => set((state) => ({ ...state, songData: data })),
  getSongsRelated: (data: ChartsTypes[]) =>
    set((state) => ({ ...state, songsRelated: data })),
});
