import React from "react";
import { fetchByCountry } from "../api/fetchByCountry";
import { fetchUserLocation } from "../api/fetchUserLocation";

import ContainerOfItems from "../components/ContainerOfItems";
import Loader from "../components/Loader";
import MusicCard from "../components/MusicCard";
import { useLyriksData } from "../stateManagement/store";

const AroundYou = () => {
  const aroundYouSongs = useLyriksData((state) => state.aroundYouSongs);
  const getAroundYouSongs = useLyriksData((state) => state.getAroudYouSongs);
  const userCountry = useLyriksData((state) => state.userCountry);
  const getUserCountry = useLyriksData((state) => state.getUserCountry);

  React.useEffect(() => {
    const getCountry = async () => {
      const userCountry = await fetchUserLocation();
      return userCountry.countryISO2;
    };

    const getData = async () => {
      const userCountry = await getCountry();
      console.log(userCountry);
      getUserCountry(userCountry);
      getAroundYouSongs(await fetchByCountry(userCountry));
    };
    getData();
  }, []);
  return (
    <section className="bg-gradient-to-r from-purple to-light-blue min-h-screen sm:ml-side-bar-width pb-[3rem]  laptop:pr-top-charts-fixed-width ">
      {aroundYouSongs.length < 5 ? (
        <Loader />
      ) : (
        <>
          <h1 className="text-4xl text-white font-semibold laptop:pt-[5rem] pl-4">
            Around You {userCountry}
          </h1>
          <ContainerOfItems>
            {aroundYouSongs.map((song, index) => (
              <React.Fragment key={index}>
                {" "}
                <MusicCard
                  trackId={song.key}
                  {...song}
                  songIndex={index}
                  playlist={aroundYouSongs}
                />{" "}
              </React.Fragment>
            ))}
          </ContainerOfItems>
        </>
      )}
    </section>
  );
};

export default AroundYou;
