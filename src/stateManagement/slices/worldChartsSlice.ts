import { ChartsTypes, ChartsGenreSliceTypes } from "./worldChartsGenreSlice";

import { StateCreator } from "zustand";
import { PlayerSliceTypes } from "./playerSlice";

export interface WorldChartsSliceTypes {
  worldCharts: ChartsTypes[];
  getWorldCharts: (data: ChartsTypes[]) => void;
}

export const createWorldChartsSlice: StateCreator<
  ChartsGenreSliceTypes & PlayerSliceTypes & WorldChartsSliceTypes,
  [],
  [],
  WorldChartsSliceTypes
> = (set) => ({
  worldCharts: [] as ChartsTypes[],
  getWorldCharts: (data: ChartsTypes[]) =>
    set((state) => ({ ...state, worldCharts: data })),
});
