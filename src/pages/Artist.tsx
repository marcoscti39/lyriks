import React from "react";
import { useParams } from "react-router-dom";
import { fetchArtist } from "../api/fetchArtist";
import { fetchRelatedSongs } from "../api/fetchRelatedSongs";
import { useLyriksData } from "../stateManagement/store";

const Artist = () => {
  const artistData = useLyriksData((state) => state.artistData);
  const artistSongsRelated = useLyriksData((state) => state.artistRelatedSongs);
  const getArtistData = useLyriksData((state) => state.getArtistData);
  const getArtistSongsRelated = useLyriksData(
    (state) => state.getArtistRelatedSongs
  );

  const { artistId } = useParams();

  const artistName = artistData?.artists?.[artistId!]?.attributes?.name;
  const artistGenre = artistData?.artists?.[artistId!]?.attributes?.genreNames;
  const artistImg = artistData?.artists?.[artistId!]?.attributes?.artwork?.url;
  const artistMostPopularSongId =
    artistData?.artists?.[artistId!]?.views?.["top-songs"]?.data[0]?.id;

  React.useEffect(() => {
    const getData = async () => {
      getArtistData(await fetchArtist(artistId!));
    };
    getData();
  }, []);

  React.useEffect(() => {
    const getData = async () => {
      if (artistMostPopularSongId) {
        getArtistSongsRelated(await fetchRelatedSongs(artistMostPopularSongId));
      }
    };
    getData();
  }, [artistData]);
  return (
    <section className="text-white bg-gradient-to-r pb-[3rem] from-purple to-light-blue sm:ml-side-bar-width laptop:pr-top-charts-fixed-width pt-[10rem] min-h-screen">
      <div className="flex relative gap-4 items-center px-4 mb-[4rem] before:absolute before:top-[-50%] before:z-[1] before:w-full before:h-full before:bg-gradient-to-r  before:from-dark-blue before:to-artist-background-to-color">
        <div className="w-[200px] h-[200px] relative z-10">
          <img
            src={artistImg}
            className="bg-blue-400 rounded-[50%] object-cover w-full h-full border-[1px] border-white"
          />
        </div>
        <div className="flex flex-col gap-4 relative z-10">
          <h1 className="text-2xl font-semibold">{artistName}</h1>
          <span className="text-light-gray">
            {artistGenre?.map((genre) => genre).join(", ")}
          </span>
        </div>
      </div>

      {artistSongsRelated.length > 5 && (
        <section>
          <h2 className="text-3xl font-semibold ml-4 mb-4">Related Songs:</h2>

          <div className="flex flex-col gap-2 mx-4">
            {artistSongsRelated?.map((song, index) => (
              <article className="flex gap-4 items-center bg-very-opacity-gray backdrop-blur-3xl p-3 rounded mx-2">
                <span>{index + 1}.</span>
                <img
                  src={song?.images?.coverart}
                  alt=""
                  className="w-[70px] h-[70px] rounded-xl object-cover bg-red-500"
                />
                <div className="flex flex-col gap-2 flex-1">
                  <h3 className="font-bold">{song?.title}</h3>
                  <strong className="font-thin text-light-gray">
                    {song?.subtitle}
                  </strong>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}
    </section>
  );
};

export default Artist;
