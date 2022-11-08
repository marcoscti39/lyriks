import { StateCreator } from "zustand";
import { GlobalSlicesType } from "../store";

export interface ChartsTypes {
  layout: string;
  type: string;
  key: string;
  title: string;
  subtitle: string;
  share: {
    subject: string;
  };
  images: {
    background: string;
    coverart: string;
    coverarthq: string;
    joecolor: string;
  };
  hub: {
    type: string;
    image: string;
    actions: [
      {
        name: string;
        type: string;
        id: string;
      },
      {
        name: string;
        type: string;
        uri: string;
      }
    ];
    options: [
      {
        caption: string;
        actions: [
          {
            name: string;
            type: string;
            uri: string;
          }
        ];
        beacondata: {
          type: string;
          providername: string;
        };
        image: string;
        type: string;
        listcaption: string;
        overflowimage: string;
        colouroverflowimage: boolean;
        providername: string;
      }
    ];
  };
  explicit: boolean;
  displayname: string;
  artists: [
    {
      alias: string;
      id: string;
      adamid: string;
    }
  ];
  url: string;
  highlightsurls: {};
  properties: {};
}

export interface ChartsGenreSliceTypes {
  worldChartsGenre: ChartsTypes[];
  getChartsGenre: (data: ChartsTypes[]) => void;
}

export const createWorldChartsGenreSlice: StateCreator<
  GlobalSlicesType,
  [],
  [],
  ChartsGenreSliceTypes
> = (set) => ({
  worldChartsGenre: [] as ChartsTypes[],
  getChartsGenre: (data: ChartsTypes[]) =>
    set((state) => ({ ...state, worldChartsGenre: data })),
});

// interface FishSlice {
//   fishes: number;
//   addFish: () => void;
// }
// const createFishSlice: StateCreator<
//   BearSlice & FishSlice,
//   [],
//   [],
//   FishSlice
// > = (set) => ({
//   fishes: 0,
//   addFish: () => set((state) => ({ fishes: state.fishes + 1 })),
// });
