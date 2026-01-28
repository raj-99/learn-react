import { useEffect } from 'react'
import {useState} from 'react'

const  ExampleComponent = () => {
    const [count, setCount] = useState(0)
    useEffect(()=>{
        // document.title = `You clicked me ${count} times`

        const timer = setInterval(()=>{
            console.log("timer tick")
        },1000)

        //Cleanup function as part of unmounting
        return () => {
            clearInterval(timer)
        }
    },[count])
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count+1)}>Click ME!</button>
        </div>
    )
}

export default ExampleComponent