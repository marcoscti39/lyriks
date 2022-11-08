import React from "react";
import { fetchWorldCharts } from "../api/fetchWorldCharts";
import { fetchWorldChartsGenre } from "../api/fetchWorldChartsGenre";
import ContainerOfItems from "../components/ContainerOfItems";
import Loader from "../components/Loader";
import MusicCard from "../components/MusicCard";
import { useLyriksData } from "../stateManagement/store";

const Home = () => {
  const worldChartsGenre = useLyriksData((state) => state.worldChartsGenre);
  const getWorldChartGenre = useLyriksData((state) => state.getChartsGenre);
  const getWorldCharts = useLyriksData((state) => state.getWorldCharts);

  console.log(worldChartsGenre);
  React.useEffect(() => {
    const gettingData = async () => {
      getWorldChartGenre(await fetchWorldChartsGenre("POP"));
      getWorldCharts(await fetchWorldCharts());
    };
    gettingData();
  }, []);

  const changeChartsGenre = async (genre: string) => {
    const genreCorrectSyntax = genre.replace(/\s/g, "_");
    getWorldChartGenre(await fetchWorldChartsGenre(genreCorrectSyntax));
  };

  return (
    <>
      <section className="bg-gradient-to-r from-purple to-light-blue min-h-screen sm:ml-side-bar-width laptop:pr-top-charts-fixed-width">
        {worldChartsGenre.length < 5 ? (
          <Loader />
        ) : (
          <>
            <div className="flex items-center justify-between laptop:pt-[5rem]">
              <h1 className="text-4xl ml-4 mb-4 text-white font-semibold">
                Discover
              </h1>
              <select
                className="mr-4 bg-black text-white w-[100px] py-2 rounded cursor-pointer"
                onChange={(e) => changeChartsGenre(e.target.value)}
              >
                <option className="bg-black text-white" value="POP">
                  POP
                </option>
                <option className="bg-black text-white" value="HIP HOP RAP">
                  HIP HOP RAP
                </option>
                <option className="bg-black text-white" value="DANCE">
                  DANCE
                </option>
                <option className="bg-black text-white" value="ELETRONIC">
                  ELETRONIC
                </option>
                <option className="bg-black text-white" value="SOUL RNB">
                  SOUL RNB
                </option>
                <option className="bg-black text-white" value="ALTERNATIVE">
                  ALTERNATIVE
                </option>
                <option className="bg-black text-white" value="ROCK">
                  ROCK
                </option>
                <option className="bg-black text-white" value="LATIN">
                  LATIN
                </option>
                <option className="bg-black text-white" value="FILM TV">
                  FILM TV
                </option>
                <option className="bg-black text-white" value="COUNTRY">
                  COUNTRY
                </option>
                <option className="bg-black text-white" value="AFRO BEATS">
                  AFRO BEATS
                </option>
                <option className="bg-black text-white" value="WORLDWIDE">
                  WORLDWIDE
                </option>
                <option
                  className="bg-black text-white"
                  value="REGGAE DANCE HALL"
                >
                  REGGAE DANCE HALL
                </option>
                <option className="bg-black text-white" value="HOUSE">
                  HOUSE
                </option>
                <option className="bg-black text-white" value="K POP">
                  K-POP
                </option>
                <option className="bg-black text-white" value="FRENCH POP">
                  FRENCH POP
                </option>
                <option
                  className="bg-black text-white"
                  value="SINGER SONG WRITTER"
                >
                  SINGER SONG WRITTER
                </option>
                <option className="bg-black text-white" value="REG MEXICO">
                  REG MEXICO
                </option>
              </select>
            </div>
            <ContainerOfItems>
              {worldChartsGenre &&
                worldChartsGenre?.map((songs, index) => (
                  <React.Fragment key={index}>
                    <MusicCard
                      trackId={songs.key}
                      {...songs}
                      songIndex={index}
                      playlist={worldChartsGenre}
                    />
                  </React.Fragment>
                ))}
            </ContainerOfItems>
          </>
        )}
      </section>
    </>
  );
};

export default Home;
