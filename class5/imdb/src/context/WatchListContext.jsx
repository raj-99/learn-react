import { createContext, useState, useEffect } from "react";

const WatchListContext = createContext();

export default function WatchListContextWrapper({children}) {
  const [watchList, setWatchList] = useState([]);

  const addToWatchList = (moviesObj) => {
    const updatedWatchList = [...watchList, moviesObj];
    setWatchList(updatedWatchList);
    localStorage.setItem("watchlist", JSON.stringify(updatedWatchList));
  };
  useEffect(() => {
    const moviesFromLocalStorage = JSON.parse(
      localStorage.getItem("watchlist"),
    );
    if (moviesFromLocalStorage) {
      setWatchList(moviesFromLocalStorage);
    }
  }, []);

  const removeFromWatchList = (moviesObj) => {
    let filteredMovies = watchList.filter((movie) => movie.id !== moviesObj.id);
    setWatchList(filteredMovies);
    localStorage.setItem("watchlist", JSON.stringify(filteredMovies));
  };
  return <WatchListContext.Provider value={{addToWatchList,setWatchList,watchList,removeFromWatchList}}>{children}</WatchListContext.Provider>;
}

export {WatchListContext};