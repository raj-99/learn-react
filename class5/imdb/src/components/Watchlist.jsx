import React, { useDebugValue, useEffect, useState, useContext, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import genreids from "../constants";
import { WatchListContext } from "../context/WatchListContext";

function Watchlist() {
  const [list, setList] = useState([]);
  const [search, setSearch] = useState("");
  const [genreList, setGenreList] = useState(["All Genres", "Thriller"]);
  const [currentGenre, setCurrentGenre] = useState("All Genres");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  useEffect(() => {
  const handler = setTimeout(() => {
    setDebouncedSearch(search);
  }, 300); // 300ms delay

  return () => clearTimeout(handler); // Cleanup: stops timer if user types again
}, [search]);

  const { addToWatchList, watchList, removeFromWatchList, setWatchList } =
    useContext(WatchListContext);

  const swappingArray = (arr, fromIndex, toIndex) => {
    const element = arr[fromIndex];
    const newArray = [...arr];
    newArray.splice(fromIndex, 1);
    newArray.splice(toIndex, 0, element);
    return newArray;
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    const moviesFromLocalStorage = JSON.parse(
      localStorage.getItem("watchlist"),
    );
    if (moviesFromLocalStorage) {
      setList(moviesFromLocalStorage);
    }
  }, []);

  useEffect(() => {
    let temp = list.map((movie) => {
      return genreids[movie.genre_ids[0]];
    });

    temp = new Set(temp);
    setGenreList(["All Genres", ...temp]);
  }, [list]);

  const genre = (genre_id) => {
    return genreids[genre_id];
  };

  const handleAscendingRatings = () => {
    console.log("Ascending Ratings");
    const sortedWatchlist = list.sort(
      (a, b) => a.vote_average - b.vote_average,
    );
    setList([...sortedWatchlist]);
  };

  const handleDescendingRatings = () => {
    console.log("Descending Ratings");
    const sortedWatchlist = list.sort(
      (a, b) => b.vote_average - a.vote_average,
    );
    setList([...sortedWatchlist]);
  };

  const handleFilter = (genre) => {
    setCurrentGenre(genre);
  };

  const filteredList = useMemo(() => {
  return list.filter(movie => {
     // combined filter logic here
     const matchesGenre = currentGenre === "All Genres" || genreids[movie.genre_ids[0]] === currentGenre;
                const matchesSearch = movie.title.toLowerCase().includes(search.toLowerCase());
                return matchesGenre && matchesSearch;
  });
}, [list, search, currentGenre]);

// utils/throttle.js
const throttle = (func, limit) => {
  let lastFunc;
  let lastRan;
  return function(...args) {
    const context = this;
    if (!lastRan) {
      func.apply(context, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(function() {
        if ((Date.now() - lastRan) >= limit) {
          func.apply(context, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  }
}


  return (
    <>
      <div className="flex justify-center m-4">
        {genreList.map((genre) => {
          const isActive = currentGenre === genre;
          const baseStyles =
            "flex justify-center items-center h-[3rem] w-[8rem] rounded-lg text-white font-bold mx-4 hover:cursor-pointer";
          const bgColor = isActive ? "bg-blue-400" : "bg-gray-500/50";
          return (
            <div
              onClick={() => {
                handleFilter(genre);
              }}
              className={`${baseStyles} ${bgColor}`}
            >
              {genre}
            </div>
          );
        })}
      </div>

      <div className="flex justify-center my-10">
        <input
          placeholder="Search Movie"
          className="h-[3rem] w-[18rem] bg-gray-200 px-4 outline-none border border-gray-300"
          type="text"
          onChange={handleSearch}
          value={search}
        />
      </div>
      <div className="overflow-hidden rounded-lg border-gray-200 shadow-md m-5">
        <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-6 py-4 font-medium text-gray-900">Name</th>
              <th>
                <div className="flex">
                  <div>
                    <i
                      className="fa-solid fa-arrow-up mx-1 hover:cursor-pointer"
                      onClick={handleAscendingRatings}
                    ></i>
                    Ratings
                  </div>
                  <i
                    className="fa-solid fa-arrow-down mx-1 hover:cursor-pointer"
                    onClick={handleDescendingRatings}
                  ></i>
                </div>
              </th>
              <th>
                <div className="flex">
                  <div>Popularity</div>
                </div>
              </th>
              <th>
                <div className="flex">
                  <div>Genre</div>
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 border-t border-gray-100">
            {filteredList
              .map((movie) => {
                return (
                  <tr className="hover:bg-gray-50">
                    <td className="flex items-center px-6 py-4 font-normal text-gray-900">
                      <img
                        className="h-[6rem] w-[10rem] object-fit object-cover rounded-r-lg"
                        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                        alt=""
                      />
                      <div className="font-medium text-gray-700 text-sm px-6">
                        {movie.title}
                      </div>
                    </td>
                    <td className="pl-6 py-4">
                      {movie.vote_average.toFixed(1)}
                    </td>
                    <td className="pl-6 py-4">{movie.popularity}</td>
                    <td className="pl-6 py-4">{genre(movie.genre_ids[0])}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Watchlist;
