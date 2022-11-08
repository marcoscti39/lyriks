import React, { FormEvent } from "react";
import { FiSearch as SearchIcon } from "react-icons/fi";
import { GiHamburgerMenu as MenuIcon } from "react-icons/gi";
import { useNavigate, useParams } from "react-router-dom";
import { fetchSearchedSongs } from "../api/fetchSearchedSong";
import { useMenuMobileContext } from "../context/MenuMobileContext";
import { useLyriksData } from "../stateManagement/store";

const SearchBar = () => {
  const { isMenuMobileOpen, setIsMenuMobileOpen } = useMenuMobileContext();
  const getSongsSearched = useLyriksData((state) => state.getSongsSearched);

  const searchInputRef = React.useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const handleSearch = async (searchedSong: string, event: FormEvent) => {
    event.preventDefault();
    if (searchedSong === "") return;
    getSongsSearched(await fetchSearchedSongs(searchedSong));

    navigate(`search/${searchedSong}`);
  };
  return (
    <form
      className="flex gap-4 items-center p-2 bg-gradient-to-r right-0 left-0 fixed z-20 from-purple to-light-blue  sm:ml-side-bar-width"
      onSubmit={(e) => handleSearch(searchInputRef?.current!.value, e)}
    >
      <SearchIcon className="text-2xl text-light-gray" />
      <input
        ref={searchInputRef}
        type="search"
        placeholder="Search"
        className="flex-1 text-lg indent-2 bg-transparent text-white h-[2.2rem]"
      />

      <button
        type="button"
        className="flex items-center text-2xl text-white sm:hidden"
        onClick={() => setIsMenuMobileOpen(!isMenuMobileOpen)}
      >
        <MenuIcon />
      </button>
    </form>
  );
};

export default SearchBar;
