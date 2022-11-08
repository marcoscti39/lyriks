import React from "react";
import { Route, Routes } from "react-router-dom";
import Player from "./components/Player";
import SearchBar from "./components/SearchBar";
import SideNav from "./components/SideNav";
import TopChartsAside from "./components/TopChartsAside";
import MenuMobileProvider from "./context/MenuMobileContext";
import Home from "./pages";
import AroundYou from "./pages/AroundYou";
import Artist from "./pages/Artist";
import Search from "./pages/Search";
import SongDetails from "./pages/SongDetails";
import TopArtists from "./pages/TopArtists";
import TopCharts from "./pages/TopCharts";

const App = () => {
  return (
    <>
      <MenuMobileProvider>
        <SideNav />
        <SearchBar />
      </MenuMobileProvider>
      <TopChartsAside />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="around-you" element={<AroundYou />} />
        <Route path="/top-artists" element={<TopArtists />} />
        <Route path="/top-charts" element={<TopCharts />} />
        <Route path="/top-artists" element={<TopArtists />} />
        <Route path="/artist/:artistName/:artistId" element={<Artist />} />
        <Route path="/search/:searchedSong" element={<Search />} />
        <Route
          path="/song/:songName/:songArtist/:trackId/:trackDetailsId"
          element={<SongDetails />}
        />
      </Routes>
      <Player />
    </>
  );
};

export default App;
