import create from "zustand";
import { AroundYouSlice, createAroundYouSlice } from "./slices/aroundYouSlice";
import { ArtistSliceTypes, createArtistSlice } from "./slices/artistSlice";
import { createPlayerStateSlice, PlayerSliceTypes } from "./slices/playerSlice";
import {
  createSearchSongsSlice,
  SearchSongsSlice,
} from "./slices/searchSongsSlice";
import {
  createSongDetailsSlice,
  SongDetailsSliceTypes,
} from "./slices/songDetailsSlice";
import {
  ChartsGenreSliceTypes,
  createWorldChartsGenreSlice,
} from "./slices/worldChartsGenreSlice";
import {
  createWorldChartsSlice,
  WorldChartsSliceTypes,
} from "./slices/worldChartsSlice";

export type GlobalSlicesType = ChartsGenreSliceTypes &
  PlayerSliceTypes &
  WorldChartsSliceTypes &
  SongDetailsSliceTypes &
  ArtistSliceTypes &
  SearchSongsSlice &
  AroundYouSlice;

export const useLyriksData = create<GlobalSlicesType>()((...set) => ({
  ...createWorldChartsGenreSlice(...set),
  ...createPlayerStateSlice(...set),
  ...createWorldChartsSlice(...set),
  ...createSongDetailsSlice(...set),
  ...createArtistSlice(...set),
  ...createSearchSongsSlice(...set),
  ...createAroundYouSlice(...set),
}));
