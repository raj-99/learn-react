import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Banner() {
    const [bannerImage, setBannerImage] = useState('')
    const [title, setTitle] = useState('')

    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=611ef193869e5e19a58d059ad4294ba8&language=en-US&page=1')
        .then((response)=>{
            const movieBackdropPath = response.data.results[0].backdrop_path
            setBannerImage(`https://image.tmdb.org/t/p/original/${movieBackdropPath}`)
            setTitle(response.data.results[0].title)
        })
    },[])

  return (
    <div className='h-[20vh] md:h-[75vh] bg-cover bg-center flex items-end' style={{backgroundImage:`url(${bannerImage})`}}>
        <div className='text-white w-full text-center text-2xl'>{title}</div>
    </div>
  )
}

export default Banner