import React from "react";

function MovieCard({
  moviesObj,
  addToWatchList,
  watchList,
  removeFromWatchList,
}) {
  const doesContain = (moviesObj) => {
    return watchList.find((element) => moviesObj.id === element.id);
  };
  return (
    <div
      className="h-[40vh] w-[200px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 justify-between flex flex-col"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${moviesObj.poster_path})`,
      }}
    >
      {doesContain(moviesObj) ? (
        <div
          className="m-4 flex justify-center h-8 w-8 items-center rounded-lg bg-red-900 hover:cursor-pointer"
          onClick={() => {
            removeFromWatchList(moviesObj);
          }}
        >
          ❌
        </div>
      ) : (
        <div
          className="m-4 flex justify-center h-8 w-8 items-center rounded-lg bg-gray-900 hover:cursor-pointer"
          onClick={() => addToWatchList(moviesObj)}
        >
          ➕
        </div>
      )}

      <div className="text-white w-full text-center text-2xl p-2 flex-col rounded-lg bg-gray-900 opacity-75">
        {moviesObj.title}
      </div>
    </div>
  );
}

export default MovieCard;
