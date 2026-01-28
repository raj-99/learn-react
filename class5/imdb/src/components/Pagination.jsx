import React from 'react'

function Pagination({pageNo, nextPageFunc, prevPageFunc}) {
  return (
    <div className="bg-gray-400 p-4 h-[50px] w-full mt-8  flex justify-center gap-2">
        <div onClick={prevPageFunc} className="px-8 hover:cursor-pointer">
          <i className="fa-solid fa-arrow-left"></i>
        </div>
        {pageNo}
        <div onClick={nextPageFunc} className="px-8 hover:cursor-pointer">
          <i className="fa-solid fa-arrow-right"></i>
        </div>
      </div>
  )
}

export default Pagination