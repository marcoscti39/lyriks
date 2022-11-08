import { StateCreator } from "zustand";
import { GlobalSlicesType } from "../store";
import { SearchedChartsTypes } from "./searchSongsSlice";
import { ChartsTypes } from "./worldChartsGenreSlice";

export type SongPlayingDataTypes = Pick<
  ChartsTypes,
  "hub" | "images" | "key" | "title" | "subtitle"
> & { songIndex: number };

export interface PlayerSliceTypes {
  playerState: boolean;
  isSongPaused: boolean;
  playlistBindedWithTheSong: ChartsTypes[] | SearchedChartsTypes[];
  currentSongPlayingIndex: number;
  changeCurrentSongIndex: (data: number) => void;
  nextSong: () => void;
  previousSong: () => void;
  getPlaylistBindedWithTheSong: (
    data: ChartsTypes[] | SearchedChartsTypes[]
  ) => void;
  changePausedState: (state: boolean) => void;
  showPlayer: () => void;
  hidePlayer: () => void;
}

export const createPlayerStateSlice: StateCreator<
  GlobalSlicesType,
  [],
  [],
  PlayerSliceTypes
> = (set) => ({
  playerState: false,
  isSongPaused: false,
  currentSongPlayingIndex: 0,
  changeCurrentSongIndex: (data) =>
    set((state) => ({ ...state, currentSongPlayingIndex: data })),
  nextSong: () =>
    set((state) => ({
      ...state,
      currentSongPlayingIndex: state.currentSongPlayingIndex + 1,
    })),
  previousSong: () =>
    set((state) => ({
      ...state,
      currentSongPlayingIndex: state.currentSongPlayingIndex - 1,
    })),
  playlistBindedWithTheSong: [],
  getPlaylistBindedWithTheSong: (data) =>
    set((state) => ({ ...state, playlistBindedWithTheSong: data })),
  changePausedState: (pausedState) =>
    set((state) => ({ ...state, isSongPaused: pausedState })),
  showPlayer: () => set((state) => ({ ...state, playerState: true })),
  hidePlayer: () => set((state) => ({ ...state, playerState: false })),
});

// playerState: false,
//   togglePlayerState: () => set(state) => ({...state, playerState: !state.playerState})
