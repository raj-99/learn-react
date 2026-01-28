import React from 'react'
import { useEffect } from 'react'
import { useRef, useState } from 'react'

const Timer = () => {
    const [seconds, setSeconds] = useState(0)
    const intervalRef = useRef(null)

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds+1)
        },1000)

        //Code when component is unmounted - cleanup code
        return () => {
            clearInterval(intervalRef.current)
        }
    },[])

  return (
    <>
    <div>Timer</div>
    <p>Seconds: {seconds}</p>
    <button onClick={() => clearInterval(intervalRef.current)}>Stop Timer</button>
    </>
  )
}

export default Timer