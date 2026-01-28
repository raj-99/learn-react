import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SimpleForm from './components/Form'
import TemperatureInput from './components/TemperatureInput'
import TemperatureDisplay from './components/TemperatureDisplay'
import ExampleComponent from './components/Effect'
import FetchDataComponent from './components/FetchData'

function App() {
  // const arr = useState(0)
  // const count = arr[0]
  // const setCount = arr[1]
  const [count, setCount] = useState(0)
  const [temperature, setTemperature] = useState('')

  const handleTempChange = (newTemperature) => {
    setTemperature(newTemperature)
  }
  
  const incrementCount = () => {
    setCount(count+1) // update count state with new value
  }
  const decrementCount = () => {
    setCount(count-1)
  }

  return (
    <>
    {/* <p>Count: {count}</p>
    <button onClick={incrementCount}>Increment</button>
    <button onClick={decrementCount}>Decrement</button> */}
    {/* <SimpleForm/> */}
    {/* <TemperatureInput temperature={temperature} onTemperatureChange={handleTempChange}/>
    <TemperatureDisplay temperature={temperature}/> */}
    {/* <ExampleComponent/> */}
    <FetchDataComponent/>


    </>
  )
}

export default App
