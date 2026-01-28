import React, { useContext, useEffect, useEffectEvent, useState } from "react";
import Pagination from "./Pagination";
import MovieCard from "./MovieCard";
import axios from "axios";
import {WatchListContext} from "../context/WatchListContext";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const {addToWatchList, watchList, removeFromWatchList, setWatchList} = useContext(WatchListContext)

  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=611ef193869e5e19a58d059ad4294ba8&language=en-US&page=${pageNo}`)
    .then((response) => {
        setMovies(response.data.results)
    })
  },[pageNo])

  const handleNext = () => {
    setPageNo(pageNo + 1);
  };
  const handlePrevious = () => {
    if (pageNo == 1) {
      setPageNo(1);
    } else {
      setPageNo(pageNo - 1);
    }
  };
  return (
    <div>
      <div className="text-2xl font-bold text-center m-5">
        <h1>Trending Movies</h1>
      </div>
      <div className="flex justify-evenly flex-wrap gap-8">
        {movies.map((moviesObj) => {
          return (
            <MovieCard moviesObj={moviesObj} addToWatchList={addToWatchList} watchList={watchList} removeFromWatchList={removeFromWatchList}/>
          );
        })}
      </div>
      <Pagination nextPageFunc={handleNext} prevPageFunc={handlePrevious} pageNo={pageNo}/>
    </div>
  );
};

export default Movies;
