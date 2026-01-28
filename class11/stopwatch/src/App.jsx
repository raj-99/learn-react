import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Timer from './components/Timer'
import Stopwatch from './components/Stopwatch'
import DigitalClock from './components/DigitalClock'
import Modal from './components/Modal'
import useVisibility from './hooks/useVisibility'
import DependentDropdown from './components/DependentDropdown'


function App() {
  const [count, setCount] = useState(0)
  const {isVisible, show, hide, toggle} = useVisibility(false)


  return (
    <>
      {/* <Timer/> */}
      {/* <Stopwatch/>
      <DigitalClock/> */}
      {/* <button onClick={toggle}> Toggle Modal</button>
      <button onClick={show}> Show Modal</button>
      <Modal isVisible={isVisible} hide={hide}/> */}

      <DependentDropdown/>
    </>
  )
}

export default App
